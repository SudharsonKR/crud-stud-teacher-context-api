import React, { useContext, useEffect, useState } from "react";
import Base from "../Base/base";
import { useNavigate, useParams } from "react-router-dom";
import { ctxt } from "../App";


function TeacherEditupdate(){
    const {teacher, setTeacher}=useContext(ctxt)
    const {idNo1}=useParams()
    // console.log("newid", idNo1);
    const navigate=useNavigate();
    const [Id, setId]=useState("")
    const [Name, setName]=useState("")
    const [Subject, setSubject]=useState("")
    const [Gender, setGender]=useState("")
    
    useEffect(()=>{
        console.log(teacher)
        const teacherdata = teacher.find(teach=> teach.id === idNo1);      
    
        if(teacherdata){
        setId(teacherdata.id)
        setName(teacherdata.name)
        setSubject(teacherdata.subject)
        setGender(teacherdata.gender)
        
    }
    else{
        console.log("Not found teacher data")
    }
    }, [idNo1, teacher])
    const updateTeacher = () => {
        
        const teachIndex=teacher.findIndex((teach)=>teach.id ===idNo1);
        console.log(teachIndex);
        const newupdateteach={
            id : Id,
            name : Name,
            subject : Subject,
            gender : Gender,
            
        }
        console.log(newupdateteach);
        teacher[teachIndex]=newupdateteach
        setTeacher([...teacher])
        navigate("/Teachers")
        
    }
        return(
            <Base
            title={"Edit and Update"}
            descriptions={"You can Edit and update information"}>
        <div className="txtbx">
            <h3>Update Teacher Information</h3>
            <input placeholder="Enter Teacher ID" type="number" value={Id}
            onChange={(e)=>setId(e.target.value)}/>
            <input placeholder="Enter Teacher Name" type="text" value={Name}
            onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Enter Teacher Subject" type="text" value={Subject}
            onChange={(e)=>setSubject(e.target.value)}/>
            <input placeholder="Enter Teacher Gender" type="text" value={Gender}
            onChange={(e)=>setGender(e.target.value)}/>
            <div className=".stud-button">
            <button onClick={updateTeacher}>Update</button>
            </div>
        </div>
        </Base>
    )

}

export default TeacherEditupdate
    ;