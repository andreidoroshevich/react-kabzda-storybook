import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action("accordion mode change fired")
const onClickCallback = action("some item was clicked")

export const menuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const usersUnCollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    onClick={onClickCallback}
    items={
        [
            {title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
        ]
    }
/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Menu"}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClickCallback}
        items={
        [
            {title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
        ]}/>;
}
