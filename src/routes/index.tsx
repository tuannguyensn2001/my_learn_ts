import {RouteProps} from "react-router-dom";
import routesAuth from "../features/Auth/routes";
import routesHome from "../features/Home/routes";


const routes: RouteProps[] = [
    ...routesHome,
    ...routesAuth
]

export default routes;