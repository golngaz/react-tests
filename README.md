## run

/usr/bin/node ./node_modules/.bin/parcel index.html

## build

/usr/bin/node ./node_modules/.bin/parcel build index.html

## tests

.bashrc : 

```bash
function jest {
    node node_modules/.bin/jest --config=jest.config.js $@
}

function test {
    php ./bin/jsxTest.php src __tests__/tmp
    jest ${1}.test
    rm -fr __tests__/tmp
}

function rerun {
    jest ${1}.test
}

```

```bash
test Counter
```