import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {useParams} from 'react-router-dom';
import {getCourse} from "./repositories";
import Layout from "../../components/Layout";
import styled from 'styled-components';
import styles from './styles.module.scss';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {CgFormatSlash} from 'react-icons/cg';
import {BsPlay} from 'react-icons/bs';



function CourseDetail() {

    const {course}: { course: string } = useParams();

    const {data: currentCourse} = useQuery(['course', course], async () => {
        return await getCourse(course);
    });

    useEffect(() => {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const tabs : any = $$('.sections')
        const line : any = $('.line')
        const sectionActive : any = $('.sections.active')
        const chapters : any = $$('.chapter-name')
        const arrowUp : any = $$('.arrow-up')
        const arrowDown : any = $$('.arrow-down')

        // TAB UI
        //Default line style
        Object.assign(line.style, {
            left: sectionActive.offsetLeft + 'px',
            width: sectionActive.offsetWidth + 'px'
        })
        
        tabs.forEach((tab: any) => {
            tab.onclick = function () {
                //Styling line onclick
                Object.assign(line.style, {
                    left: this.offsetLeft + 'px',
                    width: this.offsetWidth + 'px',
                })
                //Add or remove class active
                $('.sections.text-gray-900')?.classList.remove('text-gray-900')
                $('.sections.active')?.classList.remove('active')
                this.classList.add('text-gray-900')
                this.classList.add('active')
            }
        });


        // ROUTE PLAN
        chapters.forEach ((chapter : any, index : any) => {
            chapter.onclick = () => {
                // Change arrow direction
                arrowDown[index]?.classList.toggle('hidden')
                arrowUp[index]?.classList.toggle('hidden')
                // Show / hide lessons
                let lessons : any = $$('.chapter')[index].querySelectorAll('.lesson')
                lessons.forEach ((lesson : any) => {
                    lesson?.classList.toggle('hidden')
                })
            }
        })

    },[]);

    


    return (
        <Layout>
            <div className="header flex items-center border-t border-gray-500 bg-nav-color text-white text-lg font-semibold px-6 py-4">
                This is the course link
                <CgFormatSlash className={styles["link-sep"]}/>
            </div>
            <div className="course-image bg-cover bg-no-repeat bg-course w-full bg-center opacity-95">
                <div className="course-header mx-auto lt_lg:w-4/5 gt_md:w-2/5 lt_lg:pt-36 gt_md:pt-56 pb-12 text-center">
                    <div className="course-name lt_lg:text-4xl gt_md:text-4xl font-bold text-white mb-8 uppercase">Javascript Programing</div>
                    <div className="course-author text-2xl text-white mb-3 capitalize">Author Name</div>
                    <button className="course-buy-btn hover:bg-red-700 bg-red-600 lt_md:w-full px-8 py-2 text-xl font-medium rounded text-white">Buy This Course</button>
                </div>
            </div>
            <div className="body">
                <div className="tab-cover bg-white sticky top-14 z-10">
                    <div className="tab-ui flex bg-white justify-between mx-auto w-60 border-b border-red-300 relative">
                        <a href="#class-info" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium active text-gray-900">Class Info</a>
                        <a href="#related" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium">Related</a>
                        <a href="#comments" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium">Comments</a>
                        <div className="line h-1 bg-red-400 rounded-t absolute bottom-0"></div>
                    </div>
                </div>
                <div id="class-info" className="class-info mx-auto w-4/5 pt-8">
                    <div className="course-route gt_md:w-3/5">
                        <div className="route-title text-2xl font-bold capitalize mb-4">Lesson Plan</div>
                        <div className="route-body h-full border border-b-0 rounded">
                            {/* A lesson */}
                            <div className="chapter border-b select-none cursor-pointer bg-gray-100 relative">
                                <div className="chapter-name font-medium py-2 ml-12">Chapter 1</div>
                                <IoIosArrowDown className="arrow-down absolute left-4 top-3"/>
                                <IoIosArrowUp className="arrow-up hidden absolute left-4 top-3"/>
                                <div className="lessons bg-white">
                                    <div className="lesson hover:bg-gray-50 relative border-t flex items-center pl-6 py-2 hidden">
                                        <BsPlay className="mr-6"/>Lesson 1<div className="time absolute right-4">69:69</div>    
                                    </div>
                                    <div className="lesson hover:bg-gray-50 relative border-t flex items-center pl-6 py-2 hidden">
                                        <BsPlay className="mr-6"/>Lesson 2<div className="time absolute right-4">69:69</div>    
                                    </div>
                                    <div className="lesson hover:bg-gray-50 relative border-t flex items-center pl-6 py-2 hidden">
                                        <BsPlay className="mr-6"/>Lesson 3<div className="time absolute right-4">69:69</div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-des mt-4 gt_sm:w-full gt_md:w-3/5 lt_md:mt-4">
                        <div className="des text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore quas error ut nemo rerum necessitatibus cumque assumenda reprehenderit, inventore laborum ipsum vero sunt repellendus incidunt vel nobis expedita odio.</div>
                        <div className="total font-medium flex mt-2">
                            <div className="lessons">69 video lessons</div>
                            <div className="hours text-gray-500 ml-2">(69 hours)</div>
                        </div>
                    </div>
                </div>
                <div id="related" className="other-course flex flex-col mx-auto w-4/5 pt-8">
                    <div className="other-title font-bold text-2xl">Explore other classes</div>
                    {/* Only use 4 course-list, if you want to use more, install 'carousel' library */}
                    <div className="course-list overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gt_lg:grid-cols-4 gap-6 mt-4">
                        <div className="course-list-item cursor-pointer rounded bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-24 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        <div className="course-list-item cursor-pointer rounded bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-24 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        <div className="course-list-item cursor-pointer rounded bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-24 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        {/* There's an extra class below */}
                        <div className="course-list-item lg:hidden cursor-pointer rounded bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-24 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                    </div>

                    <button className="show-all mx-auto mt-4 px-4 lt_md:w-full py-2 hover:bg-red-600 bg-red-500 cursor-pointer rounded font-medium text-white">Show all courses</button>
                </div>

            </div>
                {/* Comments */}
                <div id="comments" className="comment mx-auto w-4/5 lt-lg:w-full mt-12">
                    <div className="comment-title text-2xl font-bold">Comments</div>
                    <div className="comment-block w-4/5 lt_lg:w-full">
                        <div className="write-comment flex border-b mt-4 pb-2">
                            <div className="profile-picture rounded-full w-12 h-12 lt_lg:w-10 lt_lg:h-10 overflow-hidden">
                                <img src="https://i.stack.imgur.com/dr5qp.jpg" 
                                    alt="Avatar" />
                            </div>
                            <input className="input-comment pl-4 w-11/12 outline-none" type="text" placeholder="Add a public comment..." />
                        </div>
                        <div className="buttons flex float-right mt-2">
                            <button className="cancel mr-2 rounded px-9 py-2 hover:opacity-80 bg-gray-400 uppercase font-medium text-white">Cancel</button>
                            <button className="submit px-6 rounded py-2 hover:opacity-80 bg-blue-500 uppercase font-medium text-white">Comment</button>
                        </div>
                        <div className="other-comment mt-16 relative">
                            <div className="form-comment">
                                <div className="this-comment relative flex">
                                    <div className="profile-picture rounded-full w-12 h-12 lt_lg:w-10 lt_lg:h-10 overflow-hidden">
                                        <img src="https://i.stack.imgur.com/dr5qp.jpg" 
                                            alt="Avatar" />
                                    </div>
                                    <div className="content-comment ml-4">
                                        <div className="user-name mt-1 text-xs text-gray-400">
                                            User Name
                                        </div>
                                        <div className="content font-medium">
                                            Some comments
                                        </div>
                                    </div>
                                    <button className="reply absolute left-16 -bottom-8 px-4 hover:opacity-80 uppercase text-gray-400 text-base font-medium">Reply</button>
                                </div>
                                {/* Reply, add form-comment in if true */}
                                <div className="reply-comment absolute -bottom-24 left-16 lt_lg:left-8">
                                    
                                    <div className="form-comment">
                                        <div className="this-comment relative flex">
                                            <div className="profile-picture rounded-full w-12 h-12 lt_lg:w-10 lt_lg:h-10 overflow-hidden">
                                                <img src="https://i.stack.imgur.com/dr5qp.jpg" 
                                                    alt="Avatar" />
                                            </div>
                                            <div className="content-comment ml-4">
                                                <div className="user-name mt-1 text-xs text-gray-400">
                                                    User Name
                                                </div>
                                                <div className="content font-medium">
                                                    Some comments
                                                </div>
                                            </div>
                                            <button className="reply absolute left-16 -bottom-8 px-4 hover:opacity-80 uppercase text-gray-400 text-base font-medium">Reply</button>
                                        </div>
                                        {/* Reply, add form-comment in if true */}
                                        <div className="reply-comment absolute -bottom-24 left-16 lt_lg:left-8">
                                            
                                            

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default CourseDetail;