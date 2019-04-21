import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from 'react-navigation'

import React from 'react'
import Login from '../Screens/Login'
import RegisterForm from '../Screens/RegisterForm'


import Home from '../Screens/Home'
import TakePicture from '../Screens/TakePicture'
import ExpoCameraScreen from '../Screens/ExpoCameraScreen'

import Icon from "react-native-vector-icons/FontAwesome"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const LoginStackNav = createStackNavigator({
    LoginPage: {
        screen: Login,
        navigationOptions: {
            drawBehind : true,
            header: null
        }
    },
    Register: {
        screen: RegisterForm
    },

}, {
        initialRouteName: 'LoginPage'
    })



const HomeNav = createStackNavigator({
    Home: {
        screen: Home
    }
})

const PictureNav = createStackNavigator({
    Picture: {
        screen: ExpoCameraScreen,
        navigationOptions :{
            header: null
        }
    }
})

const HomeRoute = createBottomTabNavigator({

    Home: {
        screen: HomeNav,
        navigationOptions: {
            showLabel : false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (<Icon name="home" color={tintColor} size={24} />)
        }
    },
    Camera: {
        screen: PictureNav,
        navigationOptions: {
            tabBarLabel: 'Camera',
            tabBarIcon: ({ tintColor }) => (<Icon name="camera" color={tintColor} size={24} />)
        }
    }
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'skyblue',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'black',
                height: 60
            },
            showIcon: true
        }
    })

const switchAuth = createSwitchNavigator({
    FirstRender : {
        screen :  LoginStackNav
    },
    ContentPage : {
        screen : HomeRoute
    }
}, {
    initialRouteName: 'ContentPage',
})

export default createAppContainer(switchAuth)