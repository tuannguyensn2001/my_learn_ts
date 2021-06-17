import {ICourse} from "./ICourse";

export declare interface IUser {
    id: number,
    name: string,
    email: string,
    course?: ICourse[]
}