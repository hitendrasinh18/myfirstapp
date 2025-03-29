import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { colorss } from "../utils/colorss";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Search Bar */}
        <View style={styles.searchbarbox}>
          <TextInput placeholder="Search for Item" style={styles.searchInput} />
          <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="gray" />
        </View>

        {/* Welcome Section */}
        <View style={styles.centeremoji}>
          <Image source={require("../../assets/emoji.png")} style={styles.emojipic} />
          <Text style={styles.emojitext}>Welcome, Hitendrasinh</Text>
          <Text style={styles.emojitextsecond}>Enjoy flat 50% off + free delivery</Text>
        </View>

        {/* Services Section */}
        <View style={styles.servicesContainer}>
  <TouchableOpacity onPress={() => navigation.navigate("Food")} style={styles.serviceBox}>
    <Text style={styles.serviceTitle}>Food Delivery</Text>
    <Image source={require("../../assets/fooddelivery.jpg")} style={styles.serviceImage} />
    <Text style={styles.serviceSubtitle}>Up to 60% OFF</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("Instamart")} style={styles.serviceBox}>
    <Text style={styles.serviceTitle}>Instamart</Text>
    <Image source={require("../../assets/instamart.jpg")} style={styles.serviceImage} />
    <Text style={styles.serviceSubtitle}>Free Delivery at ₹49</Text>
  </TouchableOpacity>
</View>

<View style={styles.servicesContainer}>
  <TouchableOpacity onPress={() => navigation.navigate("Dineout")} style={styles.serviceBox}>
    <Text style={styles.serviceTitle}>Dineout</Text>
    <Image source={require("../../assets/dineout.png")} style={styles.serviceImage} />
    <Text style={styles.serviceSubtitle}>Save Up to 50%</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("Genie")} style={styles.serviceBox}>
    <Text style={styles.serviceTitle}>Genie</Text>
    <Image source={require("../../assets/genie.png")} style={styles.serviceImage} />
    <Text style={styles.serviceSubtitle}>Pickup & Drop</Text>
  </TouchableOpacity>
</View>

        {/* Footer Text */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Live It Up!</Text>
          <Text style={styles.footerTextSmall}>Crafted in Bengaluru, India</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorss.lightgray,
  },
  scrollContainer: {
    padding: 15,
  },
  searchbarbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: colorss.white,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  centeremoji: {
    alignItems: "center",
    marginVertical: 20,
  },
  emojipic: {
    height: 80,
    width: 90,
  },
  emojitext: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  emojitextsecond: {
    fontSize: 14,
    color: "gray",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  serviceBox: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colorss.white,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  serviceImage: {
    height: 150,
    width: 150,
   resizeMode: 'contain',
    marginVertical: 10,  
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,  
  },
  serviceSubtitle: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
  
  footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerTextSmall: {
    fontSize: 12,
    color: "gray",
  },
});