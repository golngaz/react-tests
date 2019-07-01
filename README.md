##run

/usr/bin/node ./node_modules/.bin/parcel index.html

## tests

.bashrc : 

```bash
function tests {
    /usr/bin/node ./node_modules/.bin/babel --plugins @babel/plugin-transform-react-jsx ${1}.js -o ${1}Test.js
    /usr/bin/node node_modules/.bin/jest --config=jest.config.js ${1}.js
    rm ${1}Test.js
}
```
