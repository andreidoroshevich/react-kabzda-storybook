import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const showItems = () =>setActive(!active)
    const onItemClick =(value: any) =>{
        props.onChange(value)
        showItems()
    }

    const itemClicked = (value: any) => props.onChange(value)

    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
            {active && <div className={styles.items}>
                {props.items.map(i =>
                    <div onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                         className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                         key={i.value}
                         onClick={()=>onItemClick(i.value)}>
                        {i.title}</div>
                )}
            </div>}
        </div>
    )
}