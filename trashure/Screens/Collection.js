import React, { Component } from 'react'
import { View, Text, FlatList, Dimensions, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

const YourComponent = (items) => {
    return (
        <ThumbnailGallery items={items} />
    )
}

export default class Collection extends Component {
    state = {
        modalVisible: false,
        selectionItem: {},
        myCollection: [{
            image: 'https://storage.googleapis.com/bawang/1555829582097trash.jpg',
        },
        {
            image: 'https://static.ffx.io/images/$zoom_0.3531,$multiply_1,$ratio_1.777778,$width_1059,$x_0,$y_39/t_crop_custom/w_800/q_86,f_auto/3bfb486f79c605f67fe0db76bc469c9508d5946c'
        },
        {
            image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        },
        {
            image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        },
        {
            image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        },
        {
            image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        },
        {
            image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        }]
    }

    render() {
        return (
            <View>
                <View style={s.collection}>
                    {this.state.myCollection.map(e =>
                        (
                            <TouchableOpacity
                                onPress={() => this.setState({ modalVisible: true, selectionItem: e })}
                            >
                                <Image
                                    style={{ width: width / 3 - 3, height: width / 3 - 3, margin: 1 }}
                                    source={{ uri: e.image }}
                                />
                            </TouchableOpacity>
                        )
                    )
                    }
                </View>

                {/* M O D A L */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ width, height: width }}
                            source={{ uri: this.state.selectionItem.image }} />

                        <TouchableOpacity
                            style={{ backgroundColor: 'gold', padding: 5 }}
                            onPress={() => this.setState({ modalVisible: false })}>
                            <Text style={{ size: 30 }}>Okey</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </View>
        )
    }
}

const s = StyleSheet.create({
    collection: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})