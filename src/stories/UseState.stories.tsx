import React, {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    return 1 //difficult count
}

export const Example1 = () => {

    // const initValue = useMemo(generateData,[])

    //useState вызывает функцию всего один раз и засунит значение
    // этой функции как иницилизационное значение и больше не будет перевызывать функцию
    // используется, когда функция синхронная со сложными вычислениями

    const [counter, setCounter] = useState(generateData)
    // const changer = (state:number) => state+1
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => {setCounter(state => state + 1)}}>+
            </button>

        </>
    )


}