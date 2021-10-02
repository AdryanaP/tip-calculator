import ButtonPercent from "./ButtonPercent"
import Display from "./Display"
import InputBill from "./InputBill"
import InputPeople from "./InputPeople"
import styles from "./Form.module.css"

import { useState } from "react"
import ButtonReset from "./ButtonReset"

export default function Form(props) {
    const [inputBill, setInputBill] = useState(0)
    const [inputPeople, setInputPeople] = useState(0)
    const [customTip, setCustomTip] = useState(0)
    const [displayTip, setDisplayTip] = useState("0.00")
    const [displayTotal, setDisplayTotal] = useState("0.00")

    const bill = () => {
        const input = document.getElementById("inputBill")
        setInputBill(input.value)
    }

    const people = () => {
        const inputP = document.getElementById("inputPeople")
        setInputPeople(inputP.value)
    }

    const customPercent = (e) => {
        if (e.key  === "Enter") {
            const tip = document.getElementById("customPercent")
            setCustomTip(tip.value)
            
            percent(customTip)
        }
    }

    const percent = (x) => {
        const decimal = x / 100
        const tipTotal = decimal * inputBill
        const tipPerPerson = tipTotal / inputPeople
        const totalPerPerson = Number(tipPerPerson) + Number(inputBill / inputPeople)

        showResult(totalPerPerson, tipPerPerson)
    }

    const showResult = (totalPerPerson, tipPerPerson) => {
        const peopleInvalid = document.getElementById("peopleInvalid")
        const inputP = document.getElementById("inputPeople")
        const input = document.getElementById("inputBill")

        if (inputP.value === NaN || inputP.value <= 0) {
            peopleInvalid.style.display = "inline"
        } else {
            peopleInvalid.style.display = "none"
            setDisplayTip(tipPerPerson.toFixed(2))
            setDisplayTotal(totalPerPerson.toFixed(2))
        }
    }

    const reset = () => {
        const peopleInvalid = document.getElementById("peopleInvalid")
        const inputP = document.getElementById("inputPeople")
        const input = document.getElementById("inputBill")

        input.value = null
        inputP.value = null
        setDisplayTip("0.00")
        setDisplayTotal("0.00")
        peopleInvalid.style.display = "none"
        billInvalid.style.display = "none"
    }

    return (
        <div className={styles.content}>
            <form className={styles.form}>
                <InputBill 
                    textLabelBill="Bill"
                    onChange={bill}
                />
                <ButtonPercent 
                    textButtonsP="Select Tip %"
                    value={percent} 
                    onChangeReset={customPercent}
                />
                <InputPeople 
                    textLabelPeople="Number of People"
                    onChange={people}
                />
            </form>
            <div className={styles.display}>
                <Display
                    text="Tip Amount"
                    value={displayTip}
                />
                <Display
                    text="Total"
                    value={displayTotal}
                />
                <ButtonReset
                    button={reset}
                />
            </div>
        </div>
    )
}