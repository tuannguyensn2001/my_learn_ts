import {RouteProps} from "react-router-dom";
import Profile from "../index";


const routesProfile: RouteProps[] = [
    {
        path: '/profile',
        component: Profile,
        exact: true
    }
]

export default routesProfile;