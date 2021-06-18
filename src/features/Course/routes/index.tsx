import {RouteProps} from "react-router-dom";
import CourseDetail from "../index";

const routesCourse: RouteProps[] = [
    {
        path: '/course/:course',
        component: CourseDetail,
    }
]

export default routesCourse;