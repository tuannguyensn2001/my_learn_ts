import {ICourse} from "./ICourse";
import {IProfile} from "./IProfile";

export declare interface IUser {
    id: number,
    name: string,
    email: string,
    course?: ICourse[],
    profile?: IProfile
}