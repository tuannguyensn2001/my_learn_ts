import {GoSearch} from 'react-icons/go';
import {AiOutlineDelete} from 'react-icons/ai'
import styles from './styles.module.scss';

function Members() {
    return (
        <div className="pt-4 pb-96 bg-white">
            <div className="pl-4 border-b font-medium pb-4">Thành viên lớp học (0 học sinh)</div>
            <div className="px-4 mt-4">
                <div className="flex items-center relative">
                    <input className="border-2 rounded-md px-4 py-3 w-full outline-none hover:border-gray-400 focus:border-blue-400" type="text" placeholder="Nhập và ấn Enter để tìm kiếm" />
                    <button className="bg-white p-3 flex items-center absolute right-1 text-blue-400 font-medium">
                        <GoSearch className={styles["search-icon"]}/>
                        Tìm kiếm
                    </button>
                </div>
                <div className="w-full mt-8">
                    <table className="w-full text-left">
                        <tr className="border-b h-10">
                            <th className="w-5/12">Họ tên</th>
                            <th className="w-4/12">Trường</th>
                            <th className="w-1/12">Lớp</th>
                            <th className="w-1/12">Đã làm</th>
                            <th className="w-1/12"></th>
                        </tr>
                        <tr className="border-b">
                            <th className="flex items-center h-16">
                                <div className="mr-4 rounded-full border w-10 h-10 overflow-hidden">
                                    <img src="https://i.stack.imgur.com/dr5qp.jpg" alt="Avatar" />
                                </div>Nguyễn Văn Nam</th>
                            <th className="font-normal">Đại học Công nghệ</th>
                            <th className="font-normal">K64K1</th>
                            <th className="font-normal">0/0</th>
                            <th className="font-normal cursor-pointer text-lg"><AiOutlineDelete className={styles["delete-icon"]}/></th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Members;