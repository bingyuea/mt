import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './mixin.scss'
// import { Button } from 'antd-mobile'
import FormDetails from './form/formDetails'
class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDetails />
      </div>
    )
  }
}

export default App
