import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import { faCog, faFileImport } from "@fortawesome/free-solid-svg-icons";


function Grades() {
    const { courseId } = useParams();
    const [jsonData, setJsonData] = useState([]);
    const [tableHead, setTableHead] = useState([]);
    const BASE_API = process.env.REACT_APP_BASE_API_URL;
    const URL_JSON = `${BASE_API}/api/courses`;
    const findAllCourses = async () => {
        try {
            const response = await axios.get( `${URL_JSON}/${courseId}/enrollments`);
            const response_table_head = await axios.get( `${URL_JSON}/${courseId}/gradestableHead`);
            setJsonData(response.data);
            setTableHead(response_table_head.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        findAllCourses();
    }, [courseId]);

    return (
        <div style={
            { width: "1000px" }
        }>

            <h1>Grades</h1>
            <div className="table-responsive">
                <table style={
                    { width: '100%' }
                }>
                    <tr>
                        <td>
                            <button className="float-end btn assignment-btn"><FontAwesomeIcon icon={faCog} /></button>
                            <select className="float-end assignment-btn"
                                style={
                                    {
                                        WebkitAppearance: 'menulist-button',
                                        height: '37px'
                                    }
                                }>
                                <option style={
                                    { fontFamily: "'Font Awesome 5 Free', 'sans-serif'" }
                                }>&#xf56e; Export</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </select>
                            <button className="btn float-end assignment-btn"><FontAwesomeIcon icon={faFileImport} />
                                Import</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table style={
                                { width: '100%' }
                            }>
                                <tr style={
                                    { width: '100%' }
                                }>
                                    <td style={
                                        { padding: '0 10px 10px 0' }
                                    }>
                                        <h4 style={
                                            { fontWeight: 'bold' }
                                        }>Student Names</h4>
                                        <input type="text" className="icon_input"
                                            style={
                                                { width: '100%' }
                                            }
                                            placeholder="Search Students"
                                            title="Type the name of the student to search for" />
                                    </td>
                                    <td style={
                                        { padding: '0 0 10px 10px' }
                                    }>
                                        <h4 style={
                                            { fontWeight: 'bold' }
                                        }>Assignment Names</h4>
                                        <input style={
                                            { width: '100%' }
                                        }
                                            placeholder="Search Assignments"
                                            title="Type the name of the assignment to search for" />
                                    </td>
                                </tr>
                            </table>
                            <button className="btn assignment-btn">
                                <i className="fa fa-filter"></i>
                                Apply Filters</button><br /><br />
                            <table className="table table-striped table-bordered grades-table"
                                style={
                                    { width: '100%' }
                                }>
                                <tr>
                                    <td style={
                                        {
                                            width: '20%',
                                            color: 'black',
                                            verticalAlign: 'middle'
                                        }
                                    }>Student Name</td>
                                    {tableHead.map((each) => {
                                        
                                            const head = each;
                                            return (<td style={
                                                { width: '15%' }
                                            }>
                                                {
                                                    head.title
                                                }<br /><span style={
                                                    { fontSize: 'smaller' }
                                                }>Out of 100</span>
                                            </td>)
                                        })
                                    }
                                </tr>
                                {
                                    jsonData.map((enrollment) => {
                                        const assignments = enrollment.selectiveGrades;
                                        const user = enrollment.user;
                                        return (
                                            <tr key={user._id}>
                                                <td>{
                                                    user.firstName + " " 
                                                }
                                                    {
                                                        user.lastName
                                                    }</td>
                                                {
                                                    
                                                    assignments.map((assignment, index) => {
                                                        const gradee = assignment[0].grade;
                                                        return (
                                                            <td key={index}>
                                                                {gradee}
                                                            </td>
                                                        );
                                                    })}
                                                 </tr>
                                        );
                                    })
                                } </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default Grades;
