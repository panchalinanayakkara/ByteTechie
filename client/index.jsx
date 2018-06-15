import React from 'react'
import ReactDOM from 'react-dom'

import PharmacyContainer from './PharmacyContainer'

const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('app')
  )
}

render(PharmacyContainer);