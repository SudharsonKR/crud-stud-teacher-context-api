import { createContext, useEffect, useState } from 'react';
import './App.css';
import Students from './Components/Students';
// import { data } from './Data/data';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashbord';
import Addinfo from './Components/AddInfo';
import Editupdateinfo from './Components/EditUpdateInfo';
import Wrongpage from './Components/Wrongpage';
// import { teacherdata } from './Data/teacherdata';
import Teachers from './Components/teacher';
import Teacheradd from './Components/Teacheradd';
import TeacherEditupdate from './Components/TeacherEditUpdate';

export const ctxt=createContext(null);



function App() {

  const[students, setStudents] = useState([]);
  const[teacher, setTeacher] = useState([]);
  useEffect(()=>{
    const getStudents=async()=>{
      const response=await fetch("https://student-and-mentor-68vx.onrender.com/students/all", {method:"GET",})
      const apiData=await response.json();
      if(apiData)
      {
        setStudents(apiData.data)
      }
    }
    getStudents()
  },[])
  useEffect(()=>{
    const getTeachers=async()=>{
      const response2=await fetch("https://student-and-mentor-68vx.onrender.com/mentors/Allmentors", {method:"GET",})
      const apiTeacherData=await response2.json();
      if(apiTeacherData)
      {
        setTeacher(apiTeacherData.data)
      }
    }
    getTeachers()
  },[])
  return (
    <div className="App">
      <ctxt.Provider value={{students, setStudents, teacher, setTeacher}}>
      <Routes>
      
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/Students' element={<Students/>}/>
        <Route exact path='/addinfo' element={<Addinfo/>} />
        <Route exact path='/editinfo/:idNo' element={<Editupdateinfo/>} />
        <Route exact path='/Teachers' element={<Teachers/>}/>
        <Route exact path='/Teacheradd' element={<Teacheradd/>} />
        <Route exact path='/teachereditupdate/:idNo1' element={<TeacherEditupdate/>} />
        <Route path='*' element={<Wrongpage/>}/>
        
        </Routes>
        </ctxt.Provider>
      {/* <Students 
      students={students}
      setStudents={setStudents}
      /> */}
    
    </div>
  );
}

export default App;
