import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class userList extends Component {
  static propTypes = {
    data: PropTypes.array,
    selectUserFunc: PropTypes.func,
  }
  render() {
    const { data = [], selectUserFunc } = this.props
    return (
      <Fragment>
        <div className='title'>USER LIST</div>
        <div>
          {data &&
            data.map(_data => {
              return (
                <div className='list__Item' key={_data.id}>
                  <img src={_data.avatar_url} alt={_data.login} onClick={() => selectUserFunc(_data.login)} />
                  <div>{_data.login}</div>
                </div>
              )
            })}
        </div>
      </Fragment>
    )
  }
}
