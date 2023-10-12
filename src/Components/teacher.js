import React, { useContext } from "react";
import Base from "../Base/base";
import { useNavigate } from "react-router-dom";
import { ctxt } from "../App";
// import Editupdateinfo from "./EditUpdateInfo";


const Teachers=()=>{
    const {teacher, setTeacher}=useContext(ctxt)
    console.log(teacher)
    // const [editstud, setEditstud]=useState('');
    const navigate = useNavigate();
    const deleteTeach=(TeacherID)=>{
        const removeTeach=teacher.filter((teachid, idx)=>teachid.id !==TeacherID);
        setTeacher(removeTeach)
    }
    
    
return(
<Base 
title={"Teachers Information"}
descriptions={"Teacher info displayed here"}>
   
   
    
    {/* <Editupdateinfo
    editstud={editstud}
    students={students}
    setStudents={setStudents}/> */}

    <div className="stud-datas">
        {teacher.map((teach, idx)=>(
            
        <div className="stud-card" key={teach.id}>            
            <h3>ID. No.: {teach.id}</h3>
            <h3>Name: {teach.name}</h3>
            <p>Subject: {teach.subject}</p>
            <p>Gender: {teach.gender}</p>
            
            <div className="stud-button">
                <button onClick={()=>navigate(`/teachereditupdate/${teach.id}`)}>Edit</button>
                <button onClick={()=>deleteTeach(teach.id)}>Delete</button>
                
            </div>       
        </div>
    
    ))}
    </div>
</Base>
    )
}
export default Teachers;