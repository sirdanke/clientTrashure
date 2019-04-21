import React, { Component } from 'react'
import { View, TextInput, 
        KeyboardAvoidingView, Dimensions, 
        Button, Text, TouchableOpacity } from 'react-native'

import FeatherIcon from "react-native-vector-icons/Feather"

export default class RegisterForm extends Component {

    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <View style={{ flex: 1, height: deviceHeight * 1, backgroundColor: 'black' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ flex: 1, maxHeight: deviceHeight * 0.08, marginBottom: 3, marginRight: deviceWidth * 0.1, marginLeft: deviceWidth * 0.1, backgroundColor: 'white', flexDirection: "row", alignItems: 'center' }}>
                            <TextInput
                                style={{ width: deviceWidth * 0.8 }}
                                placeholder="email" />
                        </View>
                        <View style={{ flex: 1, maxHeight: deviceHeight * 0.08, marginBottom: 3, marginRight: deviceWidth * 0.1, marginLeft: deviceWidth * 0.1, backgroundColor: 'white', flexDirection: "row", alignItems: 'center' }}>
                            <TextInput
                                style={{ width: deviceWidth * 0.8 }}
                                placeholder="name" />
                        </View>

                        <View style={{ flex: 1, maxHeight: deviceHeight * 0.08, marginBottom: 3, marginRight: deviceWidth * 0.1, marginLeft: deviceWidth * 0.1, backgroundColor: 'white', flexDirection: "row", alignItems: 'center' }}>
                            {/* <FeatherIcon
                                name="lock" size={20} color="black" /> */}
                            <TextInput
                                style={{ width: deviceWidth * 0.8 }}
                                placeholder="password" />
                        </View>
                        <View
                            style={{ flex: 1, maxHeight: deviceHeight * 0.06, marginTop: 3, marginLeft: deviceWidth * 0.3, marginRight: deviceWidth * 0.3 }}>
                            <Button
                                title="Register" />
                        </View>
                        <View
                            style={{ flex: 1, flexDirection: 'row', marginLeft: deviceWidth * 0.2, marginRight: deviceWidth * 0.2, maxHeight: deviceHeight * 0.06, justifyContent:'center' }}>
                            <TouchableOpacity><Text style={{ color: 'skyblue' }}>register </Text></TouchableOpacity>
                            <Text style={{ color: 'white' }}>with google acount </Text>
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>


        )
    }
}


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
