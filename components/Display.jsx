import styles from "./Display.module.css"

export default function(props) {
    return (
        <div className={styles.displayDiv}>
            <div className={styles.divText}>
                <p className={styles.text}>{props.text}</p>
                <span className={styles.span}>/ person</span>
            </div>
            <span className={styles.value}>${props.value}</span>
        </div>
    )
}