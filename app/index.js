import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter} from "expo-router";

import { COLORS } from "../constants";
import MainMenu from "../components/mainMenu";
import { useState } from "react";


export default function index() {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary
         }}>
            <Stack.Screen options={{
                headerTitle: "",
                headerStyle: { backgroundColor: COLORS.primary },
                headerShadowVisible: false,
            }} />

            <MainMenu searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        </SafeAreaView>
    )
}