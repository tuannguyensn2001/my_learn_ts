import styles from './styles.module.scss'
import {BsFillImageFill} from 'react-icons/bs'
import {IoIosMore} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useEffect } from 'react'

function Newsfeed() {

    useEffect(() => {
        
        const $ = document.querySelector.bind(document);
        const popup : any = $('.popup');
        const coverSheet : any = $('.cover-sheet');
        const moreButton : any = $('.more-btn');
        const postText : any = $('#post-text');
        const postBtn : any = $('.post-btn');

        // Enable post button
        postText.oninput = function () {
            if (postText.innerHTML === '<br>') {
                postText.innerHTML = '';
            }
            if (postText.innerHTML !== '') {
                postBtn.classList.remove('cursor-not-allowed');
                postBtn.classList.remove('bg-gray-300');
                postBtn.classList.remove('text-gray-400');
                postBtn.classList.add('bg-blue-400');
                postBtn.classList.add('text-white');
            } else {
                postBtn.classList.add('cursor-not-allowed');
                postBtn.classList.add('bg-gray-300');
                postBtn.classList.add('text-gray-400');
                postBtn.classList.remove('bg-blue-400');
                postBtn.classList.remove('text-white');
            }
        }

        // Handle show / hide delete comment button
        moreButton.onclick = () => {
            coverSheet.classList.remove('hidden');
            popup.classList.remove('hidden');
        }
        coverSheet.onclick = () => {
            popup.classList.add('hidden');
            coverSheet.classList.add('hidden');
        }

    }, []);

    return <div className="pt-12 pb-96">
            <div className="new-post rounded-md bg-white w-4/5 mx-auto border py-4">
                <div className="input flex border-b px-4 pb-4 justify-between">
                    <div className="avatar rounded-full border w-10 h-10 overflow-hidden">
                        <img src="https://i.stack.imgur.com/dr5qp.jpg" alt="Avatar" />
                    </div>
                    <div className="input-text w-11/12 cursor-text border rounded-md px-4 py-2 hover:border-gray-400">
                        <p><span id="post-text" className={styles["post-text"]} role="textbox" contentEditable="true"></span></p>
                    </div>
                </div>
                <div className="buttons flex flex-row-reverse mt-4 mr-4">
                    <button className="post-btn cursor-not-allowed bg-gray-300 text-gray-400 px-8 py-1 rounded">Đăng tin</button>
                    <div className="separator border-r mx-4"></div>
                    <div className="image hover:opacity-90 flex items-center py-1 rounded">
                        <BsFillImageFill className={styles["add-image"]}/>
                        <button className="text-blue-400 font-medium">Thêm ảnh</button>
                    </div>    
                </div>    
            </div>    
            <div className="cover-sheet z-40 hidden fixed top-0 bottom-0 left-0 right-0"></div> 

            {/* Whole post */}
            <div className="post rounded-md bg-white w-4/5 mx-auto p-4 border mt-4">
                <div className="user flex">
                    <div className="avatar rounded-full border w-10 h-10 overflow-hidden">
                        <img src="https://i.stack.imgur.com/dr5qp.jpg" alt="Avatar" />
                    </div>
                    <div className="info ml-4">
                        <div className="name font-medium">User's name</div>
                        <div className="date text-xs font-light">5 hours ago</div>
                    </div>
                </div>
                <div className="content mt-4 text-sm border-b pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda quas unde ipsam quam odit, rerum quasi porro tempore, consequatur doloribus doloremque architecto? 
                    Inventore a tempore voluptates quia rerum omnis aspernatur!
                </div>
                <div className="comments mt-4">
                    <div className="total-comments text-xs font-light">1 comments</div>
                    <div className="comment-field flex justify-between mt-2">
                        <div className="avatar rounded-full border w-10 h-10 overflow-hidden">
                            <img src="https://i.stack.imgur.com/dr5qp.jpg" alt="Avatar" />
                        </div>
                        <input type="text" placeholder="Viết bình luận" 
                            className="insert px-4 w-11/12 outline-none border rounded-md hover:border-gray-400 focus:border-blue-300" />
                    </div>
                    {/* Comments on post */}
                    <div className="others-comments flex mt-4 justify-between relative">
                        <div className="avatar rounded-full border w-10 h-10 overflow-hidden">
                            <img src="https://i.stack.imgur.com/dr5qp.jpg" alt="Avatar" />
                        </div>
                        <div className="info w-11/12">
                            <div className="cover flex items-center">
                                <div className="name font-medium text-sm">User's name</div>
                                <div className="date text-xs font-light ml-2">5 hours ago</div>
                            </div>
                            <div className="comment-content text-sm font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Illum minima magnam repellendus accusamus, praesentium at odit incidunt quos in, ab fugiat voluptas labore, 
                            ea ex. Perferendis veritatis maxime sapiente! Explicabo.</div>
                        </div>
                        <div className="more-btn absolute top-0 right-0 cursor-pointer">
                            <IoIosMore/>
                            <div className="popup hidden absolute top-3 right-0 bg-white shadow-lg rounded-md z-50">
                                <div className="delete-comment px-4 flex items-center">
                                    <RiDeleteBin6Line/>
                                    <button className="delete ml-1">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
}

export default Newsfeed;