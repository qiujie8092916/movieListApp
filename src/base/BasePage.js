import React, { Component } from 'react'

export default class BasePage extends Component {
    constructor(props) {
        super(props);
        this.urlQuery = this.props.navigation.state.params
    }
}