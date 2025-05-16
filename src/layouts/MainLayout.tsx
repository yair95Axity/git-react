import { Counter } from "../components/counter/Counter"
import { ShowName } from "../components/show-name/ShowName"
import { Text2 } from "../components/text2/Text2"
import styles from './MainLayout.module.css'


export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <h1>Main Layout</h1>

            <Counter />
            <ShowName />
            <Text2 />
        </div>
    )
}
