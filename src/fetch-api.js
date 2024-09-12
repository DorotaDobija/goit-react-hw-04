import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const accessKey = "xmqTqbaCjTDDJiiniJ_A-xn-ZojUGodyPpxV0ZkM3JQ"

export const FetchImages = async(word, page = 1) => {
    const response =await axios.get(`search/photos?client_id=${accessKey}&per_page=12&page=${page}&query=${word}`)

    return response.data.results;
}
