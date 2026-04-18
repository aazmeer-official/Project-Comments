import { useEffect, useState } from "react";

export default function Joker(){
    let [joke,setJoke] = useState("")
    const URL = "https://icanhazdadjoke.com/slack";
    const getJoke = async()=>{
        let res = await fetch(URL)
        let jsonRes = await res.json()
        let finalRes = await jsonRes.attachments[0].text
        setJoke(joke=finalRes)
    }
    useEffect(()=>{
        getJoke()
    },[])
    return(
        <>
        <h1>Joker</h1>
        <p>{joke}</p>
        <button onClick={getJoke}>Generate Joke</button>
        </>
    )
}