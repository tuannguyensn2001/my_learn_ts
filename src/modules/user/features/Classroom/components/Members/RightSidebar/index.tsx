import { useEffect } from "react";

function RightSidebar () {

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const selectAll : any = $('.select-all');
        
        selectAll.onclick = function () {
            var checkboxes : any = $$('input[type="checkbox"]');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] != this)
                    checkboxes[i].checked = this.checked;
            }
        }
    })


    return (
        <div className="pl-4 pt-4 text-sm">
            <div className="authorize">
                <div className="total font-medium">Chờ duyệt (1)</div>
                <div className="buttons mt-5">
                    <button className="accept w-full rounded-md font-medium mb-1 bg-blue-400 text-white">Phê duyệt</button>
                    <button className="decline w-full rounded-md font-medium mb-1 bg-gray-300">Từ chối</button>
                    <div className="all flex items-center">
                        <input type="checkbox" className="select-all cursor-pointer" />
                        <span className="ml-2 font-medium">Chọn tất cả</span>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="student mt-2 w-full flex items-center">
                    <div className="checkbox">
                        <input type="checkbox" name="tick" className="cursor-pointer" />
                    </div>
                    <div className="name ml-2 font-xs">Nguyễn Văn Nam</div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;