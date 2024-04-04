'use client'
import { useState,useEffect } from "react"

export function Buttons(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
            console.log(count)
    },[count])
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>INFO 1</button>
            <button onClick={()=>{setCount(count+1)}}>INFO 2</button>
            <button onClick={()=>{setCount(count+1)}}>INFO 3</button>
        </div>
    )
}

export default Buttons