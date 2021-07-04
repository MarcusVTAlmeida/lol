import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Card } from 'react-native-elements'


export default class spellsDetalhes extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Detalhes do feitiço de invocador',
        };
    render() {          
        const category = this.props.navigation.state.params.category       
        return (
            <ScrollView style={{ backgroundColor: '#800000'}}>               
<Card containerStyle={{backgroundColor: 'black'}}>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>             
  <Card.Title style={{ color: '#b22222'}}>{category.name}</Card.Title>
  </View>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>    
  <Card.Image style={{height: 100, width: 100}} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${category.id}.png` }}>  
</Card.Image>
</View>
<Card.Divider/> 
         <Text style={{ color:'white'}}>{category.description}</Text>
         <Card.Divider/>
         <Text style={{ color:'white'}}>Tempo de recarga: {category.cooldownBurn}</Text>
         <Card.Divider/>
         <Text style={{ color:'white'}}>Habilitada no nível: {category.summonerLevel}</Text>
         <Card.Divider/> 
         <Text style={{ color:'white'}}>Alcance: {category.rangeBurn}</Text> 
         <Card.Divider/> 
       </Card>              
</ScrollView>
        );
    }
}
