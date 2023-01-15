#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:christina-xhy/record-keeping.git &&
git push -u origin main -f
cd ..

