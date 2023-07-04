import classNames from "classnames";
import { CanvasContext } from "../../Context";
import { useContext, useCallback } from "react";
import Text from "../Text";
import { isText, isPicture } from "../../Layout/Left";
import Img from "../Img";
import styles from './index.less';

export default function Cmp({ cmp, isSelect, index }) {
    const canvas = useContext(CanvasContext)
    const { style } = cmp
    const selectCmp = () => {
        canvas.setSelectedCmpIndex(index)
    }
    const onDragStart = (e) => {
        selectCmp(index);
        // 拖拽的开始位置
        const startX = e.pageX;
        const startY = e.pageY;
        // 记录起始位置
        e.dataTransfer.setData("text", startX + "," + startY);
    }

    const onMouseDown = useCallback((e) => {
        const direction = e.target.dataset.direction
        if (!direction) return
        e.stopPropagation()
        e.preventDefault()

        let startX = e.pageX
        let startY = e.pageY

        const move = (e) => {
            const x = e.pageX
            const y = e.pageY

            let disX = x - startX
            let disY = y - startY

            let newStyle = {}
            if (direction) {
                if (direction.indexOf('top') >= 0) {
                    disY = 0 - disY
                    newStyle.top = cmp.style.top - disY
                }

                if (direction.indexOf('left') >= 0) {
                    disX = 0 - disX
                    newStyle.left = cmp.style.left - disX
                }
            }
            Object.assign(newStyle, {
                width: cmp.style.width + disX,
                height: cmp.style.height + disY
            })
            canvas.upDateSelectedCmpStyle(newStyle)

            startX = x;
            startY = y;

        }
        const up = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)




    }, [canvas, cmp])
    const render = (cmp) => {
        switch (cmp.type) {
            case isText:
                return <Text {...cmp} />;

            case isPicture:
                return <Img {...cmp} />;
            default:
                break;
        }
    }
    return (
        <div
            className={styles.main}
            draggable="true"
            onDragStart={onDragStart}
            onClick={() => selectCmp()}
        >
            {/* 组件本身 */}
            <div style={{ ...style }}>
                {render(cmp)}
            </div>

            {/* 用来实现组件拖拽，选中功能 */}
            <ul
                className={classNames(styles.editStyle, isSelect ? styles.selected : styles.unselected)}
                style={{
                    width: style.width,
                    height: style.height,
                    top: style.top - 2,
                    left: style.left - 2
                }}
                onMouseDown={onMouseDown}
            >
                {isSelect && (<>
                    <li className={styles.block} style={{ top: -3, left: -3 }} data-direction="top, left"></li>
                    <li className={styles.block} style={{ top: -3, right: -3 }} data-direction="top, right"></li>
                    <li className={styles.block} style={{ bottom: style.height / 2 - 2, left: -3 }} data-direction="left"></li>
                    <li className={styles.block} style={{ top: -3, left: style.width / 2 - 2 }} data-direction="top"></li>
                    <li className={styles.block} style={{ bottom: -3, left: style.width / 2 - 2 }} data-direction="bottom"></li>
                    <li className={styles.block} style={{ bottom: style.height / 2 - 2, right: -3 }} data-direction="right"></li>
                    <li className={styles.block} style={{ bottom: -3, left: -3 }} data-direction="bottom, left"></li>
                    <li className={styles.block} style={{ bottom: -3, right: -3 }} data-direction="bottom, right"></li>
                </>)}
            </ul>
        </div>
    )
}