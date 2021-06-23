import React from "react";
import useLocalization from "../../../../../../hooks/useLocalization";

export default function Body() {

    const {trans} = useLocalization();

    return (
        <div className="des-box container col-xl-6 offset-xl-1 col-lg-9 col-md-10 col-sm-10">
            <div className="des-box__heading">{trans('courseDetailBody.title')}</div>
            <div className="des-box__body">
                <div className="body__cover">
                    <div className="body__cover-col">
                        <i className="check-icon fal fa-check"></i>Đầu tiên
                    </div>
                    <div className="body__cover-col">
                        <i className="check-icon fal fa-check"></i>Tiếp theo
                    </div>
                </div>
                <div className="body__cover">
                    <div className="body__cover-col">
                        <i className="check-icon fal fa-check"></i>Thêm nữa
                    </div>
                    <div className="body__cover-col">
                        <i className="check-icon fal fa-check"></i>Cuối cùng
                    </div>
                </div>
            </div>
        </div>
    )
}