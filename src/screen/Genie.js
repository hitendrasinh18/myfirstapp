import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Genie = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Location and User Section */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={24} color="#FF6F00" />
        <Text style={styles.locationText}>Meghaninagar, Ahmedabad, Gujarat, India</Text>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: "https://example.com/genie-banner.png" }} // Replace with your Genie Banner Image URL
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Send or pick up anything instantly!</Text>
      </View>

      {/* COD Notice */}
      <View style={styles.codNotice}>
        <Text style={styles.codText}>JUST IN: Now, pay at the drop location with COD</Text>
      </View>

      {/* Pickup and Drop Location */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Set pick up location</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.dropButton}>
        <Text style={styles.dropButtonText}>Set drop location</Text>
      </TouchableOpacity>

      {/* Offer Section */}
      <View style={styles.offerSection}>
        <Text style={styles.offerText}>🎉 25% off on your first order</Text>
        <Text style={styles.offerSubText}>Use code <Text style={{ fontWeight: "bold" }}>GENIEIT</Text> at checkout</Text>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>Things to keep in mind</Text>
        <Text style={styles.instructionText}>🚲 Items should fit on a two-wheeler</Text>
        <Text style={styles.instructionText}>📦 Avoid sending expensive or fragile items</Text>
        <Text style={styles.instructionText}>🚫 No alcohol, illegal, or restricted items</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  locationContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  bannerContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6F00",
  },
  codNotice: {
    padding: 12,
    backgroundColor: "#E0F7FA",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  codText: {
    color: "#00796B",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FF6F00",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropButton: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  dropButtonText: {
    color: "#757575",
    fontSize: 16,
  },
  offerSection: {
    backgroundColor: "#FFF3E0",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  offerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF6F00",
  },
  offerSubText: {
    marginTop: 5,
    color: "#333",
  },
  instructions: {
    backgroundColor: "#E0E0E0",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
  },
  instructionsTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  instructionText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Genie;
