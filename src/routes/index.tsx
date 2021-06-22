import {RouteProps} from "react-router-dom";
import routesAuth from "../features/Auth/routes";
import routesCart from "../features/Cart/routes";
import routesCourse from "../features/Course/routes";
import routesHome from "../features/Home/routes";
import routeLesson from "../features/Lesson/Route";
import routeClassroom from "../features/Classroom/routes";


const routes: RouteProps[] = [
    ...routesHome,
    ...routesAuth,
    ...routesCourse,
    ...routesCart,
    ...routeLesson,
    ...routeClassroom
]

export default routes;