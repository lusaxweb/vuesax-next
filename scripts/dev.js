const { execSync } = require('child_process')
const { cd } = require('shelljs')


cd('./packages/docs')

execSync(`npm run dev`)

// cd('../../')

// execSync(
//     `tsc -w packages/vuesax/src/index.ts --module es6`
//     )