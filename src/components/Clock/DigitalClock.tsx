import React, {useEffect, useState} from "react";


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
        <div className={'digitalClock'}>
            <span className={'clockNumber'}>{hours}</span>
            <span className={'separator'}>:</span>
            <span className={'clockNumber'}>{minutes}</span>
            <span className={'separator'}>:</span>
            <span className={'clockNumber'}>{seconds}</span>
        </div>
    )
}

