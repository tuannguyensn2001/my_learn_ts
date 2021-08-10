import styles from './style.module.scss'
import {Container} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {BellIcon, TriangleDownIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";

function Navbar() {

    const [classNavbarWrapper, setClassNavbarWrapper] = useState<string>(styles.navbar_wrapper);

    useEffect(() => {
        const handleOnScroll = (event: any) => {
            if (window.scrollY > 5) {
                // setClassNavbarWrapper(prevState => {
                //     if (!prevState.includes(styles.active)) {
                //         return [prevState, styles.active].join(' ');
                //     }
                //     return prevState;
                // })

                if (!classNavbarWrapper.includes(styles.active)) {
                    setClassNavbarWrapper(prevState => [prevState, styles.active].join(' '));
                }
            } else {
                setClassNavbarWrapper(prevState => prevState.replace(styles.active, ''));
            }
        }

        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        }
    })


    return (
        <div className={classNavbarWrapper}>
            <div>
                <Container maxW={'container.xl'}>
                    <div className={styles.navbar}>
                        <div>
                            <Link to={'#'}>
                                <img src="https://shub.edu.vn/images/brand-blue.svg" alt=""/>
                            </Link>
                        </div>
                        <div className={styles.page}>
                            <ul>
                                <li>
                                    <Link to={'#'}>
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
                                    <span><TriangleDownIcon className={styles.dropdown_icon}/></span>
                                    <span><HamburgerIcon/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;