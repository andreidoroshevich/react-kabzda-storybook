import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import UnControlledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {AnalogClock} from "./components/Clock/AnalogClock";

function App() {
    console.log("App rendered")
    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, SetCollapsedValue] = useState<boolean>(true)
    let [isOn, setIsOn] = useState(false)

    let items =
        [
            {title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
        ]


    return (
        <div className={'App'}>


            <OnOff on={isOn} onClick={setIsOn}/>
            <UnControlledOnOff onClick={setIsOn}/>{isOn.toString()}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={'Menu'} collapsed={collapsedValue} onClick={()=>console.log()} onChange={()=>{SetCollapsedValue(!collapsedValue)}}  items={items}/>

            <UncontrolledRating onChange={() => {
            }}/>
            <Rating value={ratingValue} onClick={SetRatingValue}/>
            <div className={'analogClock'}>

            </div>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
