import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginLeft: SIZES.xxLarge,
        marginRight: SIZES.xxLarge,
    },

    searchWrapper: {
        height: "30%",
        display: "flex",
        flexDirection: "row",
    },

    mainScreenText: {
        fontFamily: FONT.heading,
        fontSize: SIZES.xxLarge,
        color: COLORS.headingText,
        paddingBottom: SIZES.large,
    },

    textInput: {
        width: "80%",
        height: "30%",
        marginRight: SIZES.small,

        fontFamily: FONT.body,

        padding: SIZES.large,
        borderRadius: SIZES.medium,

        color: COLORS.bodyText,
        backgroundColor: COLORS.secondary,
    },

    searchButton: {
        width: "20%",
        height: "30%",
        backgroundColor: COLORS.accent,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
    },

    searchIcon: {
        width: "70%",
        height: "70%",
    }

})



export default styles;