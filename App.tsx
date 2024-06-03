import React from 'react'
import {
  Text,
  View, //similar to div
  SafeAreaView,
  ScrollView

 } from 'react-native'
import FlatCard from './components/FlatCard';
import Elevated from './components/Elevated';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

 function App(){
  //html inside javascript
  //starting tag has must ending tag
 return(
  <SafeAreaView> 
 <ScrollView>
  <FlatCard></FlatCard>
  <Elevated></Elevated>
  <FancyCard></FancyCard>
  <FancyCard></FancyCard>
  <ActionCard></ActionCard>
  <ContactList></ContactList>
 </ScrollView>
</SafeAreaView>
 )
 }

 export default App;