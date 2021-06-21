import {IMedia} from "./IMedia";

export declare interface IProfile {
    id: number,
    user_id?: number,
    fullname: string,
    media_id?: number,
    address: string,
    created_at: string,
    updated_at: string,
    media?: IMedia,

}