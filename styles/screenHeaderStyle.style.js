import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImg: (dimension) => ({
        width: dimension,
        height: dimension,
    }),
});

export default styles;