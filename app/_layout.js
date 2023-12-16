import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter: require("../assets/fonts/Inter-Light.ttf"),
        Arial: require("../assets/fonts/Arial.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);


    if(!fontsLoaded) return null

    return <Stack onLayout={onLayoutRootView}/>
}