import React, {useEffect, useState} from "react";


type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
      const id:number =  window.setInterval(() => {
          console.log("TICK")
            setDate(new Date())
        }, 1000)
return ()=>{clearInterval(id)}
    }, [])

    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

    const hours = get2DigitsString(date.getHours())
    const minutes = get2DigitsString(date.getMinutes())
    const seconds = get2DigitsString(date.getSeconds())

    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    )
}

