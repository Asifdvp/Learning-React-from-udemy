# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## import PropTypes from 'prop-types'
<!-- Add PropTypes -->

<!-- Class and function component -->

Navbar.propTypes = {
title:PropTypes.string.isRequired
}

<!-- Default Props -->

<!-- 1) Class and function component -->
 Navbar.defaultProps = {
    title : "sdfs"
}
<!-- 2)Class Component -->
   static defaultProps = {
        title:"Default Apps"
    }