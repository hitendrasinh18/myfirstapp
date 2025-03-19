import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons"; // For tab icons
import Dashboard from "../screen/Dashboard";
import Fooddelivery from "../screen/Fooddelivery";
import Instamart from "../screen/Instamart";
import Genie from "../screen/Genie";
import Dineout from "../screen/Dineout";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Food") {
            iconName = "cutlery";
          } else if (route.name === "Instamart") {
            iconName = "shopping-bag";
          } else if (route.name === "Genie") {
            iconName = "truck";
          } else if (route.name === "Dineout") {
            iconName = "coffee";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff5733",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5, height: 60 },
        headerShown: false, // Hide header for all screens
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Food" component={Fooddelivery} />
      <Tab.Screen name="Instamart" component={Instamart} />
      <Tab.Screen name="Genie" component={Genie} />
      <Tab.Screen name="Dineout" component={Dineout} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
