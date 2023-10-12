import React, { useContext } from "react";
import Base from "../Base/base";
import { useNavigate } from "react-router-dom";
import { ctxt } from "../App";
// import Editupdateinfo from "./EditUpdateInfo";


const Students=()=>{
    const {students, setStudents}=useContext(ctxt)
    
    // const [editstud, setEditstud]=useState('');
    const navigate = useNavigate();
    const deleteStud=(StudentID)=>{
        const removeStud=students.filter((studid, idx)=>studid.id !==StudentID);
        setStudents(removeStud)
    }
    
    
return(
<Base 
title={"Students Information"}
descriptions={"Students info displayed here"}>
   
   
    
    {/* <Editupdateinfo
    editstud={editstud}
    students={students}
    setStudents={setStudents}/> */}

    <div className="stud-datas">
        {students.map((stud, idx)=>(
        <div className="stud-card" key={stud.id}>            
            <h3>ID. No.: {stud.id}</h3>
            <h3>Name: {stud.name}</h3>
            <p>Batch: {stud.batch}</p>
            <p>Education: {stud.education}</p>
            <p>Gender: {stud.gender}</p>
            <p>Skills: {stud.skills}</p>
            <div className="stud-button">
                <button onClick={()=>navigate(`/editinfo/${stud.id}`)}>Edit</button>
                <button onClick={()=>deleteStud(stud.id)}>Delete</button>
                
            </div>       
        </div>
    
    ))}
    </div>
</Base>
    )
}
export default Students;