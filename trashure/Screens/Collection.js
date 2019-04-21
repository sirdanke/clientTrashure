import React, { Component } from 'react'
import { View, Text, FlatList,Image } from 'react-native'

export default class Collection extends Component {
    state = {
        myCollection: [{
            image : 'https://storage.googleapis.com/bawang/1555829582097trash.jpg',
        },
        {
            image : 'https://static.ffx.io/images/$zoom_0.3531,$multiply_1,$ratio_1.777778,$width_1059,$x_0,$y_39/t_crop_custom/w_800/q_86,f_auto/3bfb486f79c605f67fe0db76bc469c9508d5946c'
        },
        {
            image : 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        }, 
        {
            image : 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg'
        }]
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>

                </View>

                {this.state.myCollection.map(e => {
                    return(
                        <Image
                            source={{uri : e.image}}/>
                    )
                })}

            </View>
        )
    }
}
