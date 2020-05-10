import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import LoginForm from "./LoginForm"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/Home' component={Home}/>
      <Route path='/Registration' component={Registration}/>
      <Route path='/LoginForm' component={LoginForm}/>
    </Switch>
  </main>
)

export default Main
