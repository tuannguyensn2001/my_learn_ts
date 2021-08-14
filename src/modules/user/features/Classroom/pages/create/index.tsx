import Layout from "../../../../components/Layout";
import {FormControl, FormLabel, Input, Switch} from "@chakra-ui/react"
import {useQuery} from "react-query";
import {ITag} from "../../../../../../models/ITag";
import {getTags} from "../../../../repositories";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

interface CreateClassroomFormData {
    name: string,
    is_private_code: boolean
    private_code: string,
    is_accept: boolean
}


function CreateClassroom() {

    const [tag, setTag] = useState<string>('');

    const {data: tags} = useQuery<ITag[]>('tags', async () => {
        return await getTags();
    });

    const pickTag = (choice: string) => setTag(choice);

    const {register, handleSubmit} = useForm<CreateClassroomFormData>();




    return (
        <Layout>
            <div className="container ">
                <div className="pt-10 mx-auto sm:px-0 px-20 ">
                    <div className=" flex flex-wrap">
                        <div className="sm:order-2  w-2/3 sm:w-full">
                            <div className={'px-20'}>
                                <div>
                                    <FormControl id="email">
                                        <FormLabel>Tên lớp học</FormLabel>
                                        <Input {...register('name')} type="text"/>
                                    </FormControl>
                                </div>
                                <div className={'mt-7'}>
                                    <FormControl display="flex" justifyContent={'space-between'}>
                                        <FormLabel htmlFor="private_code" mb="0">
                                            Mã bảo vệ
                                        </FormLabel>
                                        <Switch {...register('is_private_code')} id="private_code"/>
                                    </FormControl>
                                    <Input {...register('private_code')} className={'mt-3'}/>
                                </div>
                                <div className={'mt-7'}>
                                    <FormControl display="flex" justifyContent={'space-between'}>
                                        <FormLabel htmlFor="accept" mb="0">
                                            Phê duyệt học sinh
                                        </FormLabel>
                                        <Switch {...register('is_accept')} id="accept"/>
                                    </FormControl>
                                    <p>
                                        Phê duyệt học sinh tránh tình trạng người lạ vào lớp học mà không có sự cho phép
                                        của bạn
                                    </p>
                                </div>

                                <div className="mt-7">
                                    <FormLabel>
                                        Tên lớp học
                                    </FormLabel>

                                    <div className={'flex flex-wrap'}>
                                        {tags?.map(item => (
                                            <button
                                                onClick={() => pickTag(item.id ?? '')}
                                                className={`bg-blue-400 transition duration-0.5 hover:bg-blue-700 text-white rounded-full mr-5 mt-5 p-2 ${item.id === tag ? 'bg-blue-700 ' : ''}  `}
                                                key={item.id}>
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="sm:order-1 sm:w-full w-1/3 ">
                            <div className={'shadow rounded p-10'}>
                                <h1 className={'font-semibold font-lg'}>Các bước đã thực hiện</h1>

                                <ul>
                                    {[1, 2].map(item => (
                                        <li key={item} className={'flex mt-5'}>

                                            <div>
                                                <input
                                                    id={'name'}
                                                    type="checkbox"
                                                    className={'form-checkbox  border-2 text-green-500'}/>
                                            </div>
                                            <p
                                                className={'ml-5'}
                                            >Đặt tên lớp học</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={'w-full disabled  bg-blue-500 text-white font-medium h-10 rounded hover:bg-blue-700 mt-10'}
                            >
                                Tạo mới
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateClassroom;