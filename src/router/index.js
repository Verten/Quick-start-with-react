/*
 * @Author: ebinhon
 * @Date: 2019-03-04 14:41:00
 * @Last Modified by: ebinhon
 * @Last Modified time: 2019-03-04 17:47:55
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App'
import UsersPage from '../pages/users'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/users' component={UsersPage} />
    </Switch>
  </div>
)

export default Routes
