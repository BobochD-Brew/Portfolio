import {useState, useEffect} from "react";

const Title = (props) => {
    let [title,setTitle] = useState(0)
    useEffect(()=>{
        let interval = setInterval(()=>{
            setTitle(1)
            setTimeout(()=>{
                setTitle(0)
            },700)
        },1500)
        return ()=>{
            clearInterval(interval)
        }
    },[])   
    
    return(
        <h1 className='lg:text-5xl text-2xl font-bold text-[#000613]'>{title == 0 ? "Boboch D. Brew" : "Boboch D. Brew_"}</h1>
    )
 }  

export default Title;