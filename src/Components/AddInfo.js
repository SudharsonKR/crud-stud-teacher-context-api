import React, { useContext, useState } from "react";
import Base from "../Base/base";
import { useNavigate } from "react-router-dom";
import { ctxt } from "../App";

function Addinfo(){
    const {students, setStudents}=useContext(ctxt)
    const navigage = useNavigate();
    const [Id, setId]=useState("")
    const [Name, setName]=useState("")
    const [Batch, setBatch]=useState("")
    const [Education, setEducation]=useState("")
    const [Gender, setGender]=useState("")
    const [Skills, setSkills]=useState("")

    const handleAddinfo=()=>{
        const Newstudinfo={
            id : Id,
            name : Name,
            batch : Batch,
            education : Education,
            gender : Gender,
            skills : Skills
        }
console.log(Newstudinfo)
setStudents([...students, Newstudinfo])
setId("")
setName("")
setBatch("")
setEducation("")
setGender("")
setSkills("")
navigage("/Students")
    }
    return(
        <Base title={"Add New Students Information"} descriptions={"Fill Each Field"}>
        <div className="txtbx">
            <h3>Add Student Information</h3>
            <input placeholder="Enter Student ID" type="number" value={Id}
            onChange={(e)=>setId(e.target.value)}/>
            <input placeholder="Enter Student Name" type="text" value={Name}
            onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Enter Student Batch" type="text" value={Batch}
            onChange={(e)=>setBatch(e.target.value)}/>
            <input placeholder="Enter Student Education" type="text" value={Education}
            onChange={(e)=>setEducation(e.target.value)}/>
            <input placeholder="Enter Student Gender" type="text" value={Gender}
            onChange={(e)=>setGender(e.target.value)}/>
            <input placeholder="Enter Student Skills" type="text" value={Skills}
            onChange={(e)=>setSkills(e.target.value)}/>
            <div className="teach-button">
            <button onClick={handleAddinfo}>Add Informatoin</button>
            </div>
        </div>
        </Base>
    )

}

export default Addinfo;