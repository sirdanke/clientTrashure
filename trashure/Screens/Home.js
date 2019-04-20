import React, { Component } from 'react'
import { View, Text, Image, 
        FlatList, Dimensions,
        TouchableOpacity } from 'react-native'

export default class Home extends Component {
    static navigationOptions = (props) => {
        return {
            headerTitle: 'Trashure',         
        }
    };
    state = {
        data: [
            {
                image: 'https://static.ffx.io/images/$zoom_0.3531,$multiply_1,$ratio_1.777778,$width_1059,$x_0,$y_39/t_crop_custom/w_800/q_86,f_auto/3bfb486f79c605f67fe0db76bc469c9508d5946c',
                description: 'sampah mulai menumpuk'
            },
            {
                image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg',
                description: 'sampah seminggu ini'
            }
        ]
    }
    render() {
        let { data } = this.state
        return (
            <View
                style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View
                            style={{  flex: 1, height: deviceHeight*0.5, width: deviceWidth * 1,}}>
                            <Image
                                style={{ flex: 1,  resizeMode: 'contain' }}
                                source={{ uri: item.image }} />
                            <Text>{item.description}</Text>

                        </View>}>

                </FlatList>
            </View>
        )
    }
}


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height