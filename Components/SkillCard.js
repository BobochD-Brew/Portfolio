//import {useState, useEffect, Component} from "react";

const SKillCard = (props) => {
    let cardStyle = {
        border: "#000613 solid 3px",
        borderRadius: "10px",
        boxShadow: "0 0 15px #222",
        backgroundColor: "#FAEFEF"
      } 
      let cardClass = "min-w-[2.75rem] max-w-[16rem] p-2 h-11 flex flex-col justify-center items-center"
    return(
        <>
        <div className="w-5 h-0" style={{
            border:"#000 solid 2px"
        }}></div>
        <div className={cardClass} style={cardStyle}>
        
            <a href={props.link}  target="_blank" rel="noopener noreferrer" ><h1 className="font-black whitespace-nowrap">{props.text}</h1></a>
          
        </div>
        
        </>
        
    )
 }  

export default SKillCard;