import React, {useState} from 'react'

import Navbar from './Navbar.js';
import Text from './Text.js';
import Alert from './alert.js';
import About from './About.js';
import {
  Route,
  Routes,
} from "react-router-dom";

function App(){

    const displayAlert=(message)=>{
        showAlert({
            message:message
        })

        setTimeout(() => {
            showAlert(null);
        }, 1500);
    }

    const toggle=()=>{
        if(mode==="dark"){
            setmode("light");
            document.body.style.backgroundColor="#DAE9FF";
            displayAlert("Light Mode Enable");
        }
        else{
            setmode("dark");
            document.body.style.backgroundColor="#252e48";
            displayAlert("Dark Mode Enable");
        }
    }

    const [alert,showAlert]=useState(null);
    const [mode, setmode] = useState("light");
    return(    
    <>
    <Navbar title="WordCounter" mode={mode} toggleMode={toggle}/>
    <Alert Alert={alert}/>

    <Routes>
    <Route path="/about" element={<About mode={mode}/>}/>
    <Route path="/" element={<Text mode={mode} showAlert={displayAlert}/>}/>
    </Routes>
    </>
    )
};
export default App;