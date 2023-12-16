import { Stack,useLocalSearchParams, useRouter } from "expo-router";
import { Text, SafeAreaView,View, ActivityIndicator, TouchableOpacity, Image, FlatList} from "react-native";
import { COLORS, icons } from "../../constants";
import ScreenHeaderButton from "../../components/ScreenHeaderButton";
import MovieSearchCard from "../../components/movieSearchCard.js";

import styles from "../../styles/searchMenuStyle.style";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";


const MovieSearch = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
 
    const [page, setPage] = useState(1);

    const {data, isLoading, error, refetch} = useFetch({s: params.id, page: page});

    const handlePagination = (direction) => {
        if(direction === "left" && page > 1) {
            setPage(page - 1);
            
            refetch();
        }
        if(direction === "right" && data.totalResults > page * 10) {
            setPage(page + 1);
            refetch();
        }
    }


    return(
        <SafeAreaView style={{flex:1,backgroundColor: COLORS.primary}}>
            <Stack.Screen options={{
                headerTitle: "",
                headerStyle: { backgroundColor: COLORS.primary },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderButton 
                        iconUrl={icons.arrowLeft} 
                        dimension="80%" 
                        handlePress={() => router.back()}
                    />
                ),
            }} 
            />

            <View style={styles.container}>
                <Text style={styles.searchText}>"{params.id}"</Text>
                <View style={styles.horizontalLine}/>
                <Text style={styles.results}>{data.totalResults} Results</Text>
                <FlatList
                    data={data.Search}
                    renderItem={({item}) => (
                        <MovieSearchCard onPress={() => router.push(`/movie/${item.imdbID}`)} title={item.Title} posterImgUrl={item.Poster}/>
                    )}
                    contentContainerStyle={{ paddingBottom: 150 }}
                    keyExtractor={(item) => item.imdbID}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View>
                            {isLoading ? (
                                <ActivityIndicator size="large" color={COLORS.accent} />
                            ) : error && (
                                <Text>Oops, something went wrong</Text>
                            )}
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.paginationContainer}>
                            <TouchableOpacity style={styles.arrowButton} onPress={() => handlePagination("left")}>
                                <Image
                                    source={icons.arrowLeft}
                                    style={styles.arrowIcon}
                                    resizeMode="contain"
                                    tintColor={COLORS.accent}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.pageText}>{page}</Text>
                            </View>
                            <TouchableOpacity style={styles.arrowButton} onPress={() => handlePagination("right")}>
                                <Image
                                    source={icons.arrowRight}
                                    style={styles.arrowIcon}
                                    resizeMode="contain"
                                    tintColor={COLORS.accent}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default MovieSearch;