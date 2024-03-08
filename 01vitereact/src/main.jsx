import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App Function</h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   childern: 'Click Me to Visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Take a look of Google</a>
)

const anotherUser = "Hitesh Chaudhary"

const ReactElement = React.createElement(
  'a',
  { href: 'https://instagram.com', target: '_blank' },
  'Go to the insta page',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
