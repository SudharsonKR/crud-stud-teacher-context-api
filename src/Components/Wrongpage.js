import React from "react";
import { useNavigate } from "react-router-dom";
import Base from "../Base/base";

function Wrongpage(){
    const navigate=useNavigate()
    return(
        <Base 
        title ="404 Error"
        descriptions={"Wrong Page"}>
            <h4>You are Typed Invalid Search</h4>
            <h2>Please click below</h2>
            <button onClick={()=>navigate("/")}>Home</button>
            
        </Base>
    )
}
export default Wrongpage