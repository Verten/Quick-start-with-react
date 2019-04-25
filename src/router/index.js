/*
 * @Author: ebinhon
 * @Date: 2019-03-04 14:41:00
 * @Last Modified by: ebinhon
 * @Last Modified time: 2019-04-25 17:04:42
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from '../App'
import UsersPage from '../pages/users'

const Routes = () => (
  <div>
    <BrowserRouter basename='/demo'>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/users' component={UsersPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Routes
