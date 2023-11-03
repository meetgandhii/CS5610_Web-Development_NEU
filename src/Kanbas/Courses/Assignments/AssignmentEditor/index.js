import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
  

function AssignmentEditor() {
    const {assignmentId} = useParams();
    
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
    

    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div style={{width:"1000px"}}>

            <button style={
                {border: '0 #fff solid'}
            }></button>
            <button className="assignment-btn float-end btn"
                style={
                    {marginRight: '15px'}
            }>
                <i className="fa fa-ellipsis-v"></i>
            </button>
            <span className="float-end"
                style={
                    {marginRight: '15px'}
            }>
                <i className="fa fa-check-circle"
                    style={
                        {color: 'green'}
                }></i>
                Published
            </span>
            <hr/>

            <div style={
                {textAlign: 'center'}
            }>
                <h5>Assignment Name</h5>
                <input value={assignment.title}
          onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
                 style={
                        {
                            width: '100%',
                            padding: '5px',
                            borderRadius: '5px',
                            border: '1px rgba(70,70,70,0.3) solid'
                        }
                    }
                    type="text"
                    /><br/><br/>
                <textarea style={
                        {
                            width: '100%',
                            borderRadius: '5px',
                            border: '1px rgba(70,70,70,0.3) solid'
                        }
                    }
                    rows="4" className="form-control mb-2"
                    value={assignment.subtitle}
          onChange={(e) => dispatch(setAssignment({ ...assignment, subtitle: e.target.value }))
        }>
                </textarea><br/>
                <textarea style={
                        {
                            width: '100%',
                            borderRadius: '5px',
                            border: '1px rgba(70,70,70,0.3) solid'
                        }
                    }
                    rows="4" className="form-control mb-2"
                    value={assignment.subtitle2}
          onChange={(e) => dispatch(setAssignment({ ...assignment, subtitle2: e.target.value }))
        }>
                </textarea><br/><br/>
                <table style={
                    {
                        borderCollapse: 'separate',
                        borderSpacing: '20px',
                        width: '100%'
                    }
                }>
                    <tr>
                        <td align="right" valign="top">
                            <label>Points</label>
                        </td>
                        <td align="left">
                            <input style={
                                    {
                                        width: '70%',
                                        borderRadius: '5px',
                                        border: '1px rgba(70,70,70,0.3) solid'
                                    }
                                }
                                type="text"
                                value={assignment.subtitle3}
          onChange={(e) => dispatch(setAssignment({ ...assignment, subtitle3: e.target.value }))
        }/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assignment Group</label>
                        </td>
                        <td align="left">
                            <select style={
                                {
                                    width: '70%',
                                    borderRadius: '5px'
                                }
                            }>
                                <option>ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Display Grade as</label>
                        </td>
                        <td align="left">
                            <select style={
                                {
                                    width: '70%',
                                    borderRadius: '5px'
                                }
                            }>
                                <option>Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Submission Type</label>
                        </td>
                        <td align="left">
                            <div style={
                                {
                                    border: '0.5px solid rgba(70,70,70,0.3)',
                                    width: '50%',
                                    padding: '10px',
                                    borderRadius: '5px'
                                }
                            }>
                                <select style={
                                    {
                                        width: '40%',
                                        borderRadius: '5px',
                                        marginBottom: '10px'
                                    }
                                }>
                                    <option>Online</option>
                                </select><br/>
                                <label style={
                                    {marginBottom: '10px'}
                                }>
                                    <strong>Online Entry Options</strong>
                                </label><br/>
                                <input type="checkbox"/><label style={
                                    {marginLeft: '10px'}
                                }>Text Entry</label><br/>
                                <input type="checkbox"/><label style={
                                    {marginLeft: '10px'}
                                }>Website URL</label><br/>
                                <input type="checkbox"/><label style={
                                    {marginLeft: '10px'}
                                }>Media Recordings</label><br/>
                                <input type="checkbox"/><label style={
                                    {marginLeft: '10px'}
                                }>Student Annotation</label><br/>
                                <input type="checkbox"/><label style={
                                    {marginLeft: '10px'}
                                }>File Uploads</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Submission Attempts</label>
                        </td>
                        <td align="left">
                            <select style={
                                {
                                    width: '70%',
                                    borderRadius: '5px'
                                }
                            }>
                                <option>Unlimited</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Plagiarism Review</label>
                        </td>
                        <td align="left">
                            <select style={
                                {
                                    width: '70%',
                                    borderRadius: '5px'
                                }
                            }>
                                <option>None</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Group Assignment</label>
                        </td>
                        <td align="left">
                            <input type="checkbox"/><label style={
                                {marginLeft: '5px'}
                            }>This is a group assignment</label><br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Peer Reviews</label>
                        </td>
                        <td align="left">
                            <input type="checkbox"/><label style={
                                {marginLeft: '5px'}
                            }>Require Peer Reviews</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assign</label>
                        </td>
                        <td align="left">
                            <div style={
                                {
                                    border: '0.5px solid rgba(70,70,70,0.3)',
                                    width: '50%',
                                    padding: '10px',
                                    borderRadius: '5px'
                                }
                            }>
                                <label>Assign to</label><br/>
                                <input style={
                                        {
                                            width: '80%',
                                            padding: '3px 10px',
                                            borderRadius: '5px',
                                            border: '1px rgba(70,70,70,0.3) solid'
                                        }
                                    }
                                    type="text"
                                    value="Everyone"/><br/>
                                <label>Due</label><br/>
                                <input style={
                                        {
                                            width: '80%',
                                            borderRadius: '5px',
                                            border: '1px rgba(70,70,70,0.3) solid'
                                        }
                                    }
                                    type="date"/><br/>
                                <label>Available from</label><br/>
                                <input style={
                                        {
                                            width: '80%',
                                            borderRadius: '5px',
                                            border: '1px rgba(70,70,70,0.3) solid'
                                        }
                                    }
                                    type="date"/><br/>
                                <label>Until</label><br/>
                                <input style={
                                        {
                                            width: '80%',
                                            borderRadius: '5px',
                                            border: '1px rgba(70,70,70,0.3) solid'
                                        }
                                    }
                                    type="date"/>
                            </div>
                        </td>
                    </tr>

            
                </table>
                <div style={{ margin: '0 50px 10px 50px' }}>
      <input type="checkbox" />
      <label style={{ marginLeft: '10px' }}>Notify users that this content has changed</label>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} onClick={() => dispatch(updateAssignment(assignment))} className="float-end btn btn-success">Save</Link>
      <Link  to={`/Kanbas/Courses/${courseId}/Assignments`}  className="float-end btn btn-danger">Cancel</Link>
    </div>
            </div>

            
        </div>
    );
}


export default AssignmentEditor;
