import Layout from "../../components/Layout";
import styles from './style.module.scss';
import {useTranslation} from "react-i18next";

// interface, generic

function Profile() {
    const {t} = useTranslation();
    return (
        <Layout>
            {/*<div className={styles.profile}>*/}
            {/*    <p>Hello</p>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-6">*/}
            {/*             hello*/}
            {/*       </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="container">
                {t('frontend.auth.login')}
            </div>
        </Layout>
    )
}


export default Profile;