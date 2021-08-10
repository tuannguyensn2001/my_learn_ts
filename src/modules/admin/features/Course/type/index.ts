import {SelectOption} from "../../../../../defines/SelectOption";
import {Level} from "../../../../../type/Level";
import {Status} from "../../../../../type/Status";

export interface GetCourseCreateType {
    level: SelectOption<Level>[],
    status: SelectOption<Status>[],
    tags: {
        id: number,
        name: string,
    }[]
}

export interface CourseCreateForm {
    name: string,
    description: string,
    price: number,
    level: Level,
    media_id: number,
    tag_id: number,
    status: Status

}