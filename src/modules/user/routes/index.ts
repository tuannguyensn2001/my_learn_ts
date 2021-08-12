import {RouteProps} from "react-router-dom";
import routesHome from "../features/Home/routes";
import routesAuth from "../features/Auth/routes";
import routesCourse from "../features/Course/routes";
import routesCart from "../features/Cart/routes";
import routeLesson from "../features/Lesson/Route";
import routeClassroom from "../features/Classroom/routes";
import routesProfile from "../features/Profile/routes";

const routesUserModule: RouteProps[] = [
    ...routesHome,
    ...routesAuth,
    ...routesCourse,
    ...routesCart,
    ...routeLesson,
    ...routeClassroom,
    ...routesProfile
]

export default routesUserModule;