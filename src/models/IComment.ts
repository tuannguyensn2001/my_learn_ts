import {Comment} from "../defines/Comment";

export declare interface IComment {
    id: number,
    content: string,
    commentable_id: number,
    commentable_type?: Comment
}