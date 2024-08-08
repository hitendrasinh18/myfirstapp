import {StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';
import { colorss } from '../utils/colorss';
import {  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Homescreen = () => {
    const navigation =useNavigation();

    const handlelogin = () =>{

        navigation.navigate("LOGIN");
    
    };
        const handleSignup= () =>{

            navigation.navigate("SIGNUP");   
    };

 return (
<View style={styles.containar}>
{/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
<Image source={require("../assets/compteruser.png")} style={styles.bannerImage} />
<Text style ={styles.title} >Welcome Guest</Text>
<Text style={styles.subtitle}>Lorem Ipsum has been the industry's standard dummy text.
</Text>
 
<TouchableOpacity style={styles.buttoncontainer}onPress={(handlelogin)} >
                <Text style={styles.loginbuttontext} >Login</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttoncontainer} onPress={(handleSignup)}>
                <Text style={styles.signupbuttontext}>
                    Sign-Up
                </Text>
            </TouchableOpacity>

</View>

 )
};

export default Homescreen;



const styles = StyleSheet.create({

    containar: {
        flex: 1,
        alignItems: "center",
backgroundColor:colorss.white    },

logo: {
    height: 100,
    width: 50,
},
    
bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
},
title: {
    fontSize: 36,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colorss.primary,
    marginTop: 20,
},
subtitle: {
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 20,
    color: colorss.secondary,
    marginVertical: 20,

},
buttoncontainer: {
    backgroundColor: colorss.primary,
     marginTop: 20,
     flexDirection: "row",
     borderColor: colorss.primary,
     width: "80%",
     height: 60,
     borderRadius: 80,
     justifyContent: "center",
     alignItems: "center",
 },

 loginbuttontext: {
     color:colorss.white,
     fontSize: 18,
 },

 signupbuttontext: {
     color:colorss.white,
     fontSize: 18,
 }
});




