import axios from "axios"

export const isAuth = !!localStorage.getItem("auth")

const network = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

network.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log("out:", config);
        return config;
    },
    function (error) {
        // Do something with request error
        console.log("out error:", error);

        return Promise.reject(error);
    }
);

network.interceptors.response.use(
    function (response) {
        console.log("in:", response);
        return response;
    },
    function (error) {
        console.log(error.response);
    }
)

export default network