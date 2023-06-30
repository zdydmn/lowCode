import { useCanvasData } from "../../store/hooks";
import Cmp from '../../Components/Cmp';
import styles from "./index.less";

export default function Center(props) {
    const canvas = useCanvasData()
    const { style, cmps } = canvas
    return (
        <div className={styles.main}>
            <div style={style} className={styles.canvas}>
                {cmps.map(cmp => {
                    const { key } = cmp
                    return <Cmp key={key} cmp={cmp} />
                })}
            </div>
        </div>
    );
}