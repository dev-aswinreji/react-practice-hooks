import { useEffect, useState } from "react";

export function WindowWidthChecker(){
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const handleResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    })
    return (
        <>

        <h1>{windowWidth}</h1>
        </>
    )
}