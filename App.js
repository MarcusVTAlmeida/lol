
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
 //Import your screens 


 
import home from "./src/screens/home";
import detalhes from "./src/screens/detalhes";
import itens from "./src/screens/itens";
import detalhesitens from "./src/screens/detalhesitens";
import profile from "./src/screens/profile";
import spellsDetalhes from "./src/screens/spellsDetalhes";
import spells from "./src/screens/spells";
import runas from "./src/screens/runas";
import runasDetalhes from "./src/screens/runasDetalhes";

 //Define your routes using createStackNavigator, which will be a object full of options. 
 const AppNavigator = createStackNavigator({
     //Define your screens.
     home: {screen: home },
     detalhes: {screen: detalhes },
     itens: {screen: itens },
     detalhesitens: {screen: detalhesitens },
     profile: {screen: profile },
     spellsDetalhes: {screen: spellsDetalhes },
     spells: {screen: spells },
     runasDetalhes: {screen: runasDetalhes },
     runas: {screen: runas },
   },
   {
     initialRouteName:  'profile',
    
   })
 
 
 //Export default the stateless component 

 
 export default createAppContainer(AppNavigator);;
 
 