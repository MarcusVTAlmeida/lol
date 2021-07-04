import React, { Component } from 'react'
import { Image, Text, View, FlatList} from 'react-native'
import { Card } from 'react-native-elements'

export default class runasDetalhes extends React.PureComponent {
    _renderItem = ({item}) => {     
        return  (   
            <View style={{backgroundColor: 'black'}}>    
          <Image style={{height: 80, width: 80, borderRadius: 60}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${item.id}.png` }} />
               <View style={{flexDirection:"column"}}> 
               <Text style={{marginLeft: 10, color:'white'}}>{item.runes.icon}</Text>                
                </View>         
                </View>           
        )
    }
    render() {          
        const category = this.props.navigation.state.params.category          
        return (
            <View style={{ backgroundColor: '#800000'}}>               
<Card containerStyle={{backgroundColor: 'black'}}>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>             
  <Card.Title style={{ color: '#b22222'}}>{category.name}</Card.Title>
  </View>  
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>  
  <FlatList 
                data={category}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            /> 
<Card.Image style={{height: 100, width: 100}} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${category.id}.png` }}>  
</Card.Image>
</View>
<Card.Divider/> 
         <Text style={{ color:'white'}}>Tempo de recarga: {category.cooldownBurn}</Text>
         <Card.Divider/>
         <Text style={{ color:'white'}}>Habilitada no nível: {category.summonerLevel}</Text>
         <Card.Divider/> 
         <Text style={{ color:'white'}}>Alcance: {category.rangeBurn}</Text> 
         <Card.Divider/> 
       </Card>              
</View>
        );
    }
}
