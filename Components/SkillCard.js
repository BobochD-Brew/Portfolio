import {useState, useEffect} from "react";

const SKillCard = (props) => {
    let [popuped,setPopuped] = useState(0)
    let cardStyle = {
        border: "#000613 solid 3px",
        borderRadius: "10px",
        boxShadow: "0 0 15px #222",
      } 
      let cardClass = "duration-300 min-w-[2.75rem] bg-[#FAEFEF] hover:bg-[#000613] hover:text-[#FAEFEF] max-w-[16rem] p-2 h-11 flex flex-col justify-center items-center"
    return(
        
        <>
        <div className="w-5 h-0" style={{
            border:"#000613 solid 2px"
        }}></div>
        <a href={props.iframe ? undefined : props.link } onClick={(event,element)=>{
                if (event.target.src?.split('/')?.pop() == "close.png") {
                    event.stopPropagation()
                    return
                }
            if(props.iframe) setPopuped(1)
            }} className="cursor-pointer" target="_blank" rel="noopener noreferrer" >
        <div className={cardClass} style={cardStyle}>
        {popuped == 1 ? <div className=
            {props.oOo ? 
            "mt-5 mb-5 relative ml-[calc(50vw-min(100vh-2.5rem,100vw-2.5rem)/2)] h-[calc(min(100vh-2.5rem,100vw-2.5rem))] w-[calc(min(100vh-2.5rem,100vw-2.5rem))]"
            : 
            "m-5 relative h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)]"} style={{
                position: "fixed",
                left:"0",
                zIndex:"5000",
                top: "0",
                border: "#000613 solid 3px",
                borderRadius: "1.5rem",
                boxShadow: "0 0 15px #222",
                backgroundColor: "#FAEFEF",
                backgroundImage: 'url("loading.gif")',
                backgroundPosition: "center center",
                backgroundSize: "30%",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
            }}>
                <a onClick={()=>{
                    setPopuped(0)
                }}><img src="close.png"  className="absolute h-10 w-10 m-[-2px] cursor-pointer bg-[#FAEFEF] p-2" style={{
                    right: "0",
                    top: "0",
                    borderRadius: "1.5rem",
                    border: "#000613 solid 3px",
                    zIndex:"8000"
                }}></img></a>
                   <iframe src={props.link} width="100%" height="100%" frameBorder="0">Browser not compatible.</iframe>
            </div> : <div></div>}
            <h1 className="font-black whitespace-nowrap">{props.text}</h1>
          
        </div>
        </a>
        </>
        
    )
 }  

export default SKillCard;