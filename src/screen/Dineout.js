import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dineout = () => {
  const categories = [
    { name: "Buffet", image: require('../../assets/ginger.jpg') },
    { name: "Cakes & Bakes", image: require('../../assets/ginger.jpg') },
    { name: "Quick Bites", image: require('../../assets/ginger.jpg') },
  ];

  const restaurants = [
    { name: "China House - Hyatt Regency", location: "Ashram Road, Ahmedabad", rating: 4.5 },
    { name: "Mrit Maudliya", location: "SG Highway, Ahmedabad", rating: 4.2 },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity style={styles.restaurantItem}>
      <View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantLocation}>{item.location}</Text>
      </View>
      <Text style={styles.restaurantRating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={24} color="#757575" />
        <Text style={styles.searchText}>Search for cuisine</Text>
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>What's on your mind?</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          horizontal
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Featured Restaurants */}
      <View style={styles.restaurantContainer}>
        <Text style={styles.sectionTitle}>Where everyone's dining</Text>
        <FlatList
          data={restaurants}
          renderItem={renderRestaurant}
          keyExtractor={(item) => item.name}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  searchBar: {
    flexDirection: "row",
    padding: 12,
    margin: 15,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    alignItems: "center",
  },
  searchText: {
    marginLeft: 10,
    color: "#757575",
    fontSize: 16,
  },
  categoryContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  restaurantContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  restaurantItem: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantLocation: {
    color: "#757575",
    fontSize: 14,
    marginTop: 3,
  },
  restaurantRating: {
    color: "#FF6F00",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Dineout;
