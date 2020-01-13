#!/usr/bin/env sh

# abort on errors
set -e


cd packages/docs/

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
echo 'vuesax.com' > CNAME

echo 'google.com, pub-4283907298344887, DIRECT, f08c47fec0942fa0' > ads.txt

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lusaxweb/vuesax-next.git master:gh-pages

cd -
