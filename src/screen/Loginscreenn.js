import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock, faEye } from "@fortawesome/free-solid-svg-icons";
import { colorss } from "../utils/colorss";
import { useNavigation } from "@react-navigation/native";
import {
  auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "../../firebaseInit";
import * as Google from "expo-auth-session/providers/google";

const Loginscreenn = () => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      console.log("Login clicked");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("User logged in successfully!", userCredential.user);
      navigation.navigate("DASHBOARD");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your email and password.");
    }
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "742637306343-7p23c2vn5ot12vdgvd9toofjl8dl35bs.apps.googleusercontent.com",
  //   expoClientId:
  //     "742637306343-7p23c2vn5ot12vdgvd9toofjl8dl35bs.apps.googleusercontent.com",
  // });
  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;

  //     const credential = GoogleAuthProvider.credential(id_token);

  //     signInWithCredential(auth, credential)
  //       .then((userCredential) => {
  //         console.log("Google Sign-In Successful!", userCredential.user);
  //         navigation.navigate("Dashboard");
  //       })
  //       .catch((error) => {
  //         console.error("Google Sign-In Failed:", error.message);
  //       });
  //   }
  // }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.textHeading}>Hey,</Text>
        <Text style={styles.textHeading}>Welcome</Text>
        <Text style={styles.textHeading}>Back</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={25}
            color={colorss.secondary}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Email"
            placeholderTextColor={colorss.secondary}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

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

        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButtonContainer} onPress={login}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity
          style={styles.googleImageContainer}
          // onPress={() => promptAsync()}
        >
          <Image
            source={require("../../assets/googlee.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footerText}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Loginscreenn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorss.white,
    padding: 15,
    justifyContent:'center'
  },
  textWrapper: {
    marginVertical: 20,
  },
  textHeading: {
    marginTop: 15,
    fontSize: 32,
    color: colorss.primary,
  },
  formContainer: {
    marginTop: 30,
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
  forgetPassword: {
    textAlign: "right",
    color: colorss.primary,
    marginVertical: 10,
  },
  loginButtonContainer: {
    backgroundColor: colorss.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginButtonText: {
    color: colorss.white,
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
  },
  googleImageContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colorss.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 18,
    width: 18,
  },
  googleText: {
    fontSize: 20,
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
  signupText: {
    color: colorss.primary,
  },
});
