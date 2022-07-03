//import {useState, useEffect, Component} from "react";

const OGCard = (props) => {
    let cardStyle = {
        border: "#000613 solid 3px",
        borderRadius: "25px",
        boxShadow: "0 0 15px #222",
        backgroundColor: "#FAEFEF",
        height: "calc(70vh - 150px)"
      } 
      let cardClass = "duration-300 w-[35vh] hover:w-[50vh]"
    return(
        <>
        <div className="w-10 h-0" style={{
            border:"#000 solid 2px"
        }}></div>
        <div className={cardClass} style={cardStyle}>
            
            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{}}>
                <div className="flex h-full flex-col items-center pl-5 pr-5 pb-5 pt-2">
                    <h1 className="font-bold text-lg h-[28px] mb-0 whitespace-nowrap">{props.text}</h1>
                    <h1 className="font-black text-base mb-2">{props.date}</h1>
                    {
                        props.children != undefined ?
                     
                        <div className="h-[75%] w-auto rounded-[20px]" style={{
                            border: "#000613 solid 3px",
                            objectFit: "cover",
                            boxShadow: "0 0 10px #222",
                            overflow: "hidden"
                        }}>{props.children}</div>
                     
                         :
                         <img src={props.image} className="h-[75%] w-auto rounded-[20px]" style={{
                            border: "#000613 solid 3px",
                            objectFit: "cover",
                            boxShadow: "0 0 10px #222",
                        }}/>
                    }
                    
                </div>
            </a>
        </div>
        
        </>
        
    )
 }  

export default OGCard;