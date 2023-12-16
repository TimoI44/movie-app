import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginLeft: SIZES.xxLarge,
        marginRight: SIZES.xxLarge,
        alignItems: "center",
    },

    poster: {
        height: 300,
        width: 202.5,   
    },

    title: {
        color: COLORS.headingText,
        fontFamily: FONT.heading,
        fontSize: SIZES.xxLarge,
        marginTop: SIZES.medium,
        textAlign: "center",
    },

    genres: {
        color: COLORS.bodyText,
        fontFamily: FONT.body,
        fontSize: SIZES.medium,
        marginTop: SIZES.small,
        marginBottom: SIZES.medium
    },

    horizontalLine: {
        borderWidth: 1,
        borderBottomColor: COLORS.bodyText,
        width: "93%",
        height: SIZES.medium,
        marginBottom: SIZES.medium,
    },

    smallInfoContainer: {
        display: "flex",
        flexDirection: "row",
        width: "93%",
        justifyContent: "space-between",
    },

    smallInfoText: {
        color: COLORS.bodyText,
        fontFamily: FONT.body,
        fontSize: SIZES.medium,
    },

    plotText: {
        color: COLORS.bodyText,
        fontFamily: FONT.body,
        fontSize: SIZES.medium,
        marginTop: SIZES.large,
        marginBottom: SIZES.medium,
        width: "93%",
    },

    ratingContainer: {
        marginLeft: SIZES.xxLarge,
        marginRight: SIZES.xxLarge,
        marginBottom: SIZES.xLarge,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    }
});

export default styles;