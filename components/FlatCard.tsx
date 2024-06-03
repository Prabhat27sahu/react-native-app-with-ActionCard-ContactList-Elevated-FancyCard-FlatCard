import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Card</Text>
        <View style = {styles.container}>
            <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
            <Text>green</Text>
            </View>
            <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
            </View>
        </View>
        <View style = {styles.container}>
            <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
            </View>
        </View>
        {/* <View style = {styles.container}>
            <View style={[styles.card, styles.cardThree]}>
            <Text>green</Text>
            </View>
        </View> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:8,


    },
    card:{
        flex:1,
        width:100,
        height:100,
        justifyContent: 'center', //vertically center 
        alignItems: 'center',
        margin:8
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#6053EF'
    },
    cardThree:{
        backgroundColor:'#23AD4F'
    }

})