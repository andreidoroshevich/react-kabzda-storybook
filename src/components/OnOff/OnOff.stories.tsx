import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff,
    }

    const callback = action("on or off clicked")

    export const onMode = () => <OnOff on={true} onClick={callback}/>;
    export const offMode = () => <OnOff on={false} onClick={callback}/>;

    export const ModeChanging = () => {
      const [value, setValue]=useState<boolean>(true)
        return <OnOff on={value} onClick={setValue}/>;
    }
