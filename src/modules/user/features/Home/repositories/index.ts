import {AxiosResponse} from "axios";
import {ICourse} from "../../../../../models/ICourse";
import {fetchCourses} from "../services";

export const getCourses = async (): Promise<ICourse[]> => {
    const response: AxiosResponse = await fetchCourses();

    return response.data.data.map((item: any) => {
        return {
            id: Number(item?.id),
            name: item?.name,
            slug: item?.slug,
            description: item?.description,
            level: item?.level,
            status: item?.status,
            price: Number(item?.price),
            created_at: item?.created_at,
            updated_at: item?.updated_at,
            tag: {
                name: item?.tag?.name,
                category: {
                    name: item?.tag?.category?.name,
                }
            },
            media: {
                source: item?.media?.source,
            },
            pivot: item?.pivot

        }
    })

}