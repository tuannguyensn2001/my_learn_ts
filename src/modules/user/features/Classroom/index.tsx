import Layout from "../../components/Layout";
import styles from './style.module.scss';
import {AiFillEyeInvisible} from "react-icons/all";
import {Button, Input, Select} from "@chakra-ui/react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {BsThreeDots} from "react-icons/all";
import {MouseEventHandler} from "react";
import ClassroomItem from "./components/ClassroomItem";


function Classroom() {


    return (
        <Layout>
            <div className={`container h-full `}>
                <div
                    className="grid grid-cols-12  gap-4 2xl:divide-x  xl:divide-x  lg:divide-x  h-full">
                    <div className="col-span-3 md:hidden sm:hidden -sm:hidden ">
                        <ul className={'w-full  '}>
                            {[1, 2, 3].map((item) => (
                                <li key={item} className={'flex  w-full mb-4'}>
                                    <div className={'flex  w-4/5'}>
                                        <div className={'flex justify-center flex-col w-1/5'}>
                                            <div className={'flex justify-center'}>
                                                <AiFillEyeInvisible size={25} className='fill-blue-600'/>
                                            </div>
                                        </div>
                                        <div className={'w-4/5 ml-5'}>
                                            <h4 className={'font-semibold text-blue-600'}>Bai tap da tao</h4>
                                            <p className={'text-sm'}>Tổng số bài tập bạn đã tạo trên toàn hệ thống</p>
                                        </div>
                                    </div>
                                    <div className={'w-1/5 flex justify-end'}>
                                        <div className={'flex justify-center flex-col'}>
                                            0
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-9 md:col-span-full sm:col-span-full -sm:col-span-full ">
                        <div className={'sm:ml-0  ml-10 mt-10'}>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6 sm:col-span-full ">
                                    <label>
                                        <Input/>

                                    </label>
                                </div>
                                <div className="col-span-2 sm:col-span-4">
                                    <Select>
                                        <option value="">Tìm kiếm theo tên</option>
                                        <option value="">Tìm kiếm theo tên</option>
                                    </Select>
                                </div>
                                <div className="col-span-2 sm:col-span-4">
                                    <Select>
                                        <option>A-Z</option>
                                        <option>A-Z</option>
                                    </Select>
                                </div>
                                <div className="col-span-2  sm:col-span-4">

                                    <Link
                                        to={'/classroom/create'}
                                    >
                                        <button
                                            className={'w-full bg-blue-500 hover:bg-blue-700 p-1 pl-3 pr-3 text-white font-semibold rounded  h-full'}>
                                            Tạo mới
                                        </button>
                                    </Link>

                                </div>
                            </div>

                            <div className={'flex justify-between mt-5'}>
                                <p className={'font-medium text-gray-500'}>Danh sách lớp học của bạn</p>
                                <Link className={'text-blue-500 font-medium sm:hidden'} to={'#'}>Xem danh sách các lớp
                                    đã ẩn</Link>
                            </div>

                            <div className={'mt-5'}>
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 ">
                                    {[1, 2].map(item => (
                                        <ClassroomItem key={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </Layout>
    )
}

export default Classroom;