import axios from "axios";

const URL = "https://api.coinmarketcap.com/v2/ticker/?limit=10";

export default {
    search: function () {
        console.log("searching with API")
        return axios.get(URL)
    },
    getUsers: function(){
        console.log("in the API file")
        return axios.get("/api/users")
    }
};