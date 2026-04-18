import { useState , useEffect} from "react";

function init(){
    return Math.floor(Math.random() * 10);
}

export default function Counter(){
    let [count,setCount] = useState(0)
    useEffect(function printSome(){
        console.log("This is a UseEFFECT")
    },[count])
    function isCount(){
        setCount((currCount)=>{
            console.log(currCount)
            return (currCount + 1)
        })  
    }
    return(
        <div>
            <h3>
                Count = {count} 
            </h3>
            <button onClick={isCount}>Increase Count </button>
        </div>
    )
}