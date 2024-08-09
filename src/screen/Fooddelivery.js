import React from "react";
import { View, Text, TextInput, StyleSheet,Image, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Carousel from "../components/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";


const Fooddelivery = () => {
    return (
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
        {/* <Carousel/> */}

        {/* food item type */}
        <Text style={{margin:30,justifyContent:"flex-start",alignItems:"flex-start"}}>HITENDRASINH, WHAT'S ON YOUR MIND</Text>
        <ScrollView showsHorizontalScrollIndicator={false}>

<View style={styles.fooditem}>
    <View style={styles.foodimage}>
    <Image style={{flexDirection:"row", justifyContent:"space-between",
width:60,height:60,borderRadius:30,}} source={require("../assets/biriyani.jpg")}/>
</View>
    {/* <Text>Biriyani</Text> */}
    
    <View style={styles.foodimage}>
    <Image style={{flexDirection:"row", justifyContent:"space-between",
width:60,height:60,borderRadius:30,}} source={require("../assets/pizzas.jpg")}/>
</View>
    {/* <Text>Pizzas</Text> */}
    <View style={styles.foodimage}>
    <Image style={{flexDirection:"row", justifyContent:"space-between",
width:60,height:60,borderRadius:30,}} source={require("../assets/paratha.jpg")}/>
</View>
    {/* <Text>Paratha</Text> */}
    
    <View style={styles.foodimage}>
    <Image style={{flexDirection:"row", justifyContent:"space-between",
width:60,height:60,borderRadius:30,}} source={require("../assets/vadapav.jpg")}/>
</View>
    {/* <Text>Vadapav</Text> */}
    </View>
    </ScrollView>


 </SafeAreaView>
 
    )
}

export default Fooddelivery;

const styles = StyleSheet.create({
    fooditem:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
 },
   
})

