module.exports = Object.assign({
    rootDir: __dirname,
    roots: [__dirname],
    displayName: 'example',
    moduleNameMapper: {
        // this is just here so our examples look like they would in a real project
        'react-testing-library': require.resolve('.'),
    },
})