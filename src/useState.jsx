import { useState } from "react"


function UseStatePt (){
    const [count,setCount] = useState(0)

    return (
        <>
        <h1>Hello World</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Click</button>
        </>
    )
}

export default UseStatePt