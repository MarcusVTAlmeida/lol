import React, { Component } from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
import api from '../services/api4'

export default class spells extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Feitiço de invocador',
        };
    constructor(props) {
    super(props);       
    this.state = {
        data: [],
        cars: [],
        resultado:[]
      
    }
}
    async componentDidMount() {      
       api.get().then( (response) => { 
            this.setState({cars: response.data.data})
            const result = Object.values(this.state.cars);
            this.setState({resultado: result})
        })
    }
    _renderItem = ({item}) => {
        const { navigation } = this.props.navigation;
        return  (   
            <View style={{backgroundColor: 'black'}}>      
            <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('spellsDetalhes', { category: item })}} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 80, width: 80, borderRadius: 60}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${item.id}.png` }} />
               <View style={{flexDirection:"column"}}> 
               <Text style={{marginLeft: 10, color:'white'}}>{item.name}</Text>
                </View>           
            </TouchableOpacity>
            </View>            
        )
    }

    render() {     
        return (
            <View>
                <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', flex:1}}> 
                 <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/1053267920" 
  servePersonalizedAds // true or false
   />
   </View>
                <FlatList 
                data={this.state.resultado}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            />
             </View>
             
        )
    }
}
