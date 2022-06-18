import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Navbar extends Component {
    static defaultProps = {
        title:"Default Apps"
    }
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
Navbar.propTypes = {
title:PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title : "sdfs"
// }