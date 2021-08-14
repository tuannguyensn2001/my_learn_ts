import {RouteProps} from "react-router-dom";
import Classroom from "../index";
import React from 'react';

const routeClassroom: RouteProps[] = [
    {
        path: '/classroom',
        component: React.lazy(() => import('../index')),
        exact: true
    },
    {
        path: '/classroom/create',
        component: React.lazy(() => import('../pages/create'))
    }
]

export default routeClassroom;