import {IUser} from "./IUser";

export declare interface IClassroom {
    name: string,
    is_private_code: boolean
    private_code: string,
    is_accept: boolean,
    tag_id: string,
    created_by: IUser
}