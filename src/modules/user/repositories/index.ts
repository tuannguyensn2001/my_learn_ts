import {ITag} from "../../../models/ITag";
import {Response} from "../../../defines/Response";
import {fetchTags} from "../services";
import {AxiosResponse} from "axios";

export const getTags = async (): Promise<ITag[]> => {
    const response: AxiosResponse<Response<ITag[]>> = await fetchTags();
    return response.data.data;
}