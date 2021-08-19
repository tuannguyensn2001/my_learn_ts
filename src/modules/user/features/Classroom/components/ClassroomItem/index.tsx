import {Link} from "react-router-dom";
import {BsThreeDots} from "react-icons/all";
import {SyntheticEvent} from "react";
import styles from './style.module.scss'

function ClassroomItem() {


    const handleOnClick = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <Link
            to={'/classroom/123'}
            className={'border transition duration-100 ease-in-out rounded-md border-gray-200 p-5 flex  justify-between hover:bg-gray-100 hover:cursor-pointer'}
        >
            <div className={'flex'}>
                <img
                    className={'h-20 w-20 object-cover rounded-xl'}
                    src="https://shub-storage-siujq.s3.ap-southeast-1.amazonaws.com/profile_images/44-01.jpg"
                    alt=""/>
                <div className={'ml-5 sm:ml-10 flex flex-col justify-evenly'}>
                    <p>Số học</p>
                    <p>Mã lớp</p>
                </div>
            </div>
            <div className={'flex justify-center flex-col sm:hidden '}>
                <div
                    className={styles.more}>
                    <BsThreeDots/>
                    <div className={styles.more_item}>
                        <ul className={' shadow-xl'}>
                            {[1, 2].map(item => (
                                <li key={item} onClick={handleOnClick}
                                    className={'block flex flex-col justify-center h-10 pr-6 pl-6 hover:bg-gray-200'}>
                                    <p>Vao lop</p>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default ClassroomItem;