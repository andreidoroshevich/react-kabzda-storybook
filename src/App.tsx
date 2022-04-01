import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import UnControlledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendered")
    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, SetCollapsedValue] = useState<boolean>(true)
    let [isOn, setIsOn] = useState(false)

    return (
        <div className={'App'}>

            <OnOff on={isOn} onClick={setIsOn}/>
            <UnControlledOnOff onClick={setIsOn}/>{isOn.toString()}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={'Menu'} collapsed={collapsedValue} onChange={()=>{SetCollapsedValue(!collapsedValue)}}/>

            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={SetRatingValue}/>


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
