import React from "react";
import {View, Text, Pressable,Image} from "react-native";


const Menuitem= ({item}) => {
    // console.log(item)
    return(

    <View>
<Pressable>
    <View>
        <Image style={{aspectRatio:4/5,height:150,borderRadius:8}} soucre={{uri:item.image}}>

        </Image>
    </View>
</Pressable>
    </View>
    )
}

export default Menuitem;