import styles from "./InputBill.module.css";

export default function (props) {
  return (
    <>
      <label className={styles.text} htmlFor="inputBill">
        {props.textLabelBill}
      </label>
      <input
        type="number"
        id="inputBill"
        className={styles.input}
        name="inputBill"
        onChange={props.onChange}
      ></input>
    </>
  );
}
