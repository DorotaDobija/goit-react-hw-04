import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const accessKey = "xmqTqbaCjTDDJiiniJ_A-xn-ZojUGodyPpxV0ZkM3JQ"

export const FetchImages = async(word) => {
    const response =await axios.get(`search/photos?client_id=${accessKey}&query=${word}`)

    return response.data.results;
}
