import axios from "axios";

function createApi() {
    return axios.create({
        baseURL: "https://api.github.com/users",
        timeout: 8000,
    })
}

export const api = createApi();