import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Navbar extends Component {
    static defaultProps = {
        title:"Default Apps"
    }
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}
Navbar.propTypes = {
title:PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title : "sdfs"
// }