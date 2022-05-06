import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect срабатывает только после отображения JSX (до отрисовки только регистрирует эффект)
    useEffect(()=> {
        console.log("useEffect")
        document.title = counter.toString()

        //позволяет выполнять сайд-эффекты, запрещенные в редьюсере и компоненте (для этого используем хуки
        // - внутри компонента, переданного в коллбэк хука)
        //api.getUsers().then('') - запрос на сервер
        //setInterval -
        //indexedDB
        //document.getElementBytId
        //document.title = "User"

    }) // every render
    useEffect(()=>{
        console.log("useEffect")
        document.title = counter.toString()

        //позволяет выполнять сайд-эффекты, запрещенные в редьюсере и компоненте (для этого используем хуки
        // - внутри компонента, переданного в коллбэк хука)
        //api.getUsers().then('') - запрос на сервер
        //setInterval -
        //indexedDB
        //document.getElementBytId
        //document.title = "User"

    },[]) // only first render (componentDidMount)
    useEffect(()=>{
        console.log("useEffect")
        document.title = counter.toString()

        //позволяет выполнять сайд-эффекты, запрещенные в редьюсере и компоненте (для этого используем хуки
        // - внутри компонента, переданного в коллбэк хука)
        //api.getUsers().then('') - запрос на сервер
        //setInterval -
        //indexedDB
        //document.getElementBytId
        //document.title = "User"

    },[counter]) // only when counter changed


    return (
        <>
            <div>Hello, {counter} {fake}</div>
            <button onClick={() => setFake(fake + 1)}>fake inc</button>
            <button onClick={() => setCounter(counter + 1)}>counter inc</button>

        </>
    )


}


export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

   // useEffect срабатывает только после отображения JSX (до отрисовки только регистрирует эффект)

    useEffect(()=> {
        console.log("useEffect")
        // setTimeout(()=>{
        //     document.title = counter.toString()
        // }, 1000)

        setInterval(()=>{
            setCounter(state=>state+1)
        }, 1000)

    }, [])



    return (
        <>
            <div>Hello, counter :{counter} - fake: {fake}</div>
            {/*<button onClick={() => setFake(fake + 1)}>fake inc</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter inc</button>*/}

        </>
    )


}