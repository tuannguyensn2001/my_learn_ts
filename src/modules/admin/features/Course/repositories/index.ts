import {AxiosResponse} from "axios";
import {fetchCourseCreate} from "../services";
import {GetCourseCreateType} from "../type";


export const getCourseCreate = async (): Promise<GetCourseCreateType> => {
    const response: AxiosResponse = await fetchCourseCreate();

    return response.data.data;
}