import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
 FlatList, TouchableOpacity, Image, TextInput
} from 'react-native';
import { Tab, TabView } from 'react-native-easy-tabs';
import { AntDesign } from '@expo/vector-icons'; 
var {width, height} = Dimensions.get('window')
import { Fontisto } from '@expo/vector-icons';  
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
const styles = StyleSheet.create({
  fill: {
    flex: 1,
	backgroundColor: 'black',
  },
  padding: {
    flexDirection: 'row',
    justifyContent: 'space-around',
	alignSelf: 'stretch',
  paddingTop:10
  },
  text:{
	color:'white',
	
  },
  container: {
    flex: 1,
	color:'white',
	justifyContent:'center',
	alignContent:'center',
	alignItems:'center',
	paddingTop:10
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animatedBox: {
   
    backgroundColor: "gray",
    padding: 10
  },
  body: {
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812'
  }
});
function HeaderT({ setCurrentTab }) {
  return (
    <View style={styles.padding}>
	  <TouchableOpacity style={{ alignItems:'center', borderColor: 'white', borderWidth: 2}} onPress={() => setCurrentTab(0)}>
	  <Text style={{color:'white', fontSize:16, borderWidth: 2}}>MASTER</Text>
	  <Text style={{color:'white', fontSize:16, borderWidth: 2}}>RANKED SOLO 5X5</Text>
	   </TouchableOpacity>
	  <TouchableOpacity style={{ alignItems:'center', borderColor: 'white', borderWidth: 2}} onPress={() => setCurrentTab(1)}>
	  <Text style={{color:'white', fontSize:16, borderWidth: 2}}>MASTER</Text>
	  <Text style={{color:'white', fontSize:16, borderWidth: 2}}>RANKED FLEX 5X5</Text>
	</TouchableOpacity>	 	
    </View>
  );
}
import bronze from "../../assets/BRONZE.png";
import iron from "../../assets/IRON.png";
import silver from "../../assets/SILVER.png";
import gold from "../../assets/GOLD.png";
import platinum from "../../assets/PLATINUM.png";
import diamond from "../../assets/DIAMOND.png";
import grandmaster from "../../assets/GRANDMASTER.png";
import master from "../../assets/MASTER.png";
import challenger from "../../assets/CHALLENGER.png";
import M1 from "../../assets/M1.png";
import M2 from "../../assets/M2.png";
import M3 from "../../assets/M3.png";
import M4 from "../../assets/M4.png";
import M5 from "../../assets/M5.png";
import M6 from "../../assets/M6.png";
import M7 from "../../assets/M7.png";
import elos from "../../assets/elos.png";
import bau from "../../assets/bau.png";

export default class topM extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			jogadores:[],
			jogadores2:[],
			tier:null,
			queue:null,
			tier2:null,
			queue2:null,
			name:null,
			profileIconId:null,
			currentTab: 0,
			dataSource:[],
			open: false		
		};
	}
  static navigationOptions = {
    headerTitle: 'Os melhores do mestre',
    };
	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	  };
	 
	;

  componentDidMount() {
    Dimensions.addEventListener('change', ({ window }) => {
      this.setState({ width: window.width });
    });
	this._handlePress2();this._handlePress();
  }

  setCurrentTab(index) {
    this.setState({
      currentTab: index,
      width: Dimensions.get('window').width,
    });
  }

  _handlePress(){   
	fetch("https://br1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_FLEX_SR?api_key=RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        jogadores2: responseJson.entries
      })
	
      this.setState({
        tier2: responseJson.tier
      })
      this.setState({
        queue2: responseJson.queue
      })
      
     
    })
   
    .catch(error=>console.log(error)) //to catch the errors if any

}
_handlePress2(){
	fetch("https://br1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        jogadores: responseJson.entries
      })
	
      this.setState({
        tier: responseJson.tier
      })
      this.setState({
        queue: responseJson.queue
      })
      
     
    })
   
    .catch(error=>console.log(error)) //to catch the errors if any
}

_renderItem = ({item}) => {
  
	return  (
		<View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
			{/* <Image style={{height: 100, width: 100, borderRadius: 100, paddingBottom:10}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png` }} />	 */}
	  <Text style={{color:'white'}}>Nome do jogador: {item.summonerName}</Text>
	   <Text style={{color:'white'}}>Pontos: {item.leaguePoints}</Text>
	   <Text style={{color:'white'}}>Vitórias: {item.wins}</Text>
	   <Text style={{color:'white'}}>{ item.hotStreak ? 'Sem sequencia de vitórias' : 'Com sequencia de vitórias' }</Text>
	   <Text style={{color:'white'}}>Derrotas: {item.losses}</Text>
	  
	</View>    
	)
} 
_renderItem2 = ({item}) => {
  
	return  (
		<View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
			{/* <Image style={{height: 100, width: 100, borderRadius: 100, paddingBottom:10}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png` }} />	 */}
	  <Text style={{color:'white'}}>Nome do jogador: {item.summonerName}</Text>
	   <Text style={{color:'white'}}>Pontos: {item.leaguePoints}</Text>
	   <Text style={{color:'white'}}>Vitórias: {item.wins}</Text>
	   <Text style={{color:'white'}}>{ item.hotStreak ? 'Sem sequencia de vitórias' : 'Com sequencia de vitórias' }</Text>
	   <Text style={{color:'white'}}>Derrotas: {item.losses}</Text>
	  
	</View>    
	)
}   
  render() {
    return (
      <View style={styles.fill}>		  
			 <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}> 
       <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/1053267920" 
  servePersonalizedAds // true or false
   />            
   </View> 		
		<HeaderT
          setCurrentTab={(index) => this.setCurrentTab(index)}
        />
        <TabView
          layoutWidth={this.state.width}
          selectedTabIndex={this.state.currentTab}>         
          <Tab style={styles.container} lazy>
		  <FlatList 
                 data={this.state.jogadores}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:5, backgroundColor: 'gray'}} 
                />}
            />
          </Tab>
		  <Tab style={styles.container} lazy >
		  <FlatList 
                data={this.state.jogadores2}
                renderItem={this._renderItem2}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:5, backgroundColor: 'gray'}} 
                />}
            />			
          </Tab>         
		 
        </TabView>
      </View>
    );
  }
}