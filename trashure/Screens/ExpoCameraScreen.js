import React, { Component } from 'react'
import { Camera, Permissions, Location, } from 'expo';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"



export default class ExpoCameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flash : Camera.Constants.FlashMode.torch

    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    async snapPhoto() {
        console.log('Button Pressed');
        if (this.camera) {
            console.log('Taking photo');
            const options = {
                quality: 1, base64: true, fixOrientation: true,
                exif: true
            };
            await this.camera.takePictureAsync(options).then(photo => {
                photo.exif.Orientation = 1;
                console.log('this is photo', photo, "=====");

            });
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.state.type}
                        ref={(ref) => { this.camera = ref }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                justifyContent: 'space-between'

                            }}>

                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'flex-start',
                                    // width: deviceWidth*0.3
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>

                                <MaterialIcon name="rotate-3d" color='white' size={24} />
                                {/* <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}Flip{' '}
                                </Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.snapPhoto.bind(this)}
                                style={{
                                    // flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'flex-start',
                                    // width: deviceWidth*0.5
                                }}
                            >
                                <Icon name="camera" color='white' size={24} />
                                {/* <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>take picture</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'flex-start',
                                    // width: deviceWidth*0.3
                                }}
                                onPress={() => {
                                    this.setState({
                                        flash: this.state.flash === Camera.Constants.FlashMode.off
                                            ? Camera.Constants.FlashMode.torch
                                            : Camera.Constants.FlashMode.torch
                                    });
                                }}>

                                <MaterialIcon name="flash" color='white' size={24} />
                                {/* <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}Flip{' '}
                                </Text> */}
                            </TouchableOpacity>

                        </View>
                    </Camera>

                </View>
            );
        }
    }
}


const deviceWidth = Dimensions.get('window').width