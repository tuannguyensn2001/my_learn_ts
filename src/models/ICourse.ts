import {IMedia} from "./IMedia";
import {ITag} from "./ITag";

export declare interface ICourse {
    id: number,
    name: string,
    slug: string,
    description: string,
    level: string,
    status: string,
    price: number,
    created_at: string,
    updated_at: string,
    tag?: ITag,
    media?: IMedia,
    pivot?: null
}