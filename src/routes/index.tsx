import {RouteProps} from "react-router-dom";
import routesAdminModule from "../modules/admin/routes";
import routesUserModule from "../modules/user/routes";


const routes: RouteProps[] = [
    ...routesUserModule,
    ...routesAdminModule
]

export default routes;