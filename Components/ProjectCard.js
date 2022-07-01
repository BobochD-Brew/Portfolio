//import {useState, useEffect, Component} from "react";

const OGCard = (props) => {
    let cardStyle = {
        border: "#000613 solid 3px",
        borderRadius: "25px",
        boxShadow: "0 0 15px #222",
      } 
      let cardClass = "bg-[#FAEFEF] h-[calc(70vh-100px)] duration-300 w-[40vh] hover:w-[60vh]"
    return(
        <div className={cardClass} style={cardStyle}>
            
            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{}}>
                <div className="flex h-full flex-col items-center p-5">
                    <h1 className="font-bold text-xl mb-5">{props.text}</h1>
                    <img src={props.image} className="h-[80%] w-auto rounded-[20px]" style={{
                        border: "#000613 solid 3px",
                        objectFit: "cover",
                        boxShadow: "0 0 10px #222",
                    }}/>
                </div>
            </a>
        </div>
    )
 }  

export default OGCard;