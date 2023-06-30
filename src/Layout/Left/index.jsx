import { useState } from 'react';
import { GoldenFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import styles from "./index.less";
import DetailList from '../../Components/DetailList';

export default function Left(props) {
    const [isSide, setIsSitd] = useState(false);

    const closeDetail = () => {
        setIsSitd(false)
    }
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Tooltip placement="right" title="组件">
                    <div className={classnames(styles.navItem, isSide ? styles.navItemActive : '')} onClick={() => setIsSitd(old => !old)}>
                        <GoldenFilled style={{ fontSize: '24px', color: isSide ? '#1677ff' : '' }} />
                    </div>
                </Tooltip>
            </div >
            {isSide && <DetailList closeDetail={closeDetail} />
            }
        </div >
    );
}