import {useState, useEffect} from "react";

const OGCard = (props) => {
    let [popuped,setPopuped] = useState(0)
    let cardStyle = {
        border: "#000613 solid 3px",
        borderRadius: "25px",
        boxShadow: "0 0 15px #222",
       
        height: "calc(70vh - 150px)"
      } 
      let cardClass = "duration-300 w-[35vh] bg-[#FAEFEF] lg:hover:bg-[#000613] lg:hover:text-[#FAEFEF]" + (props.noScale ? "" : " lg:hover:w-[50vh]")
    return(
        <>
        <div className="w-10 h-0" style={{
            border:"#000613 solid 2px"
        }}></div>
        <div className={cardClass} style={cardStyle}>
            {popuped == 1 ? <div className={props.oOo ? 
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
                overflow: "hidden",
            }}>
                <a onClick={()=>{
                    setPopuped(0)
                }}><img src="close.png" className="absolute h-10 w-10 m-[-2px] cursor-pointer bg-[#FAEFEF] p-2" style={{
                    right: "0",
                    top: "0",
                    borderRadius: "1.5rem",
                    border: "#000613 solid 3px",
                    zIndex: "8000"
                }}></img></a>
                   <iframe src={props.link} width="100%" height="100%" frameBorder="0">Browser not compatible.</iframe>
            </div> : <div></div>}
            <a href={props.iframe ? undefined : props.link } className="cursor-pointer" target="_blank" rel="noopener noreferrer" onClick={(event, element) => {
         
                if (event.target.src?.split('/')?.pop() == "dice.png") {
                    event.stopPropagation()
                    return
                }
                if(props.iframe) setPopuped(1);
            }} style={{}}>
                <div className="flex h-full flex-col items-center pl-5 pr-5 pb-5 pt-2">
                    
                    <h1 className="font-bold text-lg h-[28px] mb-0 whitespace-nowrap">{props.text}</h1>
                    <h1 className="font-black text-base mb-2">{props.date}</h1>
                    {
                        props.children != undefined ?
                     
                        <div className="h-[75%] w-auto rounded-[20px]" style={{
                            border: "#000613 solid 3px",
                            objectFit: "cover",
                            boxShadow: "0 0 10px #000613",
                            overflow: "hidden"
                        }}>{props.children}</div>
                         :
                         <img src={props.image} className="h-[75%] w-auto rounded-[20px]" style={{
                            border: "#000613 solid 3px",
                            objectFit: "cover",
                            boxShadow: "0 0 10px #000613",
                        }}/>
                    }
                    
                </div>
            </a>
        </div>
        
        </>
        
    )
 }  

export default OGCard;