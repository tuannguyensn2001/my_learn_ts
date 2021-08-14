import Layout from "../../components/Layout";
import styles from './style.module.scss';

import {
    BsBellFill,
    RiArrowDownSLine,
    GoPencil,
    RiArrowRightSLine,
    BsShieldLockFill
} from "react-icons/all";
import {useEffect} from "react";

function Profile() {

    useEffect(() => {




    },[])


    return (
        <Layout>



            <div className=" mx-auto w-3/5 h-full ">
                <div className={'rounded shadow'}>
                    <div className={styles['header']}>
                        <div className={styles["header-title"]}>My Profile</div>
                        <div className={styles["header-other"]}>
                            <div className={styles["header-other-bell"]}><BsBellFill/></div>
                            <div className={styles["header-other-avatar"]}>
                                <img width="100%"
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvmy_MjZETnhkHX8ZlB3eExZG9xu05S_7RA&usqp=CAU"
                                     alt="Profile Picture"/>
                            </div>
                            <div className={styles["header-other-more"]}><RiArrowDownSLine/></div>
                        </div>
                    </div>
                    <div className={styles["sub-cover"]}>
                        <div className={' lg:w-1/4 '}>
                            <ul className={styles["list"]}>
                                <li className={styles["list-item"]}>
                                    <div className={styles["list-item-icon"]}><GoPencil/></div>
                                    <div className={styles["list-item-title"]}>Edit Profile</div>
                                    <div className={styles["list-item-focus"]}><RiArrowRightSLine/></div>
                                </li>
                                <li className={styles["list-item"]}>
                                    <div className={styles["list-item-icon"]}><BsBellFill/></div>
                                    <div className={styles["list-item-title"]}>Notification</div>
                                    <div className={styles["list-item-focus"]}><RiArrowRightSLine/></div>
                                </li>
                                <li className={styles["list-item"]}>
                                    <div className={styles["list-item-icon"]}><BsShieldLockFill/></div>
                                    <div className={styles["list-item-title"]}>Password & Security</div>
                                    <div className={styles["list-item-focus"]}><RiArrowRightSLine/></div>
                                </li>
                            </ul>
                        </div>
                        <div
                            // className={styles.info}
                            className={'w-full lg:w-3/4 '}
                        >
                          <div>
                              <div className={styles["info-title"]}>Edit Profile</div>
                              <div className={styles["info-avatar"]}>
                                  <img className={styles["avatar"]} width="100%"
                                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvmy_MjZETnhkHX8ZlB3eExZG9xu05S_7RA&usqp=CAU"
                                       alt="Profile Picture"/>
                                  <div className={styles["avatar-edit"]}><GoPencil/></div>
                              </div>
                              <form className={styles["info-form"]} action="submit">
                                  <div className={styles["form-name"]}>
                                      <div className={styles["form-name-first-name"]}>
                                          <p className={styles["guild-text"]}>First Name</p>
                                          <input className={styles["input-field"]} type="text" placeholder="First Name"/>
                                      </div>
                                      <div className={styles["form-name-last-name"]}>
                                          <p className={styles["guild-text"]}>Last Name</p>
                                          <input className={styles["input-field"]} type="text" placeholder="Last Name"/>
                                      </div>
                                  </div>
                                  <div className={styles["form-contact"]}>
                                      <div className={styles["form-contact-email"]}>
                                          <p className={styles["guild-text"]}>Email</p>
                                          <input className={styles["input-field"]} type="email"
                                                 placeholder="Email Address"/>
                                      </div>
                                      <div className={styles["form-contact-tel"]}>
                                          <p className={styles["guild-text"]}>Contact Number</p>
                                          <input className={styles["input-field"]} type="tel"
                                                 placeholder="Contact Number"/>
                                      </div>
                                      <div className={styles["form-contact-address"]}>
                                          <p className={styles["guild-text"]}>Address</p>
                                          <input className={styles["input-field"]} type="text" placeholder="Address"/>
                                      </div>
                                  </div>
                                  <div className={styles["form-address"]}>
                                      <div className={styles["form-address-city"]}>
                                          <p className={styles["guild-text"]}>City</p>
                                          <input className={styles["input-field"]} type="text" placeholder="City"/>
                                      </div>
                                      <div className={styles["form-address-state"]}>
                                          <p className={styles["guild-text"]}>State</p>
                                          <input className={styles["input-field"]} type="text" placeholder="State"/>
                                      </div>
                                      <div className={styles["form-address-code"]}>
                                          <p className={styles["guild-text"]}>Zip Code</p>
                                          <input className={styles["input-field"]} type="text" placeholder="Zip Code"/>
                                      </div>
                                      <div className={styles["form-address-country"]}>
                                          <p className={styles["guild-text"]}>Country</p>
                                          <input className={styles["input-field"]} type="text" placeholder="Country"/>
                                      </div>
                                  </div>
                                  <div className={styles["form-password"]}>
                                      <p className={styles["guild-text"]}>Password</p>
                                      <input className={styles["input-field"]} type="password" placeholder="Password"/>
                                  </div>
                                  <button className={styles["form-btn"]} type="submit">Save</button>
                              </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default Profile;