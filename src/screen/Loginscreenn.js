import { StyleSheet, Text, View, TouchableOpacity,Image,  } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
 import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
 import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
 import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { TextInput } from "react-native-gesture-handler";
import { colorss } from '../utils/colorss';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import {firebase} from './config';
//import firebase from '../../firebaseInit'; // Adjust the path as per your file structure
// import {firebase} from "../../firebaseInit";
// import firebaseConfig from "../../firebaseConfig";

const Loginscreenn = () => {
    const [secureEntry, setSercureEntry] = useState(true);
    const [email, setemail] = useState("");   
    const [password, setpassword] = useState("");
    
    const navigation =useNavigation();

    const handledashboard = () =>{

        navigation.navigate("Dashboard");
    
    };

    
    const login = async () => {



       
       
            try {
                console.log("login click");
              const response = await firebase.auth().signInWithEmailAndPassword(email, password);
              // Handle successful login
              console.log('User logged in successfully!', response.user);
            } catch (error) {
             // Alert.alert('Error', error.message);

              console.log('user logged in unsuccessfully',error);
            }
          };

        //    try{
        //     await firebase.auth().AsyncStorage(email,password)

        //    }catch(error){
        //     alert(error.message)

        //    }

            // try {
    
    //             let loginn = {
    //                 email: email,
    //                 password: password,
                    
    //             };



    //             let loginpageEmail =  await AsyncStorage.getItem("@signup");
    //             loginpageEmail = JSON.parse(loginpageEmail);
    //             console.log("loginpage",loginpageEmail.email)
                
    //             const convertstrinfy = loginn;
    //             console.log("data: " + JSON.stringify(convertstrinfy));
    
    
    
    
    //           if(loginpageEmail.email === convertstrinfy.email && loginpageEmail.password === convertstrinfy.password){
    
    //             console.log('login sucessfully')
    //             alert('login sucessfully');
    
    
    //         }else{
    //             console.log ('login unsucessfully')
    //             alert('login unsucessfully')
    
    //         }
        
                
    
    //         } catch (e) {
    //             console.log("exception occure: " + e);
    //         }
    
           
    // };




    const handleSignup= () =>{

        navigation.navigate("SIGNUP");  

     };
        
 return (
<View style={styles.contaniar}>

    
<View style={styles.textwapper}>
    <Text style={styles.textheading}>Hey,</Text>
    <Text style={styles.textheading}>Welcome</Text>
    <Text style={styles.textheading}>Back</Text>

</View>
<View style={styles.formcontaniar}>
    <View style={styles.inputcontaniar}>
        <FontAwesomeIcon icon={faEnvelope} size={25} color={colorss.secondary} />

        <TextInput style={styles.inputtext} placeholder="Enter Your Email"
            placeholderTextColor={colorss.secondary} keyboardType="email-address"onChangeText={email =>
                setemail(email)}>

        </TextInput>
    </View>
    <View style={styles.inputcontaniar}>
        <FontAwesomeIcon icon={faLock} size={25} color={colorss.secondary} />

        <TextInput style={styles.inputtext} placeholder="Enter Your Password"
            placeholderTextColor={colorss.secondary} secureTextEntry={secureEntry} onChangeText={password=> 
                setpassword(password)
            }>

        </TextInput>
        <TouchableOpacity onPress={() => {
            setSercureEntry((hitendra) => !hitendra);
        }}>
            <FontAwesomeIcon icon={faEye} size={20} color={colorss.secondary} />
        </TouchableOpacity>

    </View>
    <TouchableOpacity >
        <Text style={styles.Forgetpassword}>Forget Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginbuttoncontainer} onPress={handledashboard}>
        <Text style={styles.loginbuttontext}>Login</Text>
    </TouchableOpacity>
    <Text style={styles.continuetext}>or continue with</Text>
    <TouchableOpacity style={styles.googleimagecontaniar} >
        <Image source={require("../assets/googlee.png")}style={styles.googleimage}></Image>
        <Text style={styles.googletext}>Google</Text>
    </TouchableOpacity>
    <View style={styles.footertext}>
        <Text style={styles.accounttext}>
            don't have an account?
        </Text>
        <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signuptext}>Sign up</Text></TouchableOpacity>
    </View>
</View>

</View>


)
// };

    };                                        

export default Loginscreenn;


const styles = StyleSheet.create({

    contaniar: {
        flex: 1,
        backgroundColor: colorss.white,
        padding: 15,
    },
    // backbuttonwapper: {
    //     height: 40,
    //     width: 40,
    //     backgroundColor: Colors.gray,
    //     borderRadius: 40,
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    textwapper: {
        marginVertical: 20,

    },
    textheading: {
        marginTop:15,
        fontSize: 32,
        color: colorss.primary,



    },
    formcontaniar: {

        marginTop: 30,

    },
    inputcontaniar: {

        borderWidth: 1,
        borderColor: colorss.secondary,
        alignItems: "center",
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        padding: 5,
        marginVertical: 10,
    },
    inputtext: {
        flex: 1,
        paddingHorizontal: 10,

    },
    Forgetpassword: {
        textAlign: "right",
        color: colorss.primary,
        marginVertical: 10,

    },
    loginbuttoncontainer: {
        backgroundColor: colorss.primary,
        borderRadius: 100,
        marginTop: 20,
    },
    loginbuttontext: {
        color: colorss.white,
        fontSize: 18,
        textAlign: "center",
        padding: 10,
    
},
continuetext:{
    textAlign:'center',
    marginVertical:20,
    fontSize:14,

},
googleimagecontaniar:{
flexDirection:"row",
borderWidth:2,
borderColor:colorss.primary,
borderRadius:100,
justifyContent:"center",
alignItems:"center",
padding:10,
gap:10,


},
googleimage:{
    height:18,
    width:18,
},
googletext:{
    fontSize:20,

},
footertext:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    marginVertical:20,
    gap:5,


},
accounttext:{
    color:colorss.primary,
},
signuptext:{
    color:colorss.primary,


}


})
