import React, { useContext, useEffect, useState } from "react";
import Base from "../Base/base";
import { useNavigate, useParams } from "react-router-dom";
import { ctxt } from "../App";


function Editupdateinfo(){
    const {students, setStudents}=useContext(ctxt)
    const {idNo}=useParams()
    // console.log("newid", idNo);
    const navigate=useNavigate();
    const [Id, setId]=useState("")
    const [Name, setName]=useState("")
    const [Batch, setBatch]=useState("")
    const [Education, setEducation]=useState("")
    const [Gender, setGender]=useState("")
    const [Skills, setSkills]=useState("")


    useEffect(()=>{
        // console.log(students)
        const studentdata = students.find(stud=> stud.id === idNo);      
    
        if(studentdata){
        setId(studentdata.id)
        setName(studentdata.name)
        setBatch(studentdata.batch)
        setEducation(studentdata.education)
        setGender(studentdata.gender)
        setSkills(studentdata.skills)
    }
    
    }, [idNo, students])
    const updateStudent = () => {
        
        const studIndex=students.findIndex((stud)=>stud.id ===idNo);
        console.log(studIndex);
        const newupdatestud={
            id : Id,
            name : Name,
            batch : Batch,
            education : Education,
            gender : Gender,
            skills : Skills
        }
        console.log(newupdatestud);
        students[studIndex]=newupdatestud
        setStudents([...students])
        navigate("/Students")
        
    }
        return(
            <Base
            title={"Edit and Update"}
            descriptions={"You can Edit and update information"}>
        <div className="txtbx">
            <h3>Update Student Information</h3>
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
            <div className="stud-button">
            <button onClick={updateStudent}>Update</button>
            </div>
        </div>
        </Base>
    )

}

export default Editupdateinfo;