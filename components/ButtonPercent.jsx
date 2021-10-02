import styles from "./ButtonPercent.module.css"

export default function buttonPercent(props) {
    return (
        <>
            <p className={styles.text}>{props.textButtonsP}</p>
            <div className={styles.tipsButtons}>
                <button type="button" className={styles.buttonPercent} onClick={() => props.value(5)}>5%</button>
                <button type="button" className={styles.buttonPercent} onClick={() => props.value(10)}>10%</button>
                <button type="button" className={styles.buttonPercent} onClick={() => props.value(15)}>15%</button>
                <button type="button" className={styles.buttonPercent} onClick={() => props.value(25)}>25%</button>
                <button type="button" className={styles.buttonPercent} onClick={() => props.value(50)}>50%</button>
                <input type="number" id="customPercent" className={styles.customPercent} placeholder="Custom" onKeyDown={props.onChangeReset}></input>
            </div>
        </>
    );
}
