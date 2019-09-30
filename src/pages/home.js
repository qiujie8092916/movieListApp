import React, { Component } from 'react';
import BasePage from '../base/BasePage'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Enhance from '../utils/enhance';

const REQUEST_URL =
    'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0';

@Enhance
export default class movieListApp extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: null
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const response = await fetch(REQUEST_URL);
            const responseJson = await response.json();
            this.setState(
                () => ({
                    moviesList: responseJson.subjects
                }),
                () => {
                    console.log(this.state.moviesList);
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    goDetail() {
        this.push('Detail', {
            name: 'qiujie',
            age: 18,
            gender: 'male',
        })
    }

    renderMovie() {
        const { moviesList } = this.state;
        return moviesList.map(movie => (
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.item}
                key={movie.id}
                onPress={this.goDetail.bind(this)}
            >
                <Image
                    style={styles.thumb}
                    source={{
                        uri: movie.cover
                    }}
                />
                <View style={styles.right}>
                    <View style={styles.title}>
                        <Text>{movie.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.rate}>评分: {movie.rate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    showLoading() {
        return (
            <View style={styles.loading}>
                <Text>Loading Movies...</Text>
            </View>
        );
    }

    render() {
        const { moviesList } = this.state;
        return (
            <ScrollView style={styles.container}>
                {moviesList ? this.renderMovie() : this.showLoading()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F5FCFF'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    thumb: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rate: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        height: 50
    },
    right: {
        flex: 1,
        paddingLeft: 10
    }
});