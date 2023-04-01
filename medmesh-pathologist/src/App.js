
import './App.css';
import Navbar from "./components/Navbar"
import AddUser from './Pages/AddUser';
import User from "./Pages/Users"
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App bg">  
         <Navbar/>
         <BrowserRouter>
        <Routes>
        <Route path="adduser" element={<AddUser/>}/>
        <Route path="user" element={<User/>}/>
        </Routes>
         </BrowserRouter>
         {/* <AddUser/> */}
      </div>
  );
}

export default App;
