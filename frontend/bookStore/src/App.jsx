

import Signup from "./components/Signup";
import Courses from "./COURSES/Courses";
import Home from "./HOME/Home";
import { Route, Routes } from  "react-router-dom"



export default function App() {
  return (
    <>
 <div className="dark:bg-slate-900 dark:text-white">
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
 </div>

  
 
 </>
  )
}