import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { useNavigation } from '@react-navigation/native';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
// import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow'
import { colorss } from '../utils/colorss';
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
// import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// import Homescreen from "./Homescreen";
// import Loginscreenn from "./Loginscreenn";
import Fooddelivery from "./Fooddelivery";
import Instamart from "./Instamart";
import Dineout from "./Dineout";
import Reorder from "./Reorder";
import Genie from "./Genie";



const Dashboard = () => {


    const navigation = useNavigation();



    const handelFooddelivery = () => {

        navigation.navigate("FOODDELIVERY");

    };


    const handelInstamart = () => {

        navigation.navigate("INSTAMART");

    };

    const handelDineout = () => {

        navigation.navigate("DINEOUT");

    };

    const handelGenie = () => {

        navigation.navigate("GENIE");

    };


    const Tab = createBottomTabNavigator();




    return (


        <ScrollView contentContainerStyle={styles.container}>




            <View style={styles.contaniar}>
                <View style={styles.searchbarbox}>
                    <TextInput placeholder="search for Item"></TextInput>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />

                </View>
                {/* <View style={styles.headerpart}>
                <View style={styles.locationpart}>
                <FontAwesomeIcon icon={faLocationArrow} />

                    <Text>
                        usamanpura

                    </Text>
                    <FontAwesomeIcon icon={faCaretDown} />
                    <FontAwesomeIcon icon={faPerson} />
                    </View>
                    </View> */}



                <View style={styles.centeremoji}>
                    <Image source={require("../assets/emoji.png")} style={styles.emojipic}></Image>
                    <Text style={styles.emojitext}>Welcome Hitendrasinh</Text>
                    <Text style={styles.emojitextsecond}>Enjoy flat 50% off+ free delivery</Text>
                </View>
                <View style={styles.bodypart}>
                    <View style={styles.bodyfirst}>
                        <TouchableOpacity onPress={handelFooddelivery}>

                            <View style={styles.bodycontaniar}>
                                <Text style={styles.storehader}>FOOD DELIVERY</Text>
                                <Text style={styles.restaurants}>FROM RESTAURANTS</Text>
                                <Text style={styles.offer}>UP TO 60% OFF</Text>
                                <Image source={require("../assets/fooddelivery.jpg")} style={styles.fooddeliveryimg}></Image>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handelInstamart}>
                            <View style={styles.bodycontaniar}>
                                <Text style={styles.storehader}>INSTAMART</Text>
                                <Text style={styles.restaurants}>GET ANYTHING INSTANTLY</Text>
                                <Text style={styles.offer}>FREE DEL AT RS.49</Text>
                                <Image source={require("../assets/instamart.jpg")} style={styles.instamart}></Image>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodysecond}>
                        <TouchableOpacity onPress={handelDineout}>
                            <View style={styles.bodycontaniar}>
                                <Text style={styles.storehader}>DINEOUT</Text>
                                <Text style={styles.restaurants}>EAT OUT & SAVE MORE</Text>
                                <Text style={styles.offer}>UP TO 50% OFF</Text>
                                <Image source={require("../assets/dineout.png")} style={styles.dineout}></Image>


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handelGenie}>
                            <View style={styles.bodycontaniar}>
                                <Text style={styles.storehader}>GENIE</Text>
                                <Text style={styles.restaurants}>PICK-UP & DROP</Text>
                                <Image source={require("../assets/genie.png")} style={styles.instamart}></Image>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>live</Text>
                        <Text>it up!</Text>
                        <Text>Crafted with in Bengaluru, India</Text>
                    </View>
                </View>


            </View>

            <Tab.Navigator>
                <Tab.Screen name="swiggy" component={Fooddelivery} />
                <Tab.Screen name="Food" component={Fooddelivery} />
                <Tab.Screen name="Instamart" component={Instamart} />
                <Tab.Screen name="Dineout" component={Dineout} />
                <Tab.Screen name="Reorder" component={Reorder} />
                <Tab.Screen name="Genie" component={Genie} />
            </Tab.Navigator>
        </ScrollView>

    )

}

export default Dashboard;

const styles = StyleSheet.create
    ({
        // container: {



        // },

        contaniar: {
            flex: 1,
            backgroundColor: colorss.lightgray,
            padding: 15,

        },
        // headerpart:{
        //     flexDirection:"row",
        //     alignItems:"center",
        //     justifyContent:"space-between"
        // },
        searchbarbox:
        {

            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-between",
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: colorss.white,


        },
        bodycontaniar: {


            marginTop: 15,
            flexDirection: "column",
            borderWidth: 1,
            padding: 10,
            height: 175,
            borderRadius: 15,
            width: 135,
            backgroundColor: colorss.white,
            borderColor: colorss.white,
        },

        bodyfirst: {

            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"

        },

        bodysecond: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
        },
        // Text:
        // { 
        //     flexDirection:"column",
        //     alignItems:"flex-start",

        // }
        storehader: {
            fontSize: 15,
            fontWeight: "bold"
        },

        restaurants: {
            fontSize: 10,

        },
        offer: {
            fontSize: 10,
            fontWeight: "bold",
        },
        fooddeliveryimg: {
            marginTop: 18,
            marginLeft: 26,
            alignItems: "flex-end",
            height: 90,
            width: 95,

        },
        instamart: {
            marginTop: 5,
            marginLeft: 26,
            alignItems: "flex-end",
            height: 90,
            width: 95,
        },
        dineout: {
            marginTop: 16,
            marginLeft: 25,
            height: 80,
            width: 100,

        },
        centeremoji: {
            marginTop: 50,
            flexDirection: "column",
            alignItems: "center",
        },
        emojipic: {
            height: 80,
            width: 90,
        },
        emojitext: {
            fontWeight: "bold"
        }



    })