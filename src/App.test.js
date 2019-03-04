import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

it('renders without crashing', () => {
  const wrapper = mount(
    <Router>
      <App />
    </Router>
  )
  const Link = wrapper.find('Link')
  expect(Link.exists()).toBe(true)
  expect(Link.text()).toBe('Users Page')
})
