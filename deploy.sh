#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitpress/dist

git init
git add -A 
git commit -m 'deploy'

cd -