import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
// import 'antd-mobile/dist/antd-mobile.less' // or ''
import './App.css'
import { Button } from 'antd-mobile'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <Button>Start</Button>
        </div>
      </div>
    )
  }
}

export default App
