import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action("accordion mode change fired")

export const menuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const usersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}/>;
}
