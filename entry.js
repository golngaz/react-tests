import React from 'react'
import ReactDOM from 'react-dom'
import App from "./src/LolPatchCondenser/App";

// development
const config = {
    uri: '/',
    host: '127.0.0.1'
}

if (process.env.NODE_ENV === 'production') {
    config.host = '192.168.0.132'
    config.uri = 'http://'+config.host+'/~gael/hello_react/'
}

ReactDOM.render(<App config={config}/>, document.getElementById('app'))
