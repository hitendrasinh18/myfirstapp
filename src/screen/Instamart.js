import React from "react";
import { View, StyleSheet, TextInput, SafeAreaView, Text, Image, FlatList, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const DATA = [
    { id: '1', title: 'Fresh Vegetables', image: require('../../assets/ginger.jpg') },
    { id: '2', title: 'Dairy Products', image: require('../../assets/carrot.jpg') },
    { id: '3', title: 'Snacks & Beverages', image: require('../../assets/hideseek.jpg') },
    { id: '4', title: 'Bakery Items', image: require('../../assets/carrot.jpg') },
    { id: '5', title: 'Fruits', image: require('../../assets/carrot.jpg') }
];

const Instamart = () => {
    const renderHorizontalItem = ({ item }) => (
        <View style={styles.horizontalItemContainer}>
            <Image source={item.image} style={styles.horizontalItemImage} />
            <Text style={styles.horizontalItemText}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.searchContainer}>
                    <TextInput 
                        placeholder="Search for Restaurant, items, or more" 
                        style={styles.searchInput} 
                    />
                    <AntDesign name="search1" size={24} color="black" />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Hot Deals</Text>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderHorizontalItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalFlatListContainer}
                />

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Best Sellers</Text>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderHorizontalItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalFlatListContainer}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default Instamart;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: "#C0C0C0",
        borderRadius: 7,
    },
    searchInput: {
        flex: 1,
    },
    sectionHeader: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    horizontalFlatListContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    horizontalItemContainer: {
        margin: 10,
        alignItems: 'center',
    },
    horizontalItemImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    horizontalItemText: {
        marginTop: 5,
        fontSize: 14,
    }
});
