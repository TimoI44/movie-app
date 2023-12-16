import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";

import styles from "../styles/movieSearchCardStyle.style";
import { useState } from "react";
import { images } from "../constants"

export default function MovieSearchCard({ title, posterImgUrl, onPress }) {

    const [imgUrl, setImgUrl] = useState(posterImgUrl);

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{uri: imgUrl}} 
                onError = {() => setImgUrl(Image.resolveAssetSource(images.defaultPoster).uri)} 
                style={styles.poster}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={3}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}