import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';
import champions from './champions';
 
export default class freeWeek extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'top',
        };
  constructor(props) {
    super(props);
    this.state = {
      jogadores:[],
      tier:null,
      queue:null,
      name:null,
      profileIconId:null
     };
   }
   
  componentDidMount(){
    fetch("https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0")
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
        const name = this.state.name       
        const profileIconId = this.state.profileIconId      
       fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${item.summonerName}?api_key=RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0`)
	.then((response) => response.json())
	.then((responseJson) => {
		this.state.profileIconId = responseJson.profileIconId;
		this.state.name = responseJson.name;
		this.setState({ 
			name : this.state.name
		})	
		this.setState({
			profileIconId : this.state.profileIconId
		})
        
        console.log(item.summonerName)
		return responseJson;
	})
	.catch((error) => {
		  console.error(error);
	});

      
        return  (
            <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                {/* <Image style={{height: 100, width: 100, borderRadius: 100, paddingBottom:10}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png` }} />	 */}
           <Text>Nome do jogador: {item.summonerName}</Text>
           <Text>Pontos: {item.leaguePoints}</Text>
           <Text>Vitórias: {item.wins}</Text>
           <Text>Derrotas: {item.losses}</Text>
           <Text >{ item.hotStreak ? 'Sem sequencia de vitórias' : 'Com sequencia de vitórias' }</Text>
        </View>    
        )
    }  
        render(){   
     return(
      <ScrollView>
           <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text>{this.state.tier}</Text>
          <Text>{this.state.queue}</Text>
      <FlatList
         data={this.state.jogadores}
         renderItem={this._renderItem}
         ItemSeparatorComponent={()=>
            <View style={{height:10, backgroundColor: 'gray'}} 
        />}
     
       />    
       </View>  
     </ScrollView>
     )}
}