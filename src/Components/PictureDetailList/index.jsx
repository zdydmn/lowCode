import styles from './index.less';
import { CloseOutlined } from '@ant-design/icons';
import { useCanvasByContext } from '../../store/hooks'
import { isPicture } from "../../Layout/Left";

const defaultStyle = {
    position: "absolute",
    top: 0,
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
const url = "https://www.bubucuo.cn/";
const settings = [
    {
        value: url + "plank.png",
        style: defaultStyle,
    },
    {
        value: url + "rainbow1.png",
        style: defaultStyle,
    },
    {
        value: url + "rainbow.png",
        style: defaultStyle,
    },

    {
        value: url + "red_flower.png",
        style: defaultStyle,
    },

    {
        value: url + "red-rose.jpg",
        style: defaultStyle,
    },

    {
        value: url + "ribbon.png",
        style: defaultStyle,
    },
    {
        value: url + "rinbbon1.png",
        style: defaultStyle,
    },
    {
        value: url + "rose.jpg",
        style: defaultStyle,
    },
    {
        value: url + "sale.png",
        style: defaultStyle,
    },
    {
        value: url + "star1.png",
        style: defaultStyle,
    },
    {
        value: url + "star.png",
        style: defaultStyle,
    },
    {
        value: url + "sun.png",
        style: defaultStyle,
    },
    {
        value: url + "taohuayun.png",
        style: defaultStyle,
    },
    {
        value: url + "technoiogy.png",
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
            <div className={styles.titleFont}>图片</div>
            <CloseOutlined onClick={closeDetail} style={{ fontSize: "14px" }} />
        </div>
        <div className={styles.componentsList}>
            {settings.map((setting, index) => {
                return <div key={index} className={styles.componentItem} onClick={() => { addCmp({ ...setting, type: isPicture }) }}>
                    <img src={setting.value} alt="" />
                </div>
            })}
        </div>
    </div>
}