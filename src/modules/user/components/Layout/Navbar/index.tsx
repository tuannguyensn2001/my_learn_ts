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
                <Container maxW={'container.xl'}>
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
                                    <Link to={'#'}>
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
                                            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/206456407_2902913926642881_1938351864490439175_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=TALnlv6WFC8AX-Cnd8d&_nc_ht=scontent.fhan5-2.fna&oh=6ebdec15cded9495f84b0f80db7a03e4&oe=613A0837"
                                            alt=""/>
                                        <div className={styles.profile_name}>
                                            <p>Tuấn Nguyễn</p>
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
                </Container>
            </div>
        </div>
    )
}

export default Navbar;