import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Carousel from "../components/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodTypes from "../components/FoodTypes";


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
        
 </SafeAreaView>
    )
}

export default Fooddelivery;

const styles = StyleSheet.create()