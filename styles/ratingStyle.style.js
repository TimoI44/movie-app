import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "20%",
        alignItems: "center",
    },

    rating: {
        color: COLORS.headingText,
        fontFamily: FONT.heading,
        fontSize: SIZES.xxLarge,
        textAlign: "center",
    },

    horizontalLine: {
        borderWidth: 1,
        borderBottomColor: COLORS.bodyText,
        width: "90%",
        height: SIZES.medium,
        marginTop: "-15%",
        marginBottom: "4%"
    },

    name: {
        color: COLORS.bodyText,
        fontFamily: FONT.body,
        fontSize: SIZES.small*1.2,
        textAlign: "center",
    }
});

export default styles;