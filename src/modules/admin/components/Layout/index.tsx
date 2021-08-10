import styles from './style.module.scss'
import Navigation from "../Navigation";
import Header from "../Header";
import {useState} from "react";
import useToggleClass from "../../hooks/useToggleClass";


export default function Layout({children}: { children: JSX.Element }) {

    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    const {classToggle: classMain} = useToggleClass(styles.main, isOpenSidebar, [styles.active]);

    return (
        <div className={styles.container}>
            <Navigation
                isOpenSidebar={isOpenSidebar}
            />

            <div className={classMain}>
                <Header
                    isOpenSidebar={isOpenSidebar}
                    setIsOpenSidebar={setIsOpenSidebar}
                />

                <div>
                    <p>Tuấn</p>
                </div>
            </div>

        </div>
    )
}