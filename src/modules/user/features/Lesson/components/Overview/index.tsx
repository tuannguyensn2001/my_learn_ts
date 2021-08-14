import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import LessonContext from "../../context";
import {Comment as CommentProp, ILessonComment} from "../../repositories";
import InputComment from "../InputComment";
import {io, Socket} from 'socket.io-client';


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
        if (!lesson) return;

        const socket = io('http://localhost:5000', {
            auth: {
                token: localStorage.getItem('token')
            }
        });

        // socket.on('connect', () => {
        //
        // });

        socket.emit('join-room-lesson', {
            lesson_id: lesson?.id
        });


        return () => {
            // socket.emit('disconnect');
        }
    }, [lesson])


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