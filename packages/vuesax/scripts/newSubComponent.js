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

function FileSass(name, sub, isSub) {
  return `@import '../../../styles/mixins'
.vs-${name.toLowerCase()}${isSub ? '__' : '-' }${sub.toLowerCase()}
  background: #000
  `.trim()
}

function FileIndexTs(name, sub) {
  return `import './style.sass'
import component from './Vs${name}${sub}'

component.install = (vue: any) => {
  vue.component('vs-${name.toLowerCase()}-${sub.toLowerCase()}', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
`
}

function FileComponentTs(name, sub, isSub) {
  return `
import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
${isSub ? `import VsComponent from '../../../mixins/component'` : `import Vs${name} from '../Base'`}

@Component
export default class Vs${name}${sub} extends ${ isSub ? 'VsComponent' : `Vs${name}` } {
  public render(h: any): VNode {
    return h('button', {
      staticClass: 'vs-${name.toLowerCase()}${isSub ? '__' : '-' }${sub.toLowerCase()}',
    }, this.$slots.default)
  }
}`.trim()
}

function addComponentJson(name, sub, isSub) {
  sed('-i', '"newComponent": ""', `"vs${name}${sub}": "./src/components/vs${name}/${ isSub ? '' : '_' }${sub}/index.ts",\n  "newComponent": ""`, './build/components/components.json');
}

function addComponentExport(name, sub) {
  sed('-i', '// new component slot', `export { default as vs${name}${sub} } from './vs${name}/${sub}'\n// new component slot`, './src/components/index.ts');
}

console.log(boxen('New Component Options', {padding: 1, margin: 2 , borderColor: 'yellow', borderStyle: 'round'}));

let options = {}

inquirer.prompt([{
  type: 'input',
  name: 'name',
  message: 'Cual es el nombre del componente base ?',
  filter: String,
  validate: (value) => {
    if(test('-e', `src/components/vs${value}`)) {
      options.component = value
      return true
    } else {
      return 'This component base not exists';
    }
  }
},
{
  type: 'list',
  name: 'type',
  message: 'Cual es el tipo de sub componente que deseas crear ?',
  choices: [
    'Sub Component',
    'Extend Component'
  ]
}
]).then(answers => {
  options.type = answers.type
  inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Cual es el nombre del sub componente ?',
    filter: String,
    validate: (value) => {
      if(test('-e', `src/components/vs${answers.name}/${value}`)) {
        return 'This sub component already exists';
      } else if(!/^[A-Z]/.test(value)) {
        return 'This sub component name not Capitalize';
      } else {
        options.sub = value
        return true
      }
    }
  }).then(() => {
    const component = options.component
    const sub = options.sub
    const isSub = options.type != 'Extend Component'
    console.log(options)
    if (options.type == 'Extend Component') {

    } else {
      addComponentExport(component, sub)
    }

    addComponentJson(component, sub, isSub)
    mkdir('-p', `src/components/vs${component}/${ isSub ? '' : '_' }${sub}`)
    cd(`src/components/vs${component}/${ isSub ? '' : '_' }${sub}`)
    writeToFile(FileSass(component, sub, isSub), `style.sass`)
    writeToFile(FileIndexTs(component, sub), `index.ts`)
    writeToFile(FileComponentTs(component, sub, isSub), `vs${component}${sub}.ts`)

    execSync(`code style.sass && code vs${component}${sub}.ts && code index.ts`)

    emptyLine()
    emptyLine()
    if (isSub) {
      green(chalk.bold(`Success Create Sub Component!`))
    } else {
      green(chalk.bold(`Success Create Extend Component!`))
    }
    emptyLine()
    emptyLine()
  })
})


