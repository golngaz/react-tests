import React from 'react'
import ReactDOM from 'react-dom'
import App from "./src/LolPatchCondenser/App";

// development
const config = {
    uri: '/'
}

if (process.env.NODE_ENV === 'production') {
    config['uri'] = 'http://127.0.0.1/~gael/hello_react/'
}

ReactDOM.render(<App config={config}/>, document.getElementById('app'))
