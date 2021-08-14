import styles from './style.module.scss'
import {Button, Container} from "@chakra-ui/react";
import {Link, useRouteMatch} from 'react-router-dom';
import {BellIcon, ChevronDownIcon, HamburgerIcon, TriangleDownIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../../../apps/store";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"
import {useTranslation} from "react-i18next";

function Navbar() {

    const [classNavbarWrapper, setClassNavbarWrapper] = useState<string>(styles.navbar_wrapper);

    const profile = useAppSelector(state => state.auth.user?.profile);

    const {url} = useRouteMatch();

    const user = useAppSelector(state => state.auth);

    const {t} = useTranslation();

    useEffect(() => {

        if (url !== '/') {
            if (!classNavbarWrapper.includes(styles.active)) {
                setClassNavbarWrapper(prevState => [prevState, styles.active].join(' '));
            }
        }

        const handleOnScroll = (event: any) => {
            if (url === '/') {
                if (window.scrollY > 5) {
                    if (!classNavbarWrapper.includes(styles.active)) {
                        setClassNavbarWrapper(prevState => [prevState, styles.active].join(' '));
                    }
                } else {
                    setClassNavbarWrapper(prevState => prevState.replace(styles.active, ''));
                }
            }
        }

        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        }
    }, [classNavbarWrapper, url]);


    return (
        <div className={classNavbarWrapper}>
            <div>
                <div className={'container'}>
                    <div className={styles.navbar}>
                        <div>
                            <Link to={'/'}>
                                <img src="https://shub.edu.vn/images/brand-blue.svg" alt=""/>
                            </Link>
                        </div>
                        <div className={styles.page}>
                            <ul>
                                <li>
                                    <Link to={'/'}>
                                        Trang chủ
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        Khóa học
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/classroom'}>
                                        Lớp học
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.profile}>

                                {user.isLoggedIn &&
                                <>
                                    <div>
                                        <img
                                            src={profile?.media?.path}
                                            alt=""/>
                                        <div className={styles.profile_name}>
                                            <p>{profile?.fullname}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span> <BellIcon/></span>
                                        {/*<span><TriangleDownIcon className={styles.dropdown_icon}/></span>*/}
                                        <span className={styles.dropdown}>
                                            <Menu>
                                            <MenuButton>
                                                <span><TriangleDownIcon className={styles.dropdown_icon}/></span>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>{t('frontend.auth.logout')}</MenuItem>
                                            </MenuList>
                                        </Menu>
                                       </span>
                                        <span className={styles.toggle_button}><HamburgerIcon/></span>
                                    </div>
                                </>
                                }


                                {!user.isLoggedIn &&
                                <>
                                    <div className={styles.auth}>
                                        <Link to={'/login'}>{t('frontend.auth.login')}</Link>
                                        <Link to={'/login'}>{t('frontend.auth.register')}</Link>
                                    </div>
                                </>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;