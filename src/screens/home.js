import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import api from '../services/api'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  
export default class Home extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Campeões',
        };
    constructor(props) {
        super(props);
       
    this.state = {
        data: [],
        champ: [],
        resultado:[]
      
    }
}
    async componentDidMount() {
        api.get().then( (response) => { 
            this.setState({champ: response.data.data})
            const result = Object.values(this.state.champ);
            this.setState({resultado: result})
        })
    }
    _renderItem = ({item}) => {
        const { navigation } = this.props.navigation;
        return  (
            <View style={{backgroundColor: 'black'}}> 
            <TouchableOpacity  onPress={(event) => {const { navigate } = this.props.navigation; navigate('detalhes', { category: item })}} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 80, width: 80, borderRadius: 80}} source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${item.id}.png` }} />
                <View style={{flexDirection:"column"}}> 
               <Text style={{marginLeft: 10, color:'white'}}>{item.name}</Text>
               <View style={{flexDirection:"row"}}>
                <Text style={{marginLeft: 10,width: '85%', color:'white'}}>{item.title}</Text> 
                </View>
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
  adUnitID="ca-app-pub-4654651969138945/7880925372" 
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