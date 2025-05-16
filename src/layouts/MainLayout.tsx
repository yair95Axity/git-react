import { Counter } from "../components/counter/Counter"
import { ShowName } from "../components/irving-component/ShowName"
import styles from './MainLayout.module.css'


export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <h1>Main Layout</h1>

            <Counter />
            <ShowName></ShowName>
        </div>
    )
}
