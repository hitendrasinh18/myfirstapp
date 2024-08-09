import React from "react";
import {View,StyleSheet,TextInput,SafeAreaView,Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


const Instamart= () => {

    return(
        <SafeAreaView>

    
        <View style=
        {{
            flexDirection: "row",
             alignItems: "center", 
             justifyContent:"space-between",
              borderWidth: 1, 
              margin: 10,
             padding: 10,
             borderColor:"#C0C0C0",
            borderRadius: 7,
        }}>
        <TextInput placeholder="Search for Restaurant item or more" />
        <AntDesign name="search1" size={24} color="black" />
        
        </View>
        <View style={styles.itemimage}>

             <Text>Hot deals</Text>
        </View>
        
        </SafeAreaView>


    )
}

export default Instamart;

const styles = StyleSheet.create({

    itemimage:{}
})
