import { useState } from 'react';
import { GoldenFilled, PictureFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import styles from "./index.less";
import DetailList from '../../Components/DetailList';
import PictureDetailList from '../../Components/PictureDetailList';
export const isPicture = 2
export const isText = 1
export default function Left(props) {
    const [isSide, setIsSitd] = useState(0);

    const closeDetail = () => {
        setIsSitd(false)
    }
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Tooltip placement="right" title="文字">
                    <div className={classnames(styles.navItem, isSide === isText ? styles.navItemActive : '')} onClick={() => setIsSitd(isText)}>
                        <GoldenFilled style={{ fontSize: '24px', color: isSide === isText ? '#1677ff' : '' }} />
                    </div>
                </Tooltip>
                <Tooltip placement="right" title="图片">
                    <div style={{ marginTop: 20 }} className={classnames(styles.navItem, isSide === isPicture ? styles.navItemActive : '')} onClick={() => setIsSitd(isPicture)}>
                        <PictureFilled style={{ fontSize: '24px', color: isSide === isPicture ? '#1677ff' : '' }} />
                    </div>
                </Tooltip>
            </div >
            {isSide === isText && <DetailList closeDetail={closeDetail} />}
            {isSide === isPicture && <PictureDetailList closeDetail={closeDetail} />}
        </div >
    );
}