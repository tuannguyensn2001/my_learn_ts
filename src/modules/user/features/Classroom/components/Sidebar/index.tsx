import {FiSettings} from "react-icons/all";
import {Link} from 'react-router-dom';
import {Tooltip} from "@chakra-ui/react";
import {BiWorld} from "react-icons/all";
import {BiUser} from "react-icons/all";

function Sidebar() {
    return (
        <div className={'mt-10 mr-6 grid grid-rows-2 gap-4 divide-y '}>

            <div className={'flex flex-col justify-between lt_md:flex-row lt_md:justify-between'}>
                <div className={'flex  justify-between'}>
                    <img className={'h-12 w-12 object-cover rounded-md'}
                         src="https://shub-storage-siujq.s3.ap-southeast-1.amazonaws.com/profile_images/44-01.jpg"
                         alt=""/>

                    <Tooltip hasArrow label={'Cài đặt lớp học'} aria-label="A tooltip">
                        <Link to={'#'}
                              className={'flex text-lg p-3 rounded-full hover:bg-gray-100 flex-col justify-center'}>
                            <FiSettings/>
                        </Link>
                    </Tooltip>
                </div>

                <div className="text-md font-semibold  lt_md:flex lt_md:flex-col lt_md:justify-center ">
                    <h1>Số học - 10</h1>
                </div>

                <div className="flex">
                    <div className={'text-lg'}>
                        <BiWorld/>
                    </div>
                    <p className={'text-xs ml-1'}>Mã lớp : ABC</p>
                </div>
            </div>

            <div >
                <ul className={'mt-5'}>
                    {[1, 2, 3].map(item => (
                        <li key={item} className={'flex transition rounded-xl hover:bg-gray-200 cursor-pointer p-1'}>
                            <div className={'text-md flex flex-col justify-center'}>
                                <BiUser/>

                            </div>
                            <div className={'ml-5'}>
                                <p>Bảng tin</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;