import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment, setAssignments
} from "./assignmentsReducer";

import * as client from "./client";

function Assignments() {
    
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
        dispatch(addAssignment(assignment));
    });
};
const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
    });
};
const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
};
useEffect(() => {
    client.findAssignmentsForCourse(courseId)
        .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
}, [courseId]);


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
      <button onClick={handleAddAssignment} className="assignment-btn float-end btn btn-danger">
        <i className="fa fa-plus"></i> Assignment
      </button>
      <button onClick={() => handleUpdateAssignment(assignment._id)}>
                Update
        </button>

      <button className="assignment-btn float-end btn">
        <i className="fa fa-plus"></i> Group
      </button>
      <hr />
    </div>
        <div className="list-group">
        <li className="list-group-item">
      </li>

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
                assignments.filter((assignment) => assignment.course === courseId).map((assignment, index) => (
                    <div key={index} style={{display: "flex", alignItems: "center"}}>

                        
                    <Link onClick={() => dispatch(setAssignment(assignment))}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                        style={
                            {alignItems: 'center', display: 'inline-block', width: '90%'}
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
                        
                            <div>
                                <span style={
                                    {
                                        marginLeft: '55px',
                                        color: 'rgba(70,70,70,0.7)'
                                    }
                                }>
                                    {assignment.subtitle}</span><br/>
                                    <span style={
                                    {
                                        marginLeft: '55px',
                                        color: 'rgba(70,70,70,0.7)'
                                    }
                                }>
                                    {assignment.subtitle2} |</span>
                                    <span style={
                                    {
                                        
                                        color: 'rgba(70,70,70,0.7)'
                                    }
                                }>
                                    {assignment.subtitle3}</span>
                                    <br/>
                            </div>
                       
                    } </Link>
                    <div style={{border: '1px solid #dee2e6', padding: '15px'}}>
                    <button style={{display: "inline-block", backgroundColor: "#ff1100",
                                color: "#fff",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                
                                margin: "10px"}}
              onClick={() => {if(window.confirm('Are you sure to delete this record?')){ dispatch(handleDeleteAssignment(assignment._id))}}}>

              Delete
            </button></div>
                    </div>
                ))
            } </div>
        </div></div>
    );
}
export default Assignments;
