import React, { Component } from 'react';
import { View } from 'react-native';
import BasePage from '../base/BasePage'
import Enhance from '../utils/enhance';

@Enhance
export default class Detail extends BasePage {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.urlQuery);
        return (<View></View>)
    }
}