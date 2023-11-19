import {React, useState} from "react";
import {Link} from "react-router-dom";
import "./stylesheet.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Dashboard({
    courses,
    course,
    setCourse,
    addCourse,
    deleteCourse,
    updateCourse
}) {

    return (
        <div style={
            {width: "100%"}
        }>

            <div style={
                {
                    width: "30%",
                    margin: "30px",
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }
            }>
                <input value={
                        course.name
                    }
                    className="form-control"
                    style={
                        {
                            marginBottom: "10px",
                            padding: "5px",
                            width: "100%"
                        }
                    }
                    onChange={
                        e => setCourse({
                            ...course,
                            name: e.target.value
                        })
                    }/>
                <input value={
                        course.secondLine
                    }
                    className="form-control"
                    style={
                        {
                            marginBottom: "10px",
                            padding: "5px",
                            width: "100%"
                        }
                    }
                    onChange={
                        e => setCourse({
                            ...course,
                            secondLine: e.target.value
                        })
                    }/>
                <input value={
                        course.thirdLine
                    }
                    className="form-control"
                    style={
                        {
                            marginBottom: "10px",
                            padding: "5px",
                            width: "100%"
                        }
                    }
                    onChange={
                        e => setCourse({
                            ...course,
                            thirdLine: e.target.value
                        })
                    }/>
                <input value={
                        course.startDate
                    }
                    className="form-control"
                    type="date"
                    style={
                        {
                            marginBottom: "10px",
                            padding: "5px",
                            width: "100%"
                        }
                    }
                    onChange={
                        e => setCourse({
                            ...course,
                            startDate: e.target.value
                        })
                    }/>
                <input value={
                        course.endDate
                    }
                    className="form-control"
                    type="date"
                    style={
                        {
                            marginBottom: "10px",
                            padding: "5px",
                            width: "100%"
                        }
                    }
                    onChange={
                        e => setCourse({
                            ...course,
                            endDate: e.target.value
                        })
                    }/>
                <button style={
                        {
                            backgroundColor: "#007bff",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: "10px"
                        }
                    }
                    onClick={addCourse}>
                    Add
                </button>
                <button style={
                        {
                            backgroundColor: "#28a745",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }
                    }
                    onClick={updateCourse}>
                    Update
                </button>
            </div>

            <div className="row">
                {
                courses.map((course) => (
                    <div key={
                            course._id
                        }
                        className="card d-flex col-lg-4 col-md-3 col-sm-2 col-xs-1"
                        style={
                            {
                                width: "260px",
                                margin: "17.5px",
                                padding: 0
                            }
                    }>
                        <img className="card-img-top"
                            style={
                                {
                                    backgroundColor: "rgb(21, 112, 170)",
                                    height: "144px",
                                    width: "260px"
                                }
                            }/>
                        <div className="card-body">
                            <Link to={
                                    `/Kanbas/Courses/${
                                        course._id
                                    }`
                                }
                                className="list-group-item">
                                <button style={
                                        {
                                            backgroundColor: "#ff1100",
                                            color: "#fff",
                                            padding: "10px 20px",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            marginRight: "10px"
                                        }
                                    }
                                    onClick={
                                        
                                            deleteCourse
                                        
                                }>
                                    Delete
                                </button>
                                <button style={
                                        {
                                            backgroundColor: "#28a745",
                                            color: "#fff",
                                            padding: "10px 20px",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer"
                                        }
                                    }
                                    onClick={
                                        (event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }
                                }>
                                    Edit
                                </button>

                                <div>
                                    <p className="card-text"
                                        style={
                                            {color: "rgb(21, 112, 170)"}
                                    }>
                                        {
                                        course.name
                                    } </p>
                                    <h4 style={
                                        {
                                            color: "#777",
                                            fontSize: "large"
                                        }
                                    }>
                                        {
                                        course.secondLine
                                    } </h4>
                                    <p style={
                                        {
                                            color: "#999999",
                                            fontSize: "small"
                                        }
                                    }>
                                        {
                                        course.thirdLine
                                    } </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            } </div>
        </div>
    );
}

export default Dashboard;
