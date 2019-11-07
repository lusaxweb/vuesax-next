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
  return `@use '../../../styles/mixins' as *
.vs-${name.toLowerCase()}
  background: #000
  `.trim()
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
      class: ['vs-${name.toLowerCase()}'],
    }, this.$slots.default)
  }
}`.trim()
}

function addComponentJson(name) {
  sed('-i', '"newComponent": ""', `"vs${name}": "./src/components/vs${name}/Base/index.ts",\n  "newComponent": ""`, './build/components/components.json');
}

function addComponentExport(name) {
  sed('-i', '// new component slot', `export { default as vs${name} } from './vs${name}/Base'\n// new component slot`, './src/components/index.ts');
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

inquirer.prompt(questions).then(answers => {
  const name = answers.name

  addComponentJson(name)
  addComponentExport(name)
  mkdir('-p', `src/components/vs${name}/Base`)
  cd(`src/components/vs${name}/Base`)
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


