import React, { useContext, useState } from "react";
import Base from "../Base/base";
import { useNavigate } from "react-router-dom";
import { ctxt } from "../App";

function Teacheradd(){
    const {teacher, setTeacher}=useContext(ctxt)
    const navigate = useNavigate();
    const [Id, setId]=useState("")
    const [Name, setName]=useState("")
    const [Subject, setSubject]=useState("")
    const [Gender, setGender]=useState("")
    

    const handleTeachAdd=()=>{
        const Newteachinfo={
            id : Id,
            name : Name,
            subject : Subject,
            gender : Gender,
            
        }
console.log(Newteachinfo)
setTeacher([...teacher, Newteachinfo])
setId("")
setName("")
setSubject("")
setGender("")
navigate("/Teachers")
    }
    return(
        <Base title={"Add New Teacher Information"} descriptions={"Fill Each Field"}>
        <div className="txtbx">
            <h3>Add Teacher Information</h3>
            <input placeholder="Enter Teacher ID" type="number" value={Id}
            onChange={(e)=>setId(e.target.value)}/>
            <input placeholder="Enter Teacher Name" type="text" value={Name}
            onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Enter Teacher Batch" type="text" value={Subject}
            onChange={(e)=>setSubject(e.target.value)}/>
            <input placeholder="Enter Teacher Gender" type="text" value={Gender}
            onChange={(e)=>setGender(e.target.value)}/>
            
            <div className="teach-button">
            <button onClick={handleTeachAdd}>Add Informatoin</button>
            </div>
        </div>
        </Base>
    )

}

export default Teacheradd;