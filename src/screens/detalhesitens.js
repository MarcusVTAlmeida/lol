import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Card } from 'react-native-elements'



export default class detalhesitens extends React.PureComponent {
  
    static navigationOptions = {
        headerTitle: 'Detalhes do item',
        };
        
    render() {          
        const category = this.props.navigation.state.params.category
       
        return (
            <ScrollView style={{ backgroundColor: '#800000'}}>               
<Card containerStyle={{backgroundColor: 'black'}}>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>             
  <Card.Title style={{ color: '#b22222'}}>{category.name}</Card.Title>
  <Text style={{ color:'white'}}>{category.title}</Text>
  </View>
  <Card.Divider/> 
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>    
  <Card.Image style={{height: 100, width: 100}} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${category.image.full}` }}>  
</Card.Image>
</View>
<Card.Divider/> 
         <Text style={{ color:'white'}}>{category.plaintext}</Text>
         <Card.Divider/>
       
         <Text style={{ color:'white'}}>Custo total: {category.gold.total}</Text>
         <Text style={{ color:'white'}}>Venda: {category.gold.sell}</Text>
       
 </Card>              
</ScrollView>
        );
    }
}
