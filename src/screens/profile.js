import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
 FlatList, TouchableOpacity, Image, TextInput
} from 'react-native';
import {  Header } from 'react-native-elements';
import champions from './champions';
import { Tab, TabView } from 'react-native-easy-tabs';
import { AntDesign } from '@expo/vector-icons'; 
var {width, height} = Dimensions.get('window')
import { Fontisto } from '@expo/vector-icons';  
import MenuDrawer from 'react-native-side-drawer'
const colors = {
  white: 'white',
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
	backgroundColor: 'black',
  },
  padding: {
    flexDirection: 'row',
    justifyContent: 'space-around',
	alignSelf: 'stretch',
   
  },
  text:{
	color:'white',
	 paddingBottom:10
	
  },
  container: {
    flex: 1,
	color:'white',
	paddingTop:10,
	paddingBottom:10
   
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
	  <TouchableOpacity  onPress={() => setCurrentTab(0)}>
	  <Fontisto name="history" size={50} color="white" />
	   </TouchableOpacity>
	  <TouchableOpacity  onPress={() => setCurrentTab(1)}>
	  <Image source={M7} style={{height:50, width: 50, borderRadius: 60}} />
				</TouchableOpacity>	 
	  <TouchableOpacity  onPress={() => setCurrentTab(2)}>
	  <Image source={elos} style={{height:50, width: 50, borderRadius: 60}} />
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

export default class profile extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			apikey : 'RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0',
			text : '',
			id: '',
			profileIconId : null,
			accountId : null,
			puuid: null,
			summonerLevel:'',
			name:'',
			teste : [],
			teste2: [],
			teste3: [],
			currentTab: 0,
			dataSource:[],
			open: false		
		};
	}
	static navigationOptions = {		
		headerShown: false
	  };
	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	  };
	 
	  drawerContent = () => {
		const { navigation } = this.props.navigation;
		return (
		 <View>
		 <TouchableOpacity onPress={(event) => {const { navigate } = this.props.navigation; navigate('itens')}} style={styles.animatedBox}>
			<Text style={{fontSize:30}}>Itens</Text>	
			<View style={{flexDirection:"row"}}>
		    <Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7011.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7022.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7021.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7020.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7019.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7018.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>
			<View style={{flexDirection:"row"}}>
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7017.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7016.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7015.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7014.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7013.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/7012.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>		
		  </TouchableOpacity>
		   
		   <TouchableOpacity onPress={(event) => {const { navigate } = this.props.navigation; navigate('spells')}} style={styles.animatedBox}>
		   <Text style={{fontSize:30}}>Feitiços de invocador</Text>
		   <View style={{flexDirection:"row"}}>
		    <Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerFlash.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerBarrier.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerBoost.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerDot.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerExhaust.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerHaste.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>
			<View style={{flexDirection:"row"}}>
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerHeal.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerMana.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerPoroRecall.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerSmite.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerSnowball.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/SummonerTeleport.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>
			 </TouchableOpacity>

			 <TouchableOpacity onPress={(event) => {const { navigate } = this.props.navigation; navigate('home')}} style={styles.animatedBox}>
		   <Text style={{fontSize:30}}>Campeões</Text>
		   <View style={{flexDirection:"row"}}>
		    <Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Kled.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Shen.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Quinn.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Urgot.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Yorick.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/MonkeyKing.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>
			<View style={{flexDirection:"row"}}>
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Swain.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Chogath.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Nasus.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Zilean.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Illaoi.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			<Image source={{uri:`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Aatrox.png` }} style={{height: 20, width: 20, borderRadius: 60}} />
			</View>
			 </TouchableOpacity>
		 </View>
		);
	  };

  componentDidMount() {
    Dimensions.addEventListener('change', ({ window }) => {
      this.setState({ width: window.width });
    });
  }

  setCurrentTab(index) {
    this.setState({
      currentTab: index,
      width: Dimensions.get('window').width,
    });
  }

  _handlePress4(){
	fetch(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.state.accountId}?api_key=APIKEY`)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson.matches
      })
    })
    .catch(error=>console.log(error)) 

}
  _handlePress3(){
	 fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.text}?api_key=APIKEY`)
	.then((response) => response.json())
	.then((responseJson) => {
		this.state.profileIconId = responseJson.profileIconId;
		this.state.accountId = responseJson.accountId;
		this.state.puuid = responseJson.puuid;
		this.state.id = responseJson.id;
		this.state.summonerLevel = responseJson.summonerLevel;
		this.state.name = responseJson.name;
		this.setState({
			name : this.state.name
		})
		this.setState({
			summonerLevel : this.state.summonerLevel
		})
		this.setState({
			id : this.state.id
		})
		this.setState({
			profileIconId : this.state.profileIconId
		})
		this.setState({
			puuid : this.state.puuid
		})
		this.setState({
			accountId : this.state.accountId
		})
		return responseJson;
	})
	.catch((error) => {
		  console.error(error);
	});

}
_handlePress2(){
	fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.id}?api_key=APIKEY`)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
      teste2: responseJson
      })
    })
    .catch(error=>console.log(error)) 

}
_handlePress(){
	fetch(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.id}?api_key=APIKEY`)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
      teste: responseJson
      })
    })
    .catch(error=>console.log(error)) 

}


_renderItem = ({item}) => {
		switch (item.tier) {
		  case "BRONZE":
			return 	<View>
				<TouchableOpacity  style={{  alignItems:'center'}}>	
				<Text style={{color:'white'}}>{item.queueType}</Text>
				<Image source={bronze} style={{height: 80, width: 80, borderRadius: 60}} />
					   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
		</TouchableOpacity>
				</View>;
		  case "IRON":
			return <View>
				<TouchableOpacity  style={{  alignItems:'center'}}>	
				<Text style={{color:'white'}} >{item.queueType}</Text>
				<Image source={iron} style={{height: 80, width: 80, borderRadius: 60}}/>
					  <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
		</TouchableOpacity>
				</View>;
		  case "SILVER":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={silver} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "GOLD":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={gold} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "PLATINUM":
			return <View>
			<TouchableOpacity style={{  alignItems:'center'}} >	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={platinum} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "DIAMOND":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={diamond} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "GRANDMASTER":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={grandmaster} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "MASTER":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={master} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  case "CHALLENGER":
			return <View>
			<TouchableOpacity  style={{  alignItems:'center'}}>	
			<Text style={{color:'white'}} >{item.queueType}</Text>
			<Image source={challenger} style={{height: 80, width: 80, borderRadius: 60}}/>
				   <Text style={{color:'white'}} >Elo: {item.tier}</Text>					 
					   <Text style={{color:'white'}} >{item.hotStreak ? 'Não há sequencia' : ' Está com sequencia de vitórias' }</Text>
					   <Text style={{color:'white'}} >Vitórias: {item.wins}</Text>
					   <Text style={{color:'white'}} >Derrotas: {item.losses}</Text>
					   <Text style={{color:'white'}} >Pontos: {item.leaguePoints}</Text>
					   <Text style={{color:'white'}} >Ranque: {item.rank}</Text>
	</TouchableOpacity>
			</View>;
		  default: break;
		}
}

_renderItem2 = ({item}) => {
	const champImage = champions[item.championId]
	switch (item.championLevel) {
		case 1:
		  return 	<TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M1} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>;
		case 2:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M2} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		case 3:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M3} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		case 4:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M4} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		case 5:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M5} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		case 6:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M6} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		case 7:
		  return <TouchableOpacity >	
		  <View style={{flexDirection:"row"}}>
		  <Image
         style={{height: 80, width: 80, borderRadius: 60}}
          source={champImage}
          />
		
		<View style={{flexDirection:"column", marginLeft: 30}}> 		
					   <Text style={styles.text} >Maestria: {item.championLevel}</Text> 
					   <Text style={styles.text} >Pegou baú: { item.chestGranted ? 'Baú indisponível' : <Image source={bau} style={{height: 20, width: 20}}/> }</Text>
					   <Text style={styles.text} >Pontos de maestria: {item.championPoints}</Text>					   
					   </View>
					   <Image source={M7} style={{height: 70, width: 70, borderRadius: 60}}/>
					   </View>
  </TouchableOpacity>
		 ;
		default: break;
	  }

}

_renderItem3 = ({item}) => {
	const champImage = champions[item.champion]
	var date = new Date(item.timestamp);
	return  (
		<View style={{  alignItems:'center'}}>	
		 <Image style={{height: 80, width: 80, borderRadius: 60}} source={champImage}/>
			<Text style={styles.text} >Posição: {item.role}</Text>	
			<Text style={styles.text} >lane: {item.lane}</Text>
			<Text style={styles.text} >Temporada: {item.season}</Text>
			<Text style={styles.text} > {date.toUTCString()}</Text>	   
	    </View>    
	)
}
  render() {
    return (
      <View style={styles.fill}>
		  <Header
  statusBarProps={{ barStyle: 'light-content' }}
  placement='center'
  barStyle='dark-content' 
  leftComponent={{ icon: 'menu', color: 'black', size:45,  onPress: this.toggleOpen } }  
  containerStyle={{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    width: width, height: 90
  }}
/>  
		 <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', paddingBottom:20}}>
		<View style={{ flexDirection:"row"}}>
		<MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={50}
          animationTime={250}
          overlay={true}
          opacity={0.4}/>  
         <TextInput 
			style={styles.container} 
					placeholder="Digite o nome do jogador"
					placeholderTextColor='gray'
					value={this.state.text}
					onChangeText={(text) => this.setState({text})}/>
		<TouchableOpacity style={{ paddingTop:10, paddingRight:10}} onPress={() => { this._handlePress3();}}>
				<AntDesign name="arrowright" size={24} color="white" />
				</TouchableOpacity>
				</View>
				<Image style={{height: 100, width: 100, borderRadius: 100, paddingBottom:10}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/profileicon/${this.state.profileIconId}.png` }} />
				<Text style={styles.text} >{this.state.name}</Text>
				<Text style={styles.text} >{this.state.summonerLevel}</Text>				
				<TouchableOpacity  style={{ alignItems:'center', borderColor: 'white', borderWidth: 2}} onPress={() => {this._handlePress(); this._handlePress2(); this._handlePress4()}}>
				<Text style={{color: 'white', fontSize:25}}>EXIBIR DADOS DESTE PERFIL</Text>
				</TouchableOpacity>
				</View>				
		<HeaderT
          setCurrentTab={(index) => this.setCurrentTab(index)}
        />
        <TabView
          layoutWidth={this.state.width}
          selectedTabIndex={this.state.currentTab}>         
		  <Tab style={styles.container}>
		 <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={this._renderItem3}
		 ItemSeparatorComponent={()=>
			<View style={{height:5, backgroundColor: 'gray'}} 
		/>}
       />
          </Tab>
          <Tab style={styles.container} lazy >
		  <FlatList 
                data={this.state.teste}
                renderItem={this._renderItem2}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:5, backgroundColor: 'gray'}} 
                />}
            />			
          </Tab>         
		  <Tab style={styles.container} lazy>
		  <FlatList 
                data={this.state.teste2}
                renderItem={this._renderItem}
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