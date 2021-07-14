import React, { Component } from 'react'
import { Image, Text, View, FlatList, ScrollView, StyleSheet} from 'react-native'
import { Card } from 'react-native-elements'
import HTMLView from 'react-native-htmlview';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
export default class runasDetalhes extends React.PureComponent {
    static navigationOptions = {
        headerTitle: 'Detalhes das runas',
        };
    _renderItem = ({item}) => { 
        console.log(item)     
        return  (   
            <ScrollView style={{backgroundColor: 'black'}}>    
                <FlatList 
                data={item.runes}
                renderItem={this._renderItem2}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:5 , backgroundColor: 'gray'}}  
                />}
                
                
            />         
                </ScrollView >           
        )
    } 
    _renderItem2 = ({item}) => { 
        
        console.log(item.icon )
        return  (   
            <ScrollView style={{backgroundColor: 'black'}}>  
             <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', paddingTop:20, paddingBottom:20}}>  
          <Image style={{height: 80, width: 80, borderRadius: 60}} source={{uri:`https://ddragon.bangingheads.net/cdn/img/${item.icon}` }} />
              
               <Text style={{color:'white', fontSize:20}}>{item.name}</Text>  
               <View style={{ paddingLeft:10, paddingRight:10}}> 
               <HTMLView 
        value={"<div><p><a href='http://jsdf.co'>"+item.longDesc+"</a></p></div>"}
        stylesheet={styles}
      /> 
       </View>
                  </View>  
                </ScrollView >           
        )
    } 
    render() {          
        const category = this.props.navigation.state.params.category  
               
        return (
            <ScrollView style={{ backgroundColor: '#800000'}}>               
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
                    <View style={{height:30 , backgroundColor: 'gray'}} 
                />}
                
            /> 

</View>
<Card.Divider/> 
        
       </Card> 
       <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', flex:1}}> 
                <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-4654651969138945/5466794264" 
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
      color: 'white', 
      // make links coloured pink
    },
  });