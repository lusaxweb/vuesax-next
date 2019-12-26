const { execSync } = require('child_process')
const { cd } = require('shelljs')


cd('./packages/docs')

execSync(`vuepress dev`)