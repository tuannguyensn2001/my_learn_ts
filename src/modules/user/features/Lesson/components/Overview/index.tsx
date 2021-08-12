import {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import {Comment} from "../../../../../../defines/Comment";
import {ILesson} from "../../../../../../models/ILesson";
import LessonContext from "../../context";
import {ILessonComment} from "../../repositories";
import {fetchPostComment} from "../../services";
import InputComment from "../InputComment";
import {Comment as CommentProp} from '../../repositories';
import myLearnSocket from "../../../../../../config/network/socket";


const OverviewContent = styled.div`
  margin-top: 40px;
`


function Overview() {

    const {lesson}: { lesson: ILessonComment | null } = useContext(LessonContext);
    const [comments, setComments] = useState<CommentProp[] | []>([]);

    useEffect(() => {
        if (!Array.isArray(lesson?.comments)) return;

        setComments(lesson?.comments ?? []);

    }, [lesson?.comments]);

    useEffect(() => {

        return () => {

        }

    }, [])


    const submitComment = (comment: string) => {
        console.log('submit');
    }


    return (
        <div>
            <OverviewContent>
                <InputComment submit={submitComment}/>
            </OverviewContent>

            {comments?.map((item) => {
                return <p key={item.id}>{item.user.fullname}:{item.content}</p>
            })}


        </div>
    )
}

export default Overview;