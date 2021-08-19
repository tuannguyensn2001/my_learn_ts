import Layout from "../../../../components/Layout";
import Sidebar from "../../components/Sidebar";
import styles from './style.module.scss';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import Newsfeed from "../../components/Newsfeed";
import Members from "../../components/Members";
import RightSidebar from "../../components/Members/RightSidebar";

const a: number[] = [];

for (let i = 1; i <= 100; i++) a.push(i);

function ShowClassroom() {

    const {path} = useRouteMatch();

    return (
        <Layout>
            <div className={'h-full'}>
                <div
                    className={styles.wrapper}
                >
                    <div className={styles.left_side}>
                        <Sidebar/>

                    </div>
                    <div className={styles.right_side}>
                        <div>
                            <Switch>
                                <Route path={`${path}/members`} component={RightSidebar}/>
                            </Switch>
                        </div>

                    </div>
                    <div className={styles.center}>
                        <div>
                            <Switch>
                                <Route path={`${path}/newsfeed`} component={Newsfeed}/>
                                <Route path={`${path}/members`} component={Members}/>
                            </Switch>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default ShowClassroom;