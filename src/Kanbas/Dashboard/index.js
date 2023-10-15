import React from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import "./stylesheet.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
function Dashboard() {
    const courses = db.courses;
    return (
        <div style={
            {
                width: "100%",
                display: "inline-block"
            }
        }>
            <div className="list-group">
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
