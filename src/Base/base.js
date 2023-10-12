import React from "react";
import { useNavigate } from "react-router-dom";

function Base({title, descriptions, children}){
    const navigate=useNavigate()
return(
    <div className="main-container">
        <header>
            <nav className="nav">
            <div>CRUD APPLICATION TYPE</div>
            <div className="nav-buttons">
            <button onClick={()=>navigate("/")}>Dashbord/Home</button>
            <button onClick={()=>navigate("/Students")}>Students Data</button>
            <button onClick={()=>navigate("/addinfo")}>Add Students</button>
            <button onClick={()=>navigate("/Teachers")}>Teachers Data</button>
            <button onClick={()=>navigate("/Teacheradd")}>Add Teacher</button>
            
            </div>
            </nav>
        </header>
        <main>
            <h1>{title}</h1>
            <h3>{descriptions}</h3>
            <div className="contents">
                {children}
            </div>
        </main>
    </div>
);
}
export default Base;