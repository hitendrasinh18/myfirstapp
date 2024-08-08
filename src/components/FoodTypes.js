import React from "react";
import { View, Text, ScrollView,Image } from "react-native";


const FoodTypes = () => {

    const types = [
        {
            id: "0",
            
            name: "Biriyani"
        },
        {
            id: "1",
            Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tasteofhome.com%2Frecipes%2Fcherry-delight-dessert%2F&psig=AOvVaw3eM5tS5FtS6xQgWJQBIULi&ust=1723186821361000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCJiInaTp5IcDFQAAAAAdAAAAABAE",
            name: "Dessert"
        },
        {
            id: "2",
           Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fterrigalchargrill.com%2Fproducts%2Faussie-beef-buger&psig=AOvVaw0Fx4Xwx-qEHAwaUD6-flw5&ust=1723186933317000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPjnpNnp5IcDFQAAAAAdAAAAABAE",   name: "Burger"

        }, {
            id: "3",
Image:"https://www.google.com/imgres?q=salad&imgurl=https%3A%2F%2Fwww.foodandwine.com%2Fthmb%2FIuZPWAXBp4YaT9hn1YLHhuijT3k%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FFAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg&imgrefurl=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fbig-italian-salad&docid=NQigvZe3V3hUeM&tbnid=G_BL54qP7mo18M&vet=12ahUKEwiU9KP_6eSHAxXvcGwGHXZRE-gQM3oECGAQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiU9KP_6eSHAxXvcGwGHXZRE-gQM3oECGAQAA",
name:"Salad"

        },
        {
            id:"4",
            Image:"https://www.google.com/imgres?q=sandwich&imgurl=https%3A%2F%2Fwww.southernliving.com%2Fthmb%2FUW4kKKL-_M3WgP7pkL6Pb6lwcgM%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FHam_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg&imgrefurl=https%3A%2F%2Fwww.southernliving.com%2Fham-sandwich-7971753&docid=uRo_Ch4MyfRQ6M&tbnid=0XykCd5yWUXzQM&vet=12ahUKEwiH-_-c6uSHAxU0S2cHHYwCG9UQM3oECBcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiH-_-c6uSHAxU0S2cHHYwCG9UQM3oECBcQAA",
            name:"Sandwich"
        }

    ]


    return (

        <View>
            <ScrollView>
                {types.map((item,index) => (
                    <View key={index}>
                        <Image source={{uri:item.Image}}styles={{width:60,height:60,borderRedius:30}}/>
                   <Text>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}

export default FoodTypes;