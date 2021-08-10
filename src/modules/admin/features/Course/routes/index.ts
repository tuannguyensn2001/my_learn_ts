import {RouteApp} from "../../../../../defines/Route";
import CourseCreate from "../pages/create";

const routesAdminCourse: RouteApp[] = [
    {
        path: '/admin/courses/create',
        component: CourseCreate
    }
]

export default routesAdminCourse;