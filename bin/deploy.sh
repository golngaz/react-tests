#!/bin/bash

git add . # sécurité
cd dist
# @todo ne pas supprimer autre que ce qui est build !!!

echo "vont être supprimés : "
ls | grep -E "^.*\.(css|js|html|map)$" | cowsay

ls | grep -E "^.*\.(css|js|html|map)$" | xargs rm

cd ..
node node_modules/.bin/parcel build entry.js && cp dist/* public
