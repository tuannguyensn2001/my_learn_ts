import axios, {AxiosInstance} from "axios";
import {refresh} from "../../services";

const myLearnAPI: AxiosInstance = axios.create();

myLearnAPI.defaults.baseURL = process.env.REACT_APP_BASE_BACKEND || 'http://my_learn_laravel.test/api';


const token = localStorage.getItem('token');


if (!!token) {
    myLearnAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

myLearnAPI.interceptors.response.use(response => {
    return response;
}, error => {
    const {status, data} = error.response;

    if (status !== 401 || data.message !== 'Token Expired') return Promise.reject(error);


    return refresh()
        .then(response => {
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            error.config.headers['Authorization'] = `Bearer ${token}`;
            return myLearnAPI.request(error.config);
        }).catch((err) => {

        })


})


export default myLearnAPI;