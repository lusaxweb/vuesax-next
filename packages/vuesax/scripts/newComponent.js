const path = require('path')
// const { ShellString, test, mkdir, cd, sed, exit, exec } = require('shelljs')
const { mkdir, ShellString, cd, sed, exit, test } = require('shelljs')
const inquirer = require('inquirer');
const boxen = require('boxen');
const { execSync } = require('child_process')
const chalk = require('chalk')
const print = require('../build/utils/print.js')
const green = print('green')
const emptyLine = print()

const writeToFile = (contents, file) => {
  new ShellString(contents).to(file)
}

function FileSass(name) {
  return `@import '../../../styles/mixins'
@import '../../../styles/colors'
@import 'root'

.vs-${name.toLowerCase()}
  background: vs-color('color')
  color: #fff
  `.trim()
}

function FileRootSass(name) {
  return `.vs-${name.toLowerCase()}
  --vs-color: var(--vs-primary)`.trim()
}

function FileIndexTs(name) {
  return `import './style.sass'
import component from './Vs${name}'

component.install = (vue: any) => {
  vue.component('vs-${name.toLowerCase()}', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
`
}

function FileComponentTs(name) {
  return `
import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class Vs${name} extends VsComponent {
  public render(h: any): VNode {
    return h('button', {
      staticClass: ['vs-${name.toLowerCase()}'],
    }, this.$slots.default)
  }
}`.trim()
}

function addComponentJson(name) {
  sed('-i', '"newComponent": ""', `"vs${name}": "./src/components/vs${name}/Base/index.ts",\n  "newComponent": ""`, './build/components/components.json');
}

function addComponentExport(name) {
  sed('-i', '// new component slot', `export { default as vs${name} } from './vs${name}/Base/index'\n// new component slot`, './src/components/index.ts');
}

console.log(boxen('New Component Options', {padding: 1, margin: 2 , borderColor: 'yellow', borderStyle: 'round'}));

var questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Cual es el nombre del nuevo componente ?',
    filter: String,
    validate: (value) => {
      if(test('-e', `src/components/vs${value}`)) {
        return 'This component already exists';
      } else if(!/^[A-Z]/.test(value)) {
        return 'This component name not Capitalize';
      } else {
        return true
      }
    }
  }
];

// Create component Docs
function FileComponentExample(name) {
  return `<template>
  <div class="center">
    <vs-${name.toLowerCase()}>
      Hola mundo
    </vs-${name.toLowerCase()}>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>`.trim()
}

function FileComponentMD(name) {
  return `---
PROPS:
  - name: nombre de la propiedad
    type: String
    values: Valores separados en coma
    description: texto descriptivo.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            ...

SLOTS:
  - name: animate
    type: slot
    values: null
    description: texto descriptivo.
    default: null
    link: /api/slot
    usage: '#animated'
    code: >
            ...
---

# ${name}

<card>

## Default

<docs-warn />

Descripción

<div slot="example">
  <${name}-default />
</div>

<div slot="template">

  ${'```'}html{3,4,5}
    ...
  ${'```'}

</div>

</card>`.trim()
}

function addComponentConfig(name) {
  sed('-i', '// new component slot 1', `{ text: '${name}', link: ${'`${lang}'}docs/components/${name}${'`'} },\n\t\t\t\t\t\t\t// new component slot 1`, '../../config.js');
  sed('-i', '// new component slot 2', `${'`${lang}'}docs/components/${name}${'`'},\n\t\t\t\t\t\t// new component slot 2`, '../../config.js');
}

inquirer.prompt(questions).then(answers => {
  const name = answers.name

  // docs
  cd(`../docs/docs/components`)
  writeToFile(FileComponentMD(name), `${name}.md`)
  mkdir('-p', `../../.vuepress/components/${name}`)
  cd(`../../.vuepress/components/${name}`)
  writeToFile(FileComponentExample(name), `default.vue`)
  addComponentConfig(name)

  // Create Component Files
  cd('../../../../vuesax')

  addComponentJson(name)
  addComponentExport(name)
  mkdir('-p', `src/components/vs${name}/Base`)
  cd(`src/components/vs${name}/Base`)
  writeToFile(FileRootSass(name), `_root.sass`)
  writeToFile(FileSass(name), `style.sass`)
  writeToFile(FileIndexTs(name), `index.ts`)
  writeToFile(FileComponentTs(name), `vs${name}.ts`)


  execSync(`code style.sass && code vs${name}.ts && code index.ts`)


  emptyLine()
  emptyLine()
  green(chalk.bold(`Success Create Component!`))
  emptyLine()
  emptyLine()
})


