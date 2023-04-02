
import './App.css';
import Navbar from "./components/Navbar"
import AddUser from './Pages/AddUser';
import User from "./Pages/Users"
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greport from "../src/components/GeneralReport"
import Sreport from "../src/components/WithVideoReport"



function App() {
  return (
    <div className="App bg">  
         <Navbar/>
         <BrowserRouter>
        <Routes>
        <Route path="adduser" element={<AddUser/>}/>


        <Route path="user" element={<User/>}/>
        <Route path="greport" element={<Greport/>}/>
        <Route path="sreport" element={<Sreport/>}/>
        </Routes>
         </BrowserRouter>
         {/* <AddUser/> */}
      </div>
  );
}

export default App;
