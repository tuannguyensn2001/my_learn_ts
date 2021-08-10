import {RouteProps} from "react-router-dom";
import Dashboard from "../features/Dashboard";
import routesAdminCourse from "../features/Course/routes";

const routesAdminModule: RouteProps[] = [
    {
        path: '/admin',
        component: Dashboard,
        exact: true
    },
    ...routesAdminCourse
];

console.log(routesAdminModule);

export default routesAdminModule;