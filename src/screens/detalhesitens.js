import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  import HTMLView from 'react-native-htmlview';

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
  <Card.Image style={{height: 100, width: 100}} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/${category.image.full}` }}>  
</Card.Image>
</View>
<Card.Divider/> 
<HTMLView 
        value={"<div><p><a href='http://jsdf.co'>"+category.description+"</a></p></div>"}
        stylesheet={styles}
      /> 
         <Card.Divider/>
       
         <Text style={{ color:'white'}}>Custo total: {category.gold.total}</Text>
         <Text style={{ color:'white'}}>Venda: {category.gold.sell}</Text>
       
 </Card>    
 <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center'}}> 
 <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/2557921286" 
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