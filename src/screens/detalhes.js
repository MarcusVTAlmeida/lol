import React, { Component } from 'react'
import { ScrollView, Image, Text, View, FlatList , StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import HTMLView from 'react-native-htmlview';

export default class detalhes extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Detalhes do campeão',
    };
    
  _renderSkins = ({item}) => {
    const category = this.props.navigation.state.params.category    
    return ( 
        <View style={{  justifyContent:'center', alignContent:'center'}}>
             <Card.Image  >
                  <Image style={{height: '100%', width: '100%'}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${category.name}_${ item.num }.jpg` }} />
             </Card.Image>           
            <Text style={{ color:'white'}}>{ item.name }</Text>           
        </View>
    );
}

_renderItem = ({item}) => {
  const category = this.props.navigation.state.params.category
  return ( 
      <View style={{  justifyContent:'center', alignContent:'center', paddingTop:10}}>
        <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
        <Text style={{ color:'white', paddingTop:5}}>{ item.name }</Text>            
        <Image  style={{height: 80, width: 80, borderRadius: 80}} source={{uri:`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${item.id}.png` }} />
        </View>
        <Text style={{ color:'white', paddingTop:5}}>{`Descrição: ${item.description}`}</Text>  
        <Text style={{ color:'white', paddingTop:5}}>Tempo de recarga: { item.cooldownBurn  }</Text>
        <Text style={{ color:'white', paddingTop:5}}>Custo: { item.costBurn }</Text>  
        <HTMLView 
        value={"<div><p><a href='http://jsdf.co'>"+item.tooltip+"</a></p></div>"}
        stylesheet={styles}
      /> 
               </View>
  );
}

    //Define your class component 
    render() {          
        const category = this.props.navigation.state.params.category
       console.log(category.spells)
        return (
            <ScrollView style={{ backgroundColor: '#800000'}}>               
<Card containerStyle={{backgroundColor: 'black'}}>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>             
  <Card.Title style={{ color: '#b22222'}}>{category.name}</Card.Title>
  <Text style={{ color:'white'}}>{category.title}</Text>
  
  
  </View>
  <Card.Divider/>  
  <Card.Image source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${category.id}_0.jpg` }}>  
</Card.Image>
  <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
 
         <Text style={{ color:'white'}}>{category.lore}</Text>
         <Card.Divider/>  
         <Text style={{ color:'white'}}>Funções</Text>
         </View>    
         <Text style={{ color:'white'}}>{category.tags}</Text>
          <Card.Divider/> 
          <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text style={{ color:'white'}}>Skins</Text>
          <Carousel 
          loop
        firstItem={1}    
           autoplay
           useScrollView={true}
           layout={'default'}
           autoplayInterval={5000}
              ref={(c) => { this._carousel = c; }}
              data={category.skins}
              renderItem={this._renderSkins}
              sliderWidth={325}
              itemWidth={325}
            />
              </View> 
              <Card.Divider/>
              <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
             <Text style={{ color:'white'}}>Habilidades</Text>
             </View>
              <FlatList 
                data={category.spells}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            />  
             <Card.Divider/>
             <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
             <Text style={{ color:'white'}}>Dicas com Aatrox</Text>
             </View>
             <Text style={{ color:'white'}}>{category.allytips}</Text>
             <Card.Divider/>
             <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
             <Text style={{ color:'white'}}>Dicas contra Aatrox</Text>
             </View>
             <Text style={{ color:'white'}}>{category.enemytips}</Text>
          <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Card.Divider/>
          <Text style={{ color:'white'}}>Informações</Text>
          </View> 
          <Text style={{ color:'white'}}>Ataque: {category.info.attack}</Text>
          <Text style={{ color:'white'}}>Defesa: {category.info.defense}</Text>
          <Text style={{ color:'white'}}>Dificuldade: {category.info.difficulty}</Text>
          <Text style={{ color:'white'}}>Magia: {category.info.magic}</Text>        
          <Card.Divider/>  
          <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text style={{ color:'white'}}>Status</Text>            
        </View>
        <Text style={{ color:'white'}}>Armadura: {category.stats.armor}</Text>
          <Text style={{ color:'white'}}>Armadura por nível: {category.stats.armorperlevel}</Text>
          <Text style={{ color:'white'}}>Dano de ataque: {category.stats.attackdamage}</Text> 
          <Text style={{ color:'white'}}>Dano de ataque por nível: {category.stats.attackdamageperlevel}</Text>
          <Text style={{ color:'white'}}>Alcance do ataque: {category.stats.attackrange}</Text>
          <Text style={{ color:'white'}}>Velocidade do ataque: {category.stats.attackspeed}</Text>
          <Text style={{ color:'white'}}>Velocidade do ataque por nível: {category.stats.attackspeedperlevel}</Text>
          <Text style={{ color:'white'}}>Crítico: {category.stats.crit}</Text>
          <Text style={{ color:'white'}}>Crítico por nível: {category.stats.critperlevel}</Text>
          <Text style={{ color:'white'}}>Vida: {category.stats.hp}</Text>
          <Text style={{ color:'white'}} >Vida por nível: {category.stats.hpperlevel}</Text>
          <Text style={{ color:'white'}}>Regeneração de vida: {category.stats.hpregen}</Text>
          <Text style={{ color:'white'}}>Regeneração de vida por nível: {category.stats.hpregenperlevel}</Text>
          <Text style={{ color:'white'}}>Velocidade de movimento: {category.stats.movespeed}</Text>
          <Text style={{ color:'white'}}>Mana: {category.stats.mp}</Text>
          <Text style={{ color:'white'}}>Mana por nível: {category.stats.mpperlevel}</Text>
          <Text style={{ color:'white'}}>Regeneração de mana: {category.stats.mpregen}</Text>
          <Text style={{ color:'white'}}>Regeneração de mana por nível: {category.stats.mpregenperlevel}</Text>
          <Text style={{ color:'white'}}>Resistência mágica: {category.stats.spellblock}</Text>
          <Text style={{ color:'white'}}>Resistência mágica por nível: {category.stats.spellblockperlevel}</Text>
 </Card>    
 <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}>     
 <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/7880925372" 
  servePersonalizedAds // true or false
   />      
   </View>
</ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: 'white', // make links coloured pink
  },
});