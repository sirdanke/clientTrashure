

import React, { Component } from 'react'
import {
    View, Text,
    Dimensions, TextInput,
    KeyboardAvoidingView, Image,
    Button, TouchableOpacity,
    ActivityIndicator
} from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome"
import FeatherIcon from "react-native-vector-icons/Feather"
import { connect } from 'react-redux'
import { UserLogin } from '../store/Actions/Api'

class Login extends Component {

    // static navigationOptions = {
    //     header: null,
    // }

    state = {
        email: '',
        password: ''
    }

    Login = () => {
        let {email, password } = this.state
        console.log(email, password, "====detail")
        
        this.props.UserLogin(email, password)
            .then(data => {
                console.log(data, "===data");
                
                this.props.navigation.navigate('ContentPage')
            })
            .catch(error => {
                console.log(error);
                
            })
    }
    render() {
        return (
            this.props.loading ? <View style={{alignItems:'center'}}><ActivityIndicator size="large" color="#0000ff" /></View> :
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                    <View style={{ flex: 1, height: deviceHeight * 1, backgroundColor: 'black' }}>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Image
                                style={{ flex: 1, width: deviceWidth * 0.5, resizeMode: 'contain' }}
                                source={{ uri: 'https://dewey.tailorbrands.com/production/brand_version_mockup_image/206/1907076206_84935ce6-6685-4ed6-a63f-7cc24d2c01e3.png?cb=1555661827' }}
                            />
                        </View>
                        <View style={{ flex: 1, maxHeight: deviceHeight * 0.5, justifyContent: 'center' }}>
                            <View style={{ flex: 1, maxHeight: deviceHeight * 0.08, marginBottom: 3, marginRight: deviceWidth * 0.1, marginLeft: deviceWidth * 0.1, backgroundColor: 'white', flexDirection: "row", alignItems: 'center' }}>
                                <FeatherIcon
                                    name="user" size={20} color="black" />
                                <TextInput
                                    onChangeText={(email) => this.setState({ email })}
                                    style={{ width: deviceWidth * 0.8 }}
                                    placeholder="email" />
                            </View>
                            <View style={{ flex: 1, maxHeight: deviceHeight * 0.08, marginBottom: 3, marginRight: deviceWidth * 0.1, marginLeft: deviceWidth * 0.1, backgroundColor: 'white', flexDirection: "row", alignItems: 'center' }}>
                                <FeatherIcon
                                    name="lock" size={20} color="black" />
                                <TextInput
                                    onChangeText={(password) => this.setState({ password })}
                                    style={{ width: deviceWidth * 0.8 }}
                                    placeholder="password" />
                            </View>
                            <View
                                style={{ flex: 1, maxHeight: deviceHeight * 0.06, marginTop: 3, marginLeft: deviceWidth * 0.3, marginRight: deviceWidth * 0.3 }}>
                                <Button
                                    onPress={() => this.Login()}
                                    title="sign in" />
                            </View>
                            <View
                                style={{ flex: 1, flexDirection: 'row', marginLeft: deviceWidth * 0.2, marginRight: deviceWidth * 0.2, maxHeight: deviceHeight * 0.06 }}>
                                <Text style={{ color: 'white' }}>Don't have account ? </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Register')}><Text style={{ color: 'skyblue' }}>register</Text></TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </KeyboardAvoidingView>
        )
    }
}

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const mapStateToProps = (state) => ({
    loading: state.Api.loading
})

const mapDispatchToProps = (dispatch) => ({
    UserLogin: (email, password) => dispatch(UserLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)