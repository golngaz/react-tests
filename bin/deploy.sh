#!/bin/bash
rm -r dist && /opt/node-v10.16.0-linux-x64/bin/node node_modules/.bin/parcel build index.js && mv dist/* public
