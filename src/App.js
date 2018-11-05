import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import './mixin.scss'
// import { Button } from 'antd-mobile'
import FillForm from './form/fillForm'
import FormDetails from './form/formDetails'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/FillForm" component={FillForm} />
            <Route path="/FormDetails" component={FormDetails} />
            <Redirect to="/FillForm" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
