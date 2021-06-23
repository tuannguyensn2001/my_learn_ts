import {RouteProps} from "react-router-dom";
import Home from "../index";

const routesHome: RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default routesHome;