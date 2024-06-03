import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:  string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingLine}>
                What's new  in the world of App development?

            </Text>
        </View>
        <Image source={{
            uri:'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg'
        }}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.
            </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.socialLink}>
            Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.geeksforgeeks.org/')}>
            <Text style={styles.socialLink}>
            Follow me</Text>
            </TouchableOpacity>
        </View>
        

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:360,
        height:390,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard: {
      backgroundColor:'#F08E38',
      elevation:4,
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowColor:'#3333',
      shadowOpacity:0.5,
    },
    headingContainer: {
      height:50,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'

    },
    cardImage:{
        height:200,
         
    },
    bodyContainer:{
      padding:10,


    },
    footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',

    },
    socialLink:{
      fontSize:16,
      color:'#000000',
      backgroundColor:'#FFF',
      paddingHorizontal:20,
      paddingVertical:8,
      borderRadius:6,
    },
    headingLine:{
      color:'#000',
      fontWeight:'600',
      fontSize:16,
    },
})