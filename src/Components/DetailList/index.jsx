import styles from './index.less';
import { CloseOutlined } from '@ant-design/icons';
import { useCanvasByContext } from '../../store/hooks'
const defaultStyle = {
    position: "absolute",
    top: 1,
    left: 0,
    width: 80,
    height: 30,
    lineHeight: "30px",
    fontSize: 12,
    fontWeight: "normal",
    color: "#000",
    backgroundColor: "#ffffff00",
    textAlign: "left",
    borderRadius: "0%",
    borderStyle: "none",
    borderWidth: "0",
    borderColor: "#ffffff00",
};

const settings = [
    {
        value: "标题",
        style: {
            ...defaultStyle,
            fontSize: 28,
            height: 50,
            lineHeight: "50px",
        },
    },
    {
        value: "正文",
        style: defaultStyle,
    },
];

export default function DetailList({ closeDetail }) {
    const canvas = useCanvasByContext()
    const addCmp = (_cmp) => {
        canvas.addCmp(_cmp)
    }
    return <div className={styles.container}>
        <div className={styles.titleContainer}>
            <div className={styles.titleFont}>组件库</div>
            <CloseOutlined onClick={closeDetail} style={{ fontSize: "14px" }} />
        </div>
        <div className={styles.componentsList}>
            {settings.map((setting, index) => {
                return <div key={index} className={styles.componentItem} onClick={() => { addCmp(setting) }}>{setting.value}</div>
            })}
        </div>
    </div>
}