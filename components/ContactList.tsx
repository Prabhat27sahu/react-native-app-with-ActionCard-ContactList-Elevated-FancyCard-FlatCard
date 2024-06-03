import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'Mukesh Sir',
            status:'just  want to start project',
            imageURL:'https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/432444572_1276345376655473_5205103188101657323_n.jpg?ccb=11-4&oh=01_ASDqshTsHpg2T1GeWG5l-Cl5rZDWLTbMcdbCJiqa8czbiA&oe=662A1626&_nc_sid=e6ed6c&_nc_cat=111'
        },
        {
            uid:2,
            name:'Bijay Kumar',
            status:'just  want to start project',
            imageURL:'https://pps.whatsapp.net/v/t61.24694-24/427511049_7695418457169163_3880185920394214648_n.jpg?ccb=11-4&oh=01_ASDz4hgzqxQAvSi5YmWk1E75gY3b3TIib-TtR25dFFlpbg&oe=6613C4A9&_nc_sid=e6ed6c&_nc_cat=106'
        },
        {
            uid:3,
            name:'Harish sahu',
            status:'just  want to start project',
            imageURL:'https://pps.whatsapp.net/v/t61.24694-24/427560944_1585521582294240_799305639084409152_n.jpg?ccb=11-4&oh=01_ASDG9-0cxFdAVHdB9hUN5sfTjMoXFcruefDdm028bDDqLA&oe=66151A23&_nc_sid=e6ed6c&_nc_cat=111'
        },
        {
            uid:4,
            name:'Kumar shanu',
            status:'just  want to start project',
            imageURL:'https://pps.whatsapp.net/v/t61.24694-24/382273886_1379280416021368_3735302466350314682_n.jpg?ccb=11-4&oh=01_ASAZMVAsJ1vh7ra8DIpmMtf8NjDR2pxaEu96DIDglXBXSw&oe=66138C0A&_nc_sid=e6ed6c&_nc_cat=106'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageURL})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{uri: imageURL}}
                style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}

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
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor: '#AF35E4',
        borderRadius:8,
        padding:8,

    },
    userImage:{
        width:100,
        height:100,
        borderRadius:100/2,
        marginRight:14,
        // marginLeft:10,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000',

    },
    userStatus:{
        fontSize:12,

    },
})