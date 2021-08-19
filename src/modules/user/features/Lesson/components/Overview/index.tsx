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
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        if (!Array.isArray(lesson?.comments)) return;

        setComments(lesson?.comments ?? []);

    }, [lesson?.comments]);

    useEffect(() => {
        setSocket(io('http://localhost:5000', {
            auth: {
                token: Math.random()
            }
        }))
    }, []);


    useEffect(() => {
        if (!lesson) return;
        if (!socket) return;

        // socket.emit('join-room-lesson', {
        //     lesson_id: lesson?.id
        // });
        //
        // socket.on(`join-success`, data => console.log(data));


        return () => {
            // socket.emit('disconnect');
        }
    }, [lesson, socket]);


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