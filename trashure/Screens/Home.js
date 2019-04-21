import React, { Component } from 'react'
import {
    View, Text, Image,
    FlatList, Dimensions,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { fecthData } from '../store/Actions/Api'
import Icon from 'react-native-vector-icons/Entypo'

class Home extends Component {
    static navigationOptions = (props) => {
        return {
            headerTitle: 'Trashure',
        }
    };

    componentDidMount = () => {

    }
    state = {
        data: [
            {
                location: 'Tanah Kusir IV, Kebayoran baru, Jakarta selatan',
                user: 'Adi Prasetyo',
                image: 'https://storage.googleapis.com/bawang/1555829582097trash.jpg',
                description: 'sampah sampah sampah sampah sampah kenapa orang suka sampah menyablkan sekalis sampah sampah',
                createdAt: new Date()
            },
            {
                location: 'Jalan Hang Jebat, Kebayoran lama, Jakarta selatan',
                user: 'ahmad syukron',
                image: 'https://static.ffx.io/images/$zoom_0.3531,$multiply_1,$ratio_1.777778,$width_1059,$x_0,$y_39/t_crop_custom/w_800/q_86,f_auto/3bfb486f79c605f67fe0db76bc469c9508d5946c',
                description: 'sampah mulai menumpuk',
                createdAt: new Date()
            },
            {
                location: 'Jalan Raya Kebayoran, kebayoran baru, Jakarta selatan',
                user: 'isro tri pambudi',
                image: 'https://cdn.vox-cdn.com/thumbor/0Zx0gt6gIoP3-Is56SfXIMzt4zE=/0x0:5478x3702/1200x800/filters:focal(2681x1290:3557x2166)/cdn.vox-cdn.com/uploads/chorus_image/image/62857108/1086343744.jpg.0.jpg',
                description: 'sampah seminggu ini',
                createdAt: new Date()
            }
        ]
    }
    render() {
        let { data } = this.state
        return (
            <View
                style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View
                            style={{ flex: 1, width: deviceWidth * 0.95, borderBottomColor: 'black', marginTop: 20, minHeight: deviceHeight * 0.5, maxHeight: deviceHeight * 0.8 }}>
                            <View>
                                <Text
                                    style={{ fontWeight: 'bold', fontSize: 20 }}>{item.user}</Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row' }}>
                                {/* <Icon name="location" size={20} /> */}
                                <Text>{item.location}</Text>
                            </View>
                            <Image
                                style={{ flex: 1, minHeight: deviceHeight * 0.3, maxHeight: deviceHeight * 0.6, resizeMode: 'contain' }}
                                source={{ uri: item.image }} />
                            <View
                                style={{ marginTop: 10 }}>
                                <Text>{item.description}</Text>
                            </View>
                            <View>
                                <Text
                                    style={{ color: 'grey' }}>posted on {item.createdAt.toDateString()}</Text>
                            </View>
                        </View>}>
                </FlatList>
            </View>
        )
    }
}



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const mapStateToProps = (state) => ({
    loading: state.Api.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)