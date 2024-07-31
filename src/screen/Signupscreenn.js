import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen'
import { colorss } from '../utils/colorss';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signupscreenn = () => {

    const navigation = useNavigation();

    const [secureEntry, setSercureEntry] = useState(true);
    const [email, setemail] = useState("");
    const [emailvalidition, emailvaliditionerror] = useState(false);

    const [phoneno, setphone] = useState("");
    const [phonenovalidition, phonenovaliditionerror] = useState(false);


    const [password, setpassword] = useState("");
    const [passwordvalidition, passwordvaliditionerror] = useState(false);



    const handleLogin = () => {

        navigation.navigate("LOGIN");


    }
const signup = async () => {


        if (email === "") {
            emailvaliditionerror(true)
            Alert.alert('Please enter a valid email address.');
        } else if (!validateEmail(email)) {
            emailvaliditionerror(true);
            Alert.alert('Please enter a valid email address.');
        } else if (phoneno === "") {
            phonenovaliditionerror(true);
            Alert.alert('please enter a valid phonenumber')
        } else if (!validatePhoneNumber(phoneno)) {
            Alert.alert('please enter a valid phonenumber')

        } else if (password === "") {
            passwordvaliditionerror(true);
        }



        else {

            emailvaliditionerror(false);
            passwordvaliditionerror(false);
            phonenovaliditionerror(false);
            try {

                let payload = {
                    email: email,
                    phoneno: phoneno,
                    password: password,
                };

                let convertstrinfy = JSON.stringify(payload);
                console.log("data: " + convertstrinfy);



                await AsyncStorage.setItem('@signup', convertstrinfy);
                setemail("");
                setphone("");
                setpassword("");
                alert('User registered sucessfully..!');

            } catch (e) {
                console.log("exception occure: " + e);
            }
        }
    }
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const validatePhoneNumber = (phoneNo) => {
        const re = /^[0-9]{10}$/;
        return re.test(phoneNo);}
    return (

        <View style={styles.contaniar}>


            <View style={styles.textwapper}>
                <Text style={styles.textheading}>Let's</Text>
                <Text style={styles.textheading}>Started</Text>

            </View>
            <View style={styles.formcontaniar}>
                <View style={styles.inputcontaniar}>
                    <FontAwesomeIcon icon={faEnvelope} size={25} color={colorss.secondary} />

                    <TextInput style={styles.inputtext} placeholder="Enter Your Email"
                        value={email}

                        placeholderTextColor={colorss.secondary} keyboardType="email-address" onChangeText={e =>
                            setemail(e)

                        }>
                    </TextInput>
                </View>
                <View style={styles.inputcontaniar}>
                    <FontAwesomeIcon icon={faMobileScreen} size={25} color={colorss.secondary} />
                    <TextInput style={styles.inputtext} placeholder="Enter Your Phonenumber"
                        value={phoneno}

                        placeholderTextColor={colorss.secondary} secureTextEntry={secureEntry} keyboardType="Phone-pad" onChangeText={e =>
                            setphone(e)
                        }>

                    </TextInput>
                </View>
                <View style={styles.inputcontaniar}>
                    <FontAwesomeIcon icon={faLock} size={25} color={colorss.secondary} />

                    <TextInput style={styles.inputtext} placeholder="Enter Your Password"
                        value={password}
                        placeholderTextColor={colorss.secondary} secureTextEntry={secureEntry} onChangeText={e =>
                            setpassword(e)
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
                <TouchableOpacity style={styles.loginbuttoncontainer} onPress={() => signup()}>
                    <Text style={styles.loginbuttontext}>Sign Up</Text>
                </TouchableOpacity>
                {/* <Text style={styles.continuetext}>or continue with</Text> */}
                {/* <TouchableOpacity style={styles.googleimagecontaniar}>
                    <Image source={require("../assets/googlee.png")} style={styles.googleimage}></Image>
                    <Text style={styles.googletext}>Google</Text>
                </TouchableOpacity> */}
                <View style={styles.footertext}>
                    <Text style={styles.accounttext}>
                        Alreday have your account!
                    </Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.signuptext}>Login</Text></TouchableOpacity>
                </View>
            </View>

        </View>


    )
};



export default Signupscreenn;


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
        marginTop: 15,
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
    continuetext: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,

    },
    googleimagecontaniar: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colorss.primary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,


    },
    googleimage: {
        height: 18,
        width: 18,
    },
    googletext: {
        fontSize: 20,

    },
    footertext: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        gap: 5,


    },
    accounttext: {
        color: colorss.primary,
    },
    signuptext: {
        color: colorss.primary,


    }


})