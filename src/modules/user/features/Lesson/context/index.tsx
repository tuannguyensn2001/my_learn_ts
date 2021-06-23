import React from "react";
import {ICourse} from "../../../../../models/ICourse";
import {ILesson} from "../../../../../models/ILesson";
import {ILessonComment} from "../repositories";


interface contentType {
    course: ICourse | null,
    lesson: ILessonComment | null
}


const LessonContext = React.createContext<contentType>({
    course: null,
    lesson: null,
});

export const LessonProvider = LessonContext.Provider;
export const LessonConsumer = LessonContext.Consumer;
export default LessonContext;