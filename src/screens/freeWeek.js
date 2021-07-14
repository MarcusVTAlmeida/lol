import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';
import champions from './champions';
 
export default class freeWeek extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Rotação de campeões',
        };
  constructor(props) {
    super(props);
    this.state = {
      rotacao:[],
      rotacaoN:[]
     };
   }
   
  componentDidMount(){
    fetch("https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-4d66b037-2cd4-4de8-8486-2fcdfcbf0be0")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        rotacao: responseJson.freeChampionIds
      })
      this.setState({
        rotacaoN: responseJson.freeChampionIdsForNewPlayers
      })
      console.log(responseJson)
    })
   
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    
    _renderItem = ({item}) => {
        const champImage = champions[item]
      
        return  (
            <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>	
             <Image style={{height: 129, width: 131 }} source={champImage}/>
            </View>    
        )
    }
    _renderItem2 = ({item}) => {
        const champImage = champions[item]
      
        return  (
            <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>	
             <Image style={{height: 129, width: 131 }} source={champImage}/>
            </View>    
        )
    }
        render(){   
     return(
      <ScrollView>
           <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:25}}>Campeões na rotação</Text>
      <FlatList
         data={this.state.rotacao}
         renderItem={this._renderItem}
         ItemSeparatorComponent={()=>
            <View style={{height:10, backgroundColor: 'gray'}} 
        />}
        numColumns={3}
       />    
         <Text style={{fontSize:23}}>Campeões na rotação para iniciantes</Text>  
       <FlatList
         data={this.state.rotacaoN}
         renderItem={this._renderItem2}
         ItemSeparatorComponent={()=>
            <View style={{height:10, backgroundColor: 'gray'}} 
        />}
        numColumns={5}
       />    
       </View>  
     </ScrollView>
     )}
}