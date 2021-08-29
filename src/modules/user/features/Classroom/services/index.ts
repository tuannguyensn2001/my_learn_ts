import {CreateClassroomFormData} from "../pages/create";
import myLearnAPI from "../../../../../config/network";

export const fetchCreateClassroom = (classroom: CreateClassroomFormData) => {
    return myLearnAPI.post('/v1/classrooms', classroom);
}
