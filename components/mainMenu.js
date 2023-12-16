import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { COLORS, icons } from "../constants"
import { useRouter } from "expo-router";

import style from "../styles/mainMenuStyle.style.js";
import styles from "../styles/mainMenuStyle.style.js";
import { useState } from "react";

export default function MainMenu({searchTerm, setSearchTerm}) {


    const router = useRouter();

    

    return(
        <View style={styles.container}>

            <Text style={styles.mainScreenText}>Find the  
                <Text style={{color: COLORS.accent}}> movies</Text> you are looking for</Text>

            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.textInput}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="Search..."
                    placeholderTextColor={COLORS.bodyText}
                />
                <TouchableOpacity style={styles.searchButton} onPress={() => {
                    if(searchTerm) router.push(`/search/${searchTerm}`);
                }}>
                    <Image source={icons.search} style={styles.searchIcon} tintColor={COLORS.bodyText} resizeMode="contain"/>
                </TouchableOpacity>
            </View>     

        </View>
    )
}