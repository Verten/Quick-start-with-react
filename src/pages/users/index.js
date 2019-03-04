import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserList } from './components'
import * as Actions from './actions'

export class UsersListPage extends Component {
  componentDidMount = () => {
    this.props.actions.fetchUsersRequest()
  }

  handleUserClick = id => {
    this.props.actions.fetchUserByIdRequest(id)
  }

  render() {
    console.info('user data:', this.props.usersList)
    return <UserList data={this.props.usersList} selectUserFunc={this.handleUserClick} />
  }
}

function mapStateToProps(state) {
  const { users } = state
  const { isProcessing, usersList, currentUser, error } = users
  return {
    isProcessing,
    error,
    currentUser,
    usersList,
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatch
)(UsersListPage)
