import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock, faEye, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { colorss } from "../utils/colorss";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseInit"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 

const Signupscreenn = () => {
  const navigation = useNavigation();

  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const signup = async () => {
    if (!email || !validateEmail(email)) {
      return Alert.alert("Please enter a valid email address.");
    }
    if (!phoneno || !validatePhoneNumber(phoneno)) {
      return Alert.alert("Please enter a valid phone number.");
    }
    if (!password) {
      return Alert.alert("Please enter a password.");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created successfully", user);
      Alert.alert("Account Created Successfully");
      navigation.navigate("LOGIN");
    } catch (error) {
      console.error("Error creating account: ", error.message);
      Alert.alert("Error creating account", error.message);
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={25} color={colorss.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Email"
            placeholderTextColor={colorss.secondary}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faMobileScreen} size={25} color={colorss.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Phone Number"
            placeholderTextColor={colorss.secondary}
            keyboardType="phone-pad"
            onChangeText={(text) => setPhone(text)}
            value={phoneno}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} size={25} color={colorss.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Password"
            placeholderTextColor={colorss.secondary}
            secureTextEntry={secureEntry}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <FontAwesomeIcon icon={faEye} size={20} color={colorss.secondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={signup} style={styles.signupButton}>
          <Text style={styles.signupText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footerText}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signupscreenn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorss.white,
    padding: 15,
justifyContent:"center"  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    color: colorss.primary,
  },
  formContainer: {
    marginTop: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colorss.secondary,
    alignItems: "center",
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: colorss.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  signupText: {
    color: colorss.white,
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  footerText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colorss.primary,
  },
  loginText: {
    color: colorss.primary,
  },
});
