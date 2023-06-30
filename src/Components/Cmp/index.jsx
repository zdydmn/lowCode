import classNames from "classnames";
import styles from './index.less';

export default function Cmp({ cmp }) {
    const { value, style } = cmp
    return (
        <div className={styles.main} style={{ top: style.top, width: style.width, height: style.height }}>
            {/* 组件本身 */}
            <div style={{ ...style }}>
                {value}
            </div>
        </div>
    )
}