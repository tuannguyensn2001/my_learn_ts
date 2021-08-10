import styles from './style.module.scss'
import {Link} from 'react-router-dom';
import {PhoneIcon} from "@chakra-ui/icons";
import useToggleClass from "../../hooks/useToggleClass";

interface NavigationProp {
    isOpenSidebar: boolean
}

function Navigation({isOpenSidebar}: NavigationProp) {


    const {classToggle : classNavigation} = useToggleClass(styles.navigation, isOpenSidebar, [styles.active]);

    return (
        <div className={classNavigation}>
            <ul>
                <li>
                    <Link to={'#'}>
                        <span className={styles.icon}><PhoneIcon/></span>
                        <span className={styles.title}><h2>Brand Name</h2></span>
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        <span className={styles.icon}><PhoneIcon/></span>
                        <span className={styles.title}> Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        <span className={styles.icon}><PhoneIcon/></span>
                        <span className={styles.title}> Dashboard</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;