import React, { Component } from 'react'
import { Camera, Permissions, Location, } from 'expo';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import Geolocation from 'react-native-geolocation-service';


import { connect } from 'react-redux'

import { sendRawData } from '../Actions/Api'



class ExpoCameraScreen extends Component {
    state = {

        hasLocationPermission: null,
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flash: Camera.Constants.FlashMode.torch

    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });

    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status === 'granted' });
    }

    async snapPhoto() {
        console.log('Button Pressed');
        let obj ={}
        if (this.camera) {
            console.log('Taking photo');
            const options = {
                quality: 1, base64: true, fixOrientation: true,
                exif: true
            };
            let photo = await this.camera.takePictureAsync(options).then(photo => {
                photo.exif.Orientation = 1;

                return photo
            });
            // console.log(photo)
            obj.base64 = photo.base64

            Geolocation.getCurrentPosition(               
                 (position) => {
                    //  console.log(this.props.sendRawData(), "======");
                     
                    //  return position
                     obj.longitude = position.coords.longitude
                     obj.latitude = position.coords.latitude
                     console.log(obj.latitude, "===");
                     
                    this.props.sendRawData(obj)
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );

            // console.log(location)


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
const mapStateToProps = (state) => ({
    loading: state.Api.loading
})

const mapDispatchToProps = (dispatch) => ({
    sendRawData: (object) => dispatch(sendRawData(object))
})


export default connect(mapStateToProps, mapDispatchToProps)(ExpoCameraScreen)