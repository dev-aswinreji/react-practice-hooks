import { useRef } from "react";




export default function UseRef() {
    const inputRef = useRef(null)
    function onClickHanlder() {
        inputRef.current.focus();
    }
    return (
        <>
        <input type="text" name="" id="" ref={inputRef} />
        <button onClick={onClickHanlder}>Click To focus</button>
        </>
    )

}