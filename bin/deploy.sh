#!/bin/bash

cd dist
ls -a . | grep ^[a-zA-Z] | xargs rm

cd ..
/opt/node-v10.16.0-linux-x64/bin/node node_modules/.bin/parcel build index.js && mv dist/* public
