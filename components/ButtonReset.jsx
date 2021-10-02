import styles from "./ButtonReset.module.css"

export default function ButtonReset(props) {
    return (
            <button type="reset" className={styles.buttonReset} onClick={props.button}>RESET</button>
    )
}