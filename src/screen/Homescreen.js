import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { colorss } from '../utils/colorss';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
    const navigation = useNavigation();

    const handlelogin = () => {
        navigation.navigate("LOGIN");
    };

    const handleSignup = () => {
        navigation.navigate("SIGNUP");
    };

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/compteruser.png")} style={styles.bannerImage} />
            <Text style={styles.title}>Welcome Guest</Text>
            <Text style={styles.subtitle}>
                Lorem Ipsum has been the industry's standard dummy text.
            </Text>

            <TouchableOpacity style={styles.buttoncontainer} onPress={handlelogin}>
                <Text style={styles.loginbuttontext}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttoncontainer} onPress={handleSignup}>
                <Text style={styles.signupbuttontext}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // Center items vertically
        backgroundColor: colorss.white,
        paddingHorizontal: 20,
    },
    bannerImage: {
        height: 250,
        width: 231,
        resizeMode: 'contain', // Ensure the image fits well
        marginBottom: 20,
    },
    title: {
        fontSize: 36,
        textAlign: "center",
        color: colorss.primary,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: colorss.secondary,
        marginVertical: 20,
    },
    buttoncontainer: {
        backgroundColor: colorss.primary,
        marginTop: 20,
        width: "80%",
        height: 60,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    loginbuttontext: {
        color: colorss.white,
        fontSize: 18,
    },
    signupbuttontext: {
        color: colorss.white,
        fontSize: 18,
    }
});
