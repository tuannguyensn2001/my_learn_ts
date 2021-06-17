import {RouteProps} from "react-router-dom";
import Login from "../pages/Login";

const routesAuth: RouteProps[] = [
    {
        path: '/login',
        component: Login
    }
]

export default routesAuth;