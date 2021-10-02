import styles from "./InputPeople.module.css";

export default function (props) {
  return (
    <>
      <label className={styles.text} htmlFor="inputPeople">
        {props.textLabelPeople}
      </label>
      <span id="peopleInvalid" className={styles.inputInvalid}>
        Can't be zero
      </span>
      <input
        type="number"
        id="inputPeople"
        className={styles.input}
        name="inputPeople"
        onChange={props.onChange}
      ></input>
    </>
  );
}
