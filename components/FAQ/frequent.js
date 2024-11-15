import { useState } from "react"
import { API } from "./api"
import { Myaccording } from "./Myaccording"

export const Frequent=()=>{
    const[data,setdata]=useState(API)
    return(
        <>
        <section className="main-div">
        <h1 style={{
            letterSpacing:"2px",
            fontSize:"30px",
            textAlign:"center"
        }}>Frequently Asked Questions</h1>
        <hr></hr>
        {
            data.map((curelem)=>{
                const {id}=curelem;
                return <Myaccording key={id} {...curelem}/>
            })
        }
        </section>
        </>
    )
}