// import React from "react";
// import { View, Text, TextInput, StyleSheet,Image, ScrollView, Button } from "react-native";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Carousel from "../components/Carousel";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { colorss } from "../utils/colorss";
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Hotel from "../data/Hotel";
// import Menuitem from "../components/Menuitem";
// const Fooddelivery = () => {
//     const data=Hotel;
//     return (
// <SafeAreaView>
// <ScrollView >

//         <View style=
//             {{
//                 flexDirection: "row",
//                  alignItems: "center", 
//                  justifyContent:"space-between",
//                   borderWidth: 1, 
//                   margin: 10,
//                  padding: 10,
//                  borderColor:"#C0C0C0",
//                 borderRadius: 7,
//             }}>
//             <TextInput placeholder="Search for Restaurant item or more" />
//             <AntDesign name="search1" size={24} color="black" />

//         </View>
//         {/* <Carousel/> */}

//         {/* food item type */}
//         <Text style={{margin:30,justifyContent:"flex-start",alignItems:"flex-start"}}>HITENDRASINH, WHAT'S ON YOUR MIND</Text>
//         <View style={styles.fooditem}>

//     {/* <View style={styles.foodimage}> */}
//     <Image style={{flexDirection:"row", justifyContent:"space-between",
// width:60,height:60,borderRadius:30,}} source={require("../../assets/biriyani.jpg")}/>

// {/* </View> */}
    
//     {/* <View style={styles.foodimage}> */}
//     <Image style={{flexDirection:"row", justifyContent:"space-between",
// width:60,height:60,borderRadius:30,}} source={require("../../assets/pizzas.jpg")}/>

// {/* </View> */}
//     {/* <View style={styles.foodimage}> */}
//     <Image style={{flexDirection:"row", justifyContent:"space-between",
// width:60,height:60,borderRadius:30,}} source={require("../../assets/paratha.jpg")}/>

// {/* </View> */}
    
//     {/* <View style={styles.foodimage}> */}
//     <Image style={{flexDirection:"row", justifyContent:"space-between",
// width:60,height:60,borderRadius:30,}} source={require("../../assets/vadapav.jpg")}/>

// {/* </View> */}

//     </View>


//     <View style={styles.foodtext}>
//     <Text>Biriyani</Text>
//     <Text>Pizzas</Text>

//     <Text >Paratha</Text>
//     <Text>Vadapav</Text>
//     </View>
//     <View>
//         <Text style={{marginTop:15, marginLeft:10, color:"orange",fontWeight:"bold" }}>WELCOME OFFER!!</Text>
//         <Text style={{fontWeight:"bold", marginLeft:10, fontSize:25, fontStyle:"italic"}}>Get 50% off &</Text>
//         <Text style={{ fontWeight:"bold", marginLeft:10, fontSize:25, fontStyle:"italic"}}>free delivery</Text>
//          <Text style={{marginLeft:10}}>on your first order on swiggy!</Text>
//      </View>
     
// <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//      <View style={styles.foodstore}>
//     <Image style={{height:200, width:150, borderRadius:10, margin:10}} source={require("../../assets/food.jpg")}/>
//     <Text style={{position:"absolute", bottom:25,left:10,fontSize:20,color:"white", fontWeight:700}}> 50% OFF</Text>
//     <Text style={{position:"absolute", bottom:10 , left:10,color:"white", fontSize:10 }}> UP TO RS.100</Text>
// </View>
// <View style={styles.foodstore}>

//     <Image style={{height:200, width:150, borderRadius:10, margin:10,}} source={require("../../assets/icecream.jpg")}/>
//     <Text style={{position:"absolute", bottom:25,left:10,fontSize:20,color:"white", fontWeight:700}}> 60% OFF</Text>
//     <Text style={{position:"absolute", bottom:10,left:10,fontSize:10,color:"white", }}> UP TO RS.100</Text>

// </View>
// <View style={styles.foodstore}>

//     <Image style={{height:200, width:150, borderRadius:10, margin:10,}} source={require("../../assets/mithai.jpg")}/>
//      <Text style={{position:"absolute", bottom:25,left:10,fontSize:20,color:"white", fontWeight:700}}> 50% OFF</Text>
//      <Text style={{position:"absolute", bottom:10,left:10,fontSize:10,color:"white",}}> UP TO RS.100</Text>

//      </View>
//      </ScrollView>
//      <Text style={{left:10}}>POPULAR BRANDS</Text>
     

//      <View style={{justifyContent:"space-around",flexDirection:"row"}}>

//       <View style={{borderWidth:1,borderRadius:15,color:"black", height:30, width:100, alignItems:"center", flexDirection:"row", justifyContent:"space-around"}}><Text >Filter</Text><MaterialCommunityIcons name="filter-variant" size={24} color="black" /></View>
//       <View style={{borderWidth:1,borderRadius:15,color:"black",height:30, width:100, alignItems:"center",flexDirection:"row", justifyContent:"space-around"}}><Text>Sort by</Text><AntDesign name="down" size={24} color="black" /></View>  
//      <View style={{borderWidth:1,borderRadius:15,color:"black",height:30, width:100, alignItems:"center"}}><Text>Fast Delivery</Text></View>   
//     </View>

// {data.map((item,index) => (<Menuitem key={index} item={item}/>))}
 

// </ScrollView>
//  </SafeAreaView>
 
//     )
// }

// export default Fooddelivery;

// const styles = StyleSheet.create({

// fooditem:{
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"space-around",
    
// },
// foodtext:{
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"space-around"
// },
// foodstore:{
//     flexDirection:"row",
//     margin:10,
// },
// buttoncontainer: {
//     backgroundColor: colorss.primary,
//      marginTop: 20,
//      flexDirection: "row",
//      borderColor: colorss.primary,
//      width: "80%",
//      height: 60,
//      borderRadius: 80,
//      justifyContent: "center",
//      alignItems: "center",

   
// }
// })


import React from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import hotelData from "../data/Hotel";

const Fooddelivery = () => {
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.searchContainer}>
                    <TextInput placeholder="Search for Restaurant item or more" style={{flex: 1}}/>
                    <AntDesign name="search1" size={24} color="black" />
                </View>

                <Text style={styles.headingText}>HITENDRASINH, WHAT'S ON YOUR MIND</Text>

                <View style={styles.fooditem}>
                    <Image style={styles.foodImage} source={require("../../assets/biriyani.jpg")} />
                    <Image style={styles.foodImage} source={require("../../assets/pizzas.jpg")} />
                    <Image style={styles.foodImage} source={require("../../assets/paratha.jpg")} />
                    <Image style={styles.foodImage} source={require("../../assets/vadapav.jpg")} />
                </View>

                <View style={styles.foodtext}>
                    <Text>Biriyani</Text>
                    <Text>Pizzas</Text>
                    <Text>Paratha</Text>
                    <Text>Vadapav</Text>
                </View>

                <Text style={styles.popularBrands}>POPULAR BRANDS</Text>

                <FlatList
                    data={hotelData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.foodstore}>
                            <Image style={styles.storeImage} source={{ uri: item.image }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
                                <Text>Rating: {item.rating} ⭐</Text>
                                <Text>Time: {item.time} mins</Text>
                                <Text>Cost for two: ₹{item.cost_for_two}</Text>
                            </View>
                        </View>
                    )}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: "#C0C0C0",
        borderRadius: 7,
    },
    headingText: {
        margin: 30,
        fontWeight: "bold",
        fontSize: 18
    },
    fooditem: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10
    },
    foodImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    foodtext: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },
    popularBrands: {
        margin: 10,
        fontSize: 18,
        fontWeight: "bold"
    },
    foodstore: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        borderRadius: 10
    },
    storeImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    }
});

export default Fooddelivery;
