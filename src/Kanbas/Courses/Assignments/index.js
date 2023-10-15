import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";

function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    return (
      <div style={{width: "1000px"}}>
        <div>
      <input
        type="text"
        placeholder="Search for Assignment"
        className="assignment-input"
      />
      <button className="assignment-btn float-end btn">
        <i className="fa fa-ellipsis-v"></i>
      </button>
      <button className="assignment-btn float-end btn btn-danger">
        <i className="fa fa-plus"></i> Assignment
      </button>
      <button className="assignment-btn float-end btn">
        <i className="fa fa-plus"></i> Group
      </button>
      <hr />
    </div>
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-secondary">
            <FontAwesomeIcon icon={faGripVertical} className="needsSpaceOnRight"/>
                <i className="fa fa-ellipsis-v float-end"
                    style={
                        {marginLeft: '20px'}
                }></i>
                <i className="fa fa-plus float-end"
                    style={
                        {marginLeft: '10px'}
                }></i>
                <span className="assignment-rating float-end">40% of Total</span>

                <i className="fas fa-grip-vertical"></i>
                <i style={
                        {marginLeft: '5px'}
                    }
                    className="fa fa-caret-down"></i>
                Assignments
            </a>
            <div className="list-group">
                {
                courseAssignments.filter((module) => module.course === courseId).map((assignment, index) => (
                    <Link key={index}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                        style={
                            {alignItems: 'center'}
                    }>
                        <FontAwesomeIcon icon={faGripVertical} className="needsSpaceOnRight"/>
                        <i className="fa fa-edit"
                            style={
                                {
                                    marginRight: '10px',
                                    color: '#28a745'
                                }
                        }></i>
                        <i className="fa fa-ellipsis-v float-end"
                            style={
                                {marginLeft: '10px'}
                        }></i>
                        <input type="checkbox" checked className="float-end custom-control-input"
                            style={
                                {marginLeft: '10px'}
                            }/>
                        <span style={
                            {fontSize: '20px'}
                        }>
                            {
                            assignment.title
                        }</span><br/> {
                        assignment.subtitle.map((subtitl, subIndex) => (
                            <div key={subIndex}>
                                <span style={
                                    {
                                        marginLeft: '55px',
                                        color: 'rgba(70,70,70,0.7)'
                                    }
                                }>
                                    {subtitl}</span><br/>
                            </div>
                        ))
                    } </Link>
                ))
            } </div>
        </div></div>
    );
}
export default Assignments;
