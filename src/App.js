import { createContext, useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { data } from './Data/data';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashbord';
import Addinfo from './Components/AddInfo';
import Editupdateinfo from './Components/EditUpdateInfo';
import Wrongpage from './Components/Wrongpage';
import { teacherdata } from './Data/teacherdata';
import Teachers from './Components/teacher';
import Teacheradd from './Components/Teacheradd';
import TeacherEditupdate from './Components/TeacherEditUpdate';

export const ctxt=createContext(null);


function App() {
  const[students, setStudents] = useState(data);
  const[teacher, setTeacher] = useState(teacherdata);
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
