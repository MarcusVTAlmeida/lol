import React, { Component } from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
import api from '../services/api2'
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
export default class itens extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Itens',
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
            <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('detalhesitens', { category: item })}} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 80, width: 80, borderRadius: 60}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/${item.image.full}` }} />
               <View > 
               <Text style={{marginLeft: 10, color:'white'}}>{item.name}</Text>
               <View style={{marginLeft: 10, paddingTop:20,  flexDirection: 'row',}}> 
               <Text style={{color:'white',flexWrap:"wrap",width:250}}>{item.plaintext}</Text>
                </View>     
                </View>         
            </TouchableOpacity>
            </View>  
          
        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <View> 
                <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', flex:1}}> 
                <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/2557921286" 
  servePersonalizedAds // true or false
   />            
   </View>          
                 <OptimizedFlatList
                data={this.state.resultado}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
                
                removeClippedSubviews={false}
            />
             </View>
             
        )
    }
}
