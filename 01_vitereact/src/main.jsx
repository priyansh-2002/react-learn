import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { jsx as _jsx } from 'react/jsx-runtime'

function MyApp(){
    return(
        <div>
            <h1>Custom app | coffee</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = `Prince`

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Ckick me to visit google',
    anotherElement
)

createRoot(document.getElementById('root')).render(
  
    <App />,
    // reactElement
  
)
