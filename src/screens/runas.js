import React, { Component } from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import api from '../services/api5'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
export default class runas extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Runas',
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
            this.setState({cars: response.data})
            console.log(this.state.cars)
            const result = Object.values(this.state.cars);
            this.setState({resultado: result})
          
        })
    }
    _renderItem = ({item}) => {
        const { navigation } = this.props.navigation;
        console.log(item.icon)
        return  (   
            <View style={{backgroundColor: 'black'}}>      
            <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('runasDetalhes', { category: item.slots })}} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
            <Image style={{height: 80, width: 80, borderRadius: 60}} source={{uri:`https://ddragon.bangingheads.net/cdn/img/${item.icon}` }} />
             
               <Text style={{marginLeft: 10, color:'white'}}>{item.name}</Text>
              
               
            
                          
            </TouchableOpacity>
            <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />
            </View>            
        )
    }
    render() {
        
        return (
            <View style={{backgroundColor: 'black', flex:1}}>   
                 <FlatList 
                data={this.state.cars}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.server}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            />
            <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', flex:1}}> 
                <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/5466794264" 
  servePersonalizedAds // true or false
   />            
   </View>         
             </View>
             
        )
    }
}
