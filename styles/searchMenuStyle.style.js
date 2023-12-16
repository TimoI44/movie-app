import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({

    container: {
        marginLeft: SIZES.xxLarge,
        marginRight: SIZES.xxLarge,
    },

    searchText: {
        color: COLORS.headingText,
        fontFamily: FONT.heading,
        fontSize: SIZES.xxLarge,
        marginTop: SIZES.medium,
    },

    horizontalLine: {
        borderWidth: 1,
        borderBottomColor: COLORS.bodyText,
        height: SIZES.medium,
        marginBottom: SIZES.medium,
    },

    results: {
        color: COLORS.bodyText,
        fontSize: SIZES.medium,
        fontFamily: FONT.body,
        textAlign: "right",
        marginBottom: SIZES.medium,
    },

    paginationContainer: {
        padding: SIZES.medium,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    arrowButton: {
        width: "30%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },

    arrowIcon: {
        height: "80%",
        width: "80%",
    },

    pageText: {
        fontFamily: FONT.heading,
        color: COLORS.accent,
        fontSize: SIZES.medium,
    }

});

export default styles;