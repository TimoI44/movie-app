import { Text, View } from "react-native"
import styles from "../styles/ratingStyle.style";

const Rating = ({rating, name}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.rating}>{rating}</Text>
            <View style={styles.horizontalLine}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Rating;