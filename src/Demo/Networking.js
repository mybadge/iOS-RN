import React, { PureComponent } from 'react';

import { 
    View, 
    Text, Button, 
    StyleSheet 
} from 'react-native';


export default class Networking extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = ({
            resp: ''
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Button title='开始请求' style={styles.btn} onPress={()=> this.loadData()}/>

                <Button title='开始请求2' style={styles.btn} onPress={()=> this.loadDataES2017()}/>
                <Text style={styles.text}>
                    {this.state.resp}
                </Text>
            </View>
        );
    }

    loadData() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    resp: JSON.stringify(responseJson)
                })
                return responseJson.movies;
            })
            .catch((error) => {
            console.error(error);
        });
    }

    async loadDataES2017() {
        try {
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json',
        );
        let responseJson = await response.json();
        this.setState({
            resp: JSON.stringify(responseJson) + 'aaaaaaa'
        })
        return responseJson.movies;
        } catch (error) {
        console.error(error);
        }
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    btn: {
        width: 60,
        height: 44,
        backgroundColor: '#999'
    },
    text: {
        color: 'red',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        //borderColor: ,
    }
});