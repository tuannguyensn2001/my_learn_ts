import axios, {AxiosInstance} from "axios";


const myLearnAPI: AxiosInstance = axios.create();

myLearnAPI.defaults.baseURL = process.env.REACT_APP_BASE_BACKEND || 'http://example-app.test/api';


const token = localStorage.getItem('token');

if (!!token) {
    myLearnAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export default myLearnAPI;