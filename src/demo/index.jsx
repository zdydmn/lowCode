import styles from './index.less';
// hover阴影
function Demo({ style }) {
    const { width, height } = style
    return (<div style={{ width, height }} className={styles["hover-hint"]}>
        123
    </div>)

}


function Box() {
    return <div className={styles.main}>
        <h3>hover阴影</h3>
        <Demo style={{ width: '200px', height: '80px' }} />

    </div>
}

export default Box