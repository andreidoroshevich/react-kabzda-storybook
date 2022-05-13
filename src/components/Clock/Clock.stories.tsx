import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";


export default {
    title: "Clock",
    component: DigitalClock, AnalogClock

}

export const DigitalClockExample =  ()=>{
    return (
        <>
            <DigitalClock />
        </>
    )
}

export const AnalogClockExample =  ()=>{
    return (
        <>
            <AnalogClock/>
        </>
    )
}

