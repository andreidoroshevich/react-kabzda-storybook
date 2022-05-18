import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect срабатывает только после отображения JSX (до отрисовки только регистрирует эффект)
    useEffect(() => {
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
    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()

        //позволяет выполнять сайд-эффекты, запрещенные в редьюсере и компоненте (для этого используем хуки
        // - внутри компонента, переданного в коллбэк хука)
        //api.getUsers().then('') - запрос на сервер
        //setInterval -
        //indexedDB
        //document.getElementBytId
        //document.title = "User"

    }, []) // only first render (componentDidMount)
    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()

        //позволяет выполнять сайд-эффекты, запрещенные в редьюсере и компоненте (для этого используем хуки
        // - внутри компонента, переданного в коллбэк хука)
        //api.getUsers().then('') - запрос на сервер
        //setInterval -
        //indexedDB
        //document.getElementBytId
        //document.title = "User"

    }, [counter]) // only when counter changed


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

    useEffect(() => {
        console.log("useEffect")
        // setTimeout(()=>{
        //     document.title = counter.toString()
        // }, 1000)

        const intervalID = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])


    return (
        <>
            <div>Hello, counter :{counter} - fake: {fake}</div>
            {/*<button onClick={() => setFake(fake + 1)}>fake inc</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter inc</button>*/}

        </>
    )


}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(0)
    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('reset effect')
        }
    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div>Hello, counter: {counter}</div>
            <div>
                <button onClick={increase}>+</button>
            </div>
        </>
    )

}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component rendered' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])
    return (
        <>
            <div>Typed text: {text} </div>
        </>
    )
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')
    console.log('Component rendered' + text)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])
    return (
        <>
            <div>Text: {text} </div>
        </>
    )
}