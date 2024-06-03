import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image source={{ uri: 'https://media.istockphoto.com/id/1477509958/photo/website-page-contact-us-or-e-mail-marketing-concept-customer-support-hotline-contact-us.jpg?s=1024x1024&w=is&k=20&c=bBEjN-NTe_1RmmeGNTDtRkz02c_byVaTBN6k9SzIRzs=' }} style={styles.cardImage}/>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Technology</Text>
        <Text style={styles.cardLabel}>Automation</Text>
        <Text style={styles.cardDescription}>Certainly! To insert an image in React Native, you can use the Image component. Here’s a simple example of how to include a local image:</Text>
        <Text style={styles.cardFooter}>22,October,2024</Text>
      </View>
      </View>
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
        width:360,
        height:340,
        // borderRadius:20,
        marginVertical:12,
        marginHorizontal:18,
        borderTopStartRadius:20,
        borderBottomStartRadius:20
        

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardElevated:{
        backgroundColor: '#D6DCEA',
    },
    cardImage :{
        height:180,
        marginBottom:8
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:'#000000',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:8
    },
    cardDescription:{
        color:'#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{

    }
})