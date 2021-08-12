import {AxiosResponse} from "axios";
import {IChapter} from "../../../../../models/IChapter";
import {ICourse} from "../../../../../models/ICourse";
import {fetchCourse} from "../services";

export const getCourse = async (slug: string): Promise<ICourse> => {
    const response: AxiosResponse = await fetchCourse(slug);
    const data: ICourse = response.data.data;

    return setIndexCourse(data);
}

export const setIndexCourse = (data: ICourse): ICourse => {
    const chapters: IChapter[] | undefined = data.chapters;

    let count: number = 0;

    if (chapters) {
        chapters.forEach(chapter => {
            chapter.lessons?.forEach(lesson => {
                lesson.order = ++count;
            })
        })
    }

    data.chapters = chapters;

    return data;
}