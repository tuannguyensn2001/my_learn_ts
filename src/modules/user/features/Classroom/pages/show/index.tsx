import Layout from "../../../../components/Layout";
import Sidebar from "../../components/Sidebar";
import styles from './style.module.scss';

const a: number[] = [];

for (let i = 1; i <= 100; i++) a.push(i);

function ShowClassroom() {
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
                            hihihi
                        </div>

                    </div>
                    <div className={styles.center}>
                        <div>
                            hihi
                            {/*{a.map(item => (*/}
                            {/*    <h1 key={item}>Hihi</h1>*/}
                            {/*))}*/}
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default ShowClassroom;