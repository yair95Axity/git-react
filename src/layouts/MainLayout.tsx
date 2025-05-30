import { Counter } from "../components/counter/Counter"
import { ShowName } from "../components/show-name/ShowName"
import { ShowPhone } from "../components/show-phone/ShowPhone"
import { Text1 } from "../components/text1/Text1"
import { Text2 } from "../components/text2/Text2"
import styles from './MainLayout.module.css'


export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <h1>Main Layout</h1>

            <Counter />
            <ShowName />
            <Text1 />
            <Text2 />
            <ShowPhone/>
        </div>
    )
}
