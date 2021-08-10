import styles from './style.module.scss';
import {HamburgerIcon} from "@chakra-ui/icons";
import {setState} from "../../../../type/State";
import useToggleClass from "../../hooks/useToggleClass";

interface HeaderProp {
    setIsOpenSidebar: setState<boolean>,
    isOpenSidebar: boolean
}


function Header({setIsOpenSidebar, isOpenSidebar}: HeaderProp) {

    const toggleClick = () => {
        setIsOpenSidebar(prevState => !prevState);
    }

    const {classToggle} = useToggleClass(styles.toggle, isOpenSidebar, [styles.active])

    return (
        <div className={styles.topbar}>
            <div onClick={toggleClick} className={classToggle}>
                <HamburgerIcon/>
            </div>
            <div className={styles.search}>
                <label htmlFor="">
                    <input type="text" placeholder={'search here'}/>
                </label>
            </div>
            <div className={styles.user}>
                <img
                    src="https://lh3.googleusercontent.com/proxy/aVfDNpI0_1V6jfG5RhC6kHRNr_Pb7uIo6rVQfZNLw-ecP5MiMAB4Q6UkHO0FJ-vr7ABlBoz-9uWpHPgb6ERcfiTTmq9YA75JXUltJpmxqjRZ-KvYlpYkfLT8S-rvDA"
                    alt=""/>
            </div>
        </div>
    )
}

export default Header;