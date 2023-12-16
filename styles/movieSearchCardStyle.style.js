import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.secondary,
        display: "flex",
        flexDirection: "row",
        borderRadius: SIZES.medium,
        marginBottom: SIZES.medium,
    },

    // width is 67.5% of height
    poster: {
        height: 150,
        width: 101.25,
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: SIZES.xxLarge,
        marginRight: 135,
    },

    title: {
        color: COLORS.headingText,
        fontFamily: FONT.heading,
        fontSize: SIZES.xLarge,
        textAlign: "center",
    },
})

export default styles;