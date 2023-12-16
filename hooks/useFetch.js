import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=[yourapikeyhere]&`,// replace with your api key from http://www.omdbapi.com
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
         
        try {
            setData([]); 
            const response = await axios.request(options); 
            setData(response.data);
            setIsLoading(false);
        } catch(err) {
            setError(err);
            alert("An error occured: " + err);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, [JSON.stringify(query)]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch}
}

export default useFetch;