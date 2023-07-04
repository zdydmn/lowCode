import { useCanvasData, useCanvasByContext } from "../../store/hooks";
import { useCallback } from "react";
import Cmp from '../../Components/Cmp';
import styles from "./index.less";

export default function Center(props) {
    const canvas = useCanvasByContext();
    const canvasData = useCanvasData()
    const { style, cmps } = canvasData

    // 拖拽事件
    const onDrop = useCallback((e) => {
        const endX = e.pageX;
        const endY = e.pageY;

        const [oldX, oldY] = e.dataTransfer.getData("text").split(",");
        // 计算在画布中唯一的位置
        const disX = endX - oldX
        const disY = endY - oldY
        const selectCmp = canvas.getSelectedCmp()

        const oldStyle = selectCmp.style;
        const top = oldStyle.top + disY
        const left = oldStyle.left + disX

        canvas.upDateSelectedCmpStyle({ top, left })
    }, [canvas])

    // 拖拽结束事件 
    const allowDrop = useCallback((e) => {
        e.preventDefault();
    }, [])

    const selectedIndex = canvas.getSelectedCmpIndex();

    return (
        <div className={styles.main}>
            <div style={style} onDrop={onDrop} className={styles.canvas} onDragOver={allowDrop}>
                {cmps.map((cmp, index) => {
                    const { key } = cmp
                    return <Cmp key={key} cmp={cmp} isSelect={selectedIndex === index} index={index} />
                })}
            </div>
        </div>
    );
}