import React from 'react'
import { 
     View,
     Text,
     StyleSheet,  // is a component
     useColorScheme //multimode mode 
 } from 'react-native'

 function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
   return(
    <View style={
        styles.container
    }>
    <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Here is AppPro</Text>
    </View>
   )
 }
 const  styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    whiteText:{
        color:'#C81111'
    },
    darkText:{
        color:'#000000'
    },
 })

 export default AppPro;