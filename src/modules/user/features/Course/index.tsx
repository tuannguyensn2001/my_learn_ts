import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {useParams} from 'react-router-dom';
import {getCourse} from "./repositories";
import Layout from "../../components/Layout";
import styled from 'styled-components';
import styles from './styles.module.scss';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {CgFormatSlash} from 'react-icons/cg'



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
        const route : any = $('.course-route')
        const video : any = $('.video')
        const chapters : any = $$('.chapter')
        const arrowUp : any = $$('.arrow-up')
        const arrowDown : any = $$('.arrow-down')

        // TAB UI
        //Default line style
        Object.assign(line.style, {
            left: sectionActive.offsetLeft + 'px',
            width: sectionActive.offsetWidth + 'px'
        })
        
        tabs.forEach((tab: any, index: any) => {
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
        // Set height of the block
        window.onload = function () {
            route.style.height = video.offsetHeight + 'px' 
        }
        window.onresize = function () {
            route.style.height = video.offsetHeight + 'px' 
        }
        // Show / hide lessons
        chapters.forEach ((chapter : any, index : any) => {
            chapter.onclick = () => {
                // Change arrow direction
                arrowDown[index]?.classList.toggle('hidden')
                arrowUp[index]?.classList.toggle('hidden')
                // Show / hide lessons
                let lessons : any = chapter.querySelectorAll('.lesson')
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
                    <button className="course-buy-btn hover:bg-red-600 bg-red-500 w-full py-4 text-2xl font-medium rounded-xl text-white">Buy This Course</button>
                </div>
            </div>
            <div className="body">
                <div className="tab-cover bg-white sticky top-14 z-10">
                    <div className="tab-ui flex bg-white justify-between mx-auto w-60 border-b-2 border-red-400 relative">
                        <a href="#class-info" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium active text-gray-900">Class Info</a>
                        <a href="#related" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium">Related</a>
                        <a href="#comments" className="sections w:1/3 py-4 font-normal cursor-pointer font-medium">Comments</a>
                        <div className="line h-2 bg-red-500 rounded absolute -bottom-1"></div>
                    </div>
                </div>
                <div id="class-info" className="class-info mx-auto w-4/5 pt-8">
                    <div className="class-course gt_sm:flex justify-between">
                        <div className="setVidWidth gt_sm:w-3/5">
                            <div className={styles["preview-vid"]}>
                                <iframe className="video absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/bhlMOw-RGZo"></iframe>
                            </div>
                        </div>
                        <div className="course-route gt_sm:w-2/5 gt_sm:ml-3 lt_md:mt-4">
                            <div className="route-body h-full border relative  rounded-md overflow-y-hidden overflow-y-scroll">
                                <div className="route-title text-center text-xl font-bold capitalize absolute -top-0 -inset-x-0">Lesson Plan</div>
                                <div className="chapter font-medium cursor-pointer bg-gray-50 mt-8 pl-4 border-b leading-8 relative">Chapter 1
                                    <IoIosArrowDown className="arrow-down absolute right-2 top-2"/>
                                    <IoIosArrowUp className="arrow-up hidden absolute right-2 top-2"/>
                                    <div className="lesson border-t pl-4 hidden">Lesson 1</div>
                                    <div className="lesson border-t pl-4 hidden">Lesson 2</div>
                                    <div className="lesson border-t pl-4 hidden">Lesson 3</div>
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
                    <div className="course-list overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gt_lg:grid-cols-4 gap-4 mt-4">
                        <div className="course-list-item cursor-pointer rounded-xl bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-56 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        <div className="course-list-item cursor-pointer rounded-xl bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-56 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        <div className="course-list-item cursor-pointer rounded-xl bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-56 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                        {/* There's an extra class below */}
                        <div className="course-list-item lg:hidden cursor-pointer rounded-xl bg-cover bg-no-repeat bg-course bg-center opacity-95">
                            <div className="list-item-name w-3/4 pt-56 text-3xl font-medium mx-auto text-center text-white">Responsive Programming</div>
                            <div className="separator w-6 h-1 mt-6 mx-auto bg-white"></div>
                            <div className="list-item-author pb-8 mt-2 text-lg text-center text-white">Author name</div>
                        </div>
                    </div>

                    <button className="show-all mx-auto mt-4 gt_md:px-8 lt_lg:w-full py-4 hover:bg-red-600 bg-red-500 cursor-pointer rounded-xl text-lg font-medium text-white">Show all courses</button>
                </div>

            </div>
                {/* Comments */}
                <div id="comments" className="comment mx-auto w-4/5 lt-lg:w-full mt-12">
                    <div className="comment-title text-2xl font-bold">Comments</div>
                    <div className="comment-block w-4/5 lt_lg:w-full">
                        <div className="write-comment flex border-b mt-4 pb-2">
                            <div className="profile-picture rounded-full w-12 h-12 lt_lg:w-10 lt_lg:h-10 overflow-hidden">
                                <img src="https://lh3.googleusercontent.com/proxy/kUDGKieDZIZ0Nbo-Vl_Q-D0qXFBkUHYDAbJtJ_DGv2eGGvNIzDnvUHOrjtfuiLGaV8n1ggeyubYDCIlSKqcyUh_6Oq-29209NLoEfOXcoVyh0EEKpwAUIQhaY_wh5cav1HLfMutCizJQQz-Soxc37PAAH9KTnvR4AQFaLIOLMAKfWM6aQ75QIAU" 
                                    alt="Avatar" />
                            </div>
                            <input className="input-comment pl-4 w-11/12 outline-none" type="text" placeholder="Add a public comment..." />
                        </div>
                        <div className="buttons flex float-right mt-2">
                            <button className="cancel mr-2 px-9 py-2 hover:opacity-80 bg-gray-400 uppercase font-medium text-white">Cancel</button>
                            <button className="submit px-6 py-2 hover:opacity-80 bg-blue-500 uppercase font-medium text-white">Comment</button>
                        </div>
                        <div className="other-comment mt-16 relative">
                            <div className="form-comment">
                                <div className="this-comment relative flex">
                                    <div className="profile-picture rounded-full w-12 h-12 lt_lg:w-10 lt_lg:h-10 overflow-hidden">
                                        <img src="https://lh3.googleusercontent.com/proxy/kUDGKieDZIZ0Nbo-Vl_Q-D0qXFBkUHYDAbJtJ_DGv2eGGvNIzDnvUHOrjtfuiLGaV8n1ggeyubYDCIlSKqcyUh_6Oq-29209NLoEfOXcoVyh0EEKpwAUIQhaY_wh5cav1HLfMutCizJQQz-Soxc37PAAH9KTnvR4AQFaLIOLMAKfWM6aQ75QIAU" 
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
                                                <img src="https://lh3.googleusercontent.com/proxy/kUDGKieDZIZ0Nbo-Vl_Q-D0qXFBkUHYDAbJtJ_DGv2eGGvNIzDnvUHOrjtfuiLGaV8n1ggeyubYDCIlSKqcyUh_6Oq-29209NLoEfOXcoVyh0EEKpwAUIQhaY_wh5cav1HLfMutCizJQQz-Soxc37PAAH9KTnvR4AQFaLIOLMAKfWM6aQ75QIAU" 
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