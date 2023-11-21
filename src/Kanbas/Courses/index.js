import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { Link, useLocation } from "react-router-dom";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {

  const { courseId } = useParams();
  const URL = "https://kanbas-server-t70p.onrender.com/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  const { pathname } = useLocation();
  var directories = pathname.split("/");
var lastDirecotry = directories[(directories.length - 1)];
useEffect(() => {
  findCourseById(courseId);
}, [courseId]);

  return (
    <div>
      
     <table>
      <tr>
   
      <nav style={{ '--bs-breadcrumb-divider': '>', margin:"10px", width: "1080px" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#" style={{ textDecoration: 'none', color: 'rgba(200, 20, 20, 1)' }}>
            <i className="fa fa-bars"></i> CS5610.11550.202410 {">"}
          </a>
        </li>
        <li className="breadcrumb-item" aria-current="page">{lastDirecotry}</li>
      </ol>
    </nav>
    <hr/>
   
      </tr>
      </table>
      <table>
      <tr>
        <td valign="top" width={200}>
        <CourseNavigation />
        </td>
        <td>
        <div>
        <div className="overflow-y-scroll ">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
        </td>
      </tr>
     </table>
     
      
    </div>
  );
}


export default Courses;