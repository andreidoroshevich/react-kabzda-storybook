import React, {useEffect, useState} from "react";
import styles from "./styles.module.css"

type PropsType = {}

export const DigitalClock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
      const id:number =  window.setInterval(() => {
            setDate(new Date())
        }, 1000)
return ()=>{clearInterval(id)}
    }, [])

    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

    const hours = get2DigitsString(date.getHours())
    const minutes = get2DigitsString(date.getMinutes())
    const seconds = get2DigitsString(date.getSeconds())

    return (
        <div className={styles.digitalClock}>
            <span className={styles.clockNumber}>{hours}</span>
            <span className={styles.separator}>:</span>
            <span className={styles.clockNumber}>{minutes}</span>
            <span className={styles.separator}>:</span>
            <span className={styles.clockNumber}>{seconds}</span>
        </div>
    )
}

