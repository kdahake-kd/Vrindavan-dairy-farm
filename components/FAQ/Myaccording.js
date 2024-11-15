import { useState } from "react"
import './frequent.css';
export const Myaccording=({question,answer})=>{
    const[show,setshow]=useState(false)
    return(
        <>
        <div className="main-heading" data-aos="fade-left">
            <p style={{
                fontSize:"40px",
            }}onClick={()=>setshow(!show)}>{show ? "-":"+"}</p>
            <h3 style={{
            }}>{question}</h3>
        </div>
        
        {show && <p style={{
        
        }} data-aos="fade-right" className="answers">{answer}</p>}
        </>
    )
}