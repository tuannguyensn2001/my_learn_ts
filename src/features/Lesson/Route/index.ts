import {RouteProps} from "react-router-dom";
import Lesson from "../index";


const routeLesson: RouteProps[] = [
    {
        path: '/course/:course/learn/:lesson',
        component: Lesson
    }
];

export default routeLesson;