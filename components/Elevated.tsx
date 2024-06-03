import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>
                Top
            </Text>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
        width:100,
        height:100,
        margin:8,
        borderRadius:5,
        textDecorationColor:'red'


    },
    cardElevated:{
         backgroundColor:'#CAD5E2',
         elevation:8,
         shadowOffset:{
          width:1,
          height:1
         },
         shadowColor:'#3333',
         shadowOpacity:0.5,
         shadowRadius:2
    },
    container:{
      padding:8
    }


})