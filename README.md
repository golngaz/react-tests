## run

/usr/bin/node ./node_modules/.bin/parcel index.html

## build

/usr/bin/node ./node_modules/.bin/parcel build index.html

## tests


#### if not --global jest
* .bashrc : 
```bash
function jest {
    # la commande jest accepte les pattern et est configurable en ajoutant un fichier jest.config.js
    node node_modules/.bin/jest --config=jest.config.js $@
}
```
```bash
function test {
    jest ${1}.test
}
```
* bash
```bash
test Counter
```

### Jest
https://jestjs.io/en/
