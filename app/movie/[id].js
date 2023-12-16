import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS, icons, images } from "../../constants";
import ScreenHeaderBtn from "../../components/ScreenHeaderButton";
import Rating from "../../components/rating";

import useFetch from "../../hooks/useFetch";
import styles from "../../styles/movieDetailsStyle.style";
import { useEffect, useState } from "react";

const MovieDetails = () => {

    const params = useLocalSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch({i: params.id, plot: "full"});
    
    const [imageUrl, setImageUrl] = useState(null);
    
    useEffect(() => {
        setImageUrl(data.Poster);
    }, [data]);
    

    return(
        <SafeAreaView style={{flex:1,backgroundColor: COLORS.primary}}>
            <Stack.Screen options={{
                headerTitle: "",
                headerStyle: { backgroundColor: COLORS.primary },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.arrowLeft} 
                        dimension="80%" 
                        handlePress={() => router.back()}
                    />
                ),
            }} 
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                <View style={styles.container}>

                <Image source={{uri: imageUrl}}
                    onError = {() => setImageUrl(Image.resolveAssetSource(images.defaultPoster).uri)} 
                    style={styles.poster}/>
                <Text style={styles.title}>{data.Title}</Text>
                <Text style={styles.genres}>{data.Genre}</Text>
                <View style={styles.horizontalLine} />
                <View style={styles.smallInfoContainer}>
                    <Text style={styles.smallInfoText}>{data.Runtime}</Text>
                    <Text style={styles.smallInfoText}>{data.Released}</Text>
                </View>
                <Text style={styles.plotText}>{data.Plot}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Rating name={"Meta-score"} rating={data.Metascore} />
                    <Rating name={"imbd"} rating={data.imdbRating} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails