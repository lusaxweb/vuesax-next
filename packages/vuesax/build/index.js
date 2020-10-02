
const { execSync } = require('child_process')
const print = require('./utils/print.js')
const yellow = print('yellow')
const emptyLine = print()
const chalk = require('chalk')
const green = print('green')

emptyLine()
emptyLine()
yellow(`Building ${chalk.bold('Vuesax')} Framework`)
emptyLine()
emptyLine()

execSync(
  `npx webpack --config build/lib/webpack.umd.js`, {stdio: 'inherit'}
  )

emptyLine()
emptyLine()
yellow(`Building Components`)
emptyLine()
emptyLine()

execSync(
  `npx webpack --config build/components/webpack.components.js`, {stdio: 'inherit'}
  )

emptyLine()
emptyLine()
yellow(`Building Styles`)
emptyLine()
emptyLine()

execSync(
  `npx webpack --config build/styles/webpack.styles.js`, {stdio: 'inherit'}
  )

emptyLine()
emptyLine()
green(chalk.bold(`Success Build!`))
emptyLine()
emptyLine()

// v0.1.3
