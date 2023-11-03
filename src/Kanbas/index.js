import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        "name": "New Course",
        "number": "RS45600",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "secondLine": "CS4550.12631.202410",
        "thirdLine": "202410_1 Fall 2023 Semester Full Term"
    });

    const addNewCourse = () => {
        setCourses([
            ...courses, {
                ...course,
                _id: new Date().getTime()
            }
        ]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }));
    };
  return (<Provider store={store}>

    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />

         <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />

        </Routes>
      </div>
    </div>
    </Provider>

  );
}

export default Kanbas;

