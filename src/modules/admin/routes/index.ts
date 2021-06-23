import {RouteProps} from "react-router-dom";
import Dashboard from "../features/Dashboard";

const routesAdminModule: RouteProps[] = [
    {
        path: '/admin',
        component: Dashboard
    }
];

export default routesAdminModule;