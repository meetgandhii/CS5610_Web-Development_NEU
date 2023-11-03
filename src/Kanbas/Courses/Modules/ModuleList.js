import React, {useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
import {useSelector, useDispatch} from "react-redux";
import {addModule, deleteModule, updateModule, setModule} from "../Modules/moduleReducer.js";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="list-group">
            <li className="list-group-item" style={{display: "flex", alignItems: "center"}}>
                <button style={
                        {
                            backgroundColor: "#00bfff",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: "10px"
                        }
                    }
                    onClick={
                        () => dispatch(addModule({
                            ... module,
                            course: courseId
                        }))
                }>
                    Add</button>
                <button onClick={
                        () => dispatch(updateModule(module))
                    }
                    style={
                        {
                            backgroundColor: "#28a745",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: "10px"
                        }
                }>

                    Update
                </button>

                <input style={{marginRight: "10px"}} value={
                        module.name
                    }
                    onChange={
                        (e) => dispatch(setModule({
                            ... module,
                            name: e.target.value
                        }))
                    }/>
                <textarea value={
                        module.sections
                    }
                    onChange={
                        (e) => dispatch(setModule({
                            ... module,
                            section: e.target.value
                        }))
                    }/>
            </li>

            {
            modules.filter((module) => module.course === courseId).map((module, index) => (
                <li key={index}
                    className="list-group-item">
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
                            () => dispatch(setModule(module))
                    }>

                        Edit
                    </button>

                    <button style={
                            {
                                backgroundColor: "#ff1100",
                                color: "#fff",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginRight: "10px",
                                margin: "10px"
                            }
                        }
                        onClick={
                            () => dispatch(deleteModule(module._id))
                    }>

                        Delete
                    </button>

                    <a className="list-group-item list-group-item-secondary">
                        <i className="fa fa-ellipsis-v float-end"
                            style={
                                {marginLeft: "5px"}
                        }></i>
                        <i className="fa fa-plus float-end"
                            style={
                                {marginLeft: "5px"}
                        }></i>
                        <input type="checkbox" checked className="float-end custom-control-input"
                            style={
                                {marginLeft: "5px"}
                            }/> {
                        module.name
                    } </a>
                    <div class="list-group">
                        {
                        module.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <a className="list-group-item">
                                    <FontAwesomeIcon icon={faGripVertical}
                                        className="needsSpaceOnRight"/>

                                    <i className="fa fa-ellipsis-v float-end"
                                        style={
                                            {marginLeft: "5px"}
                                    }></i>
                                    <input type="checkbox" checked className="float-end custom-control-input"
                                        style={
                                            {marginLeft: "5px"}
                                        }/> {
                                    section.heading
                                } </a>
                                <ul className="list-group">
                                    {
                                    section.points.map((point, pointIndex) => (
                                        <li key={pointIndex}
                                            className="list-group-item"
                                            style={
                                                {paddingLeft: "35px"}
                                        }>
                                            <FontAwesomeIcon icon={faGripVertical}
                                                className="needsSpaceOnRight"/>
                                            <i className="fa fa-ellipsis-v float-end"
                                                style={
                                                    {marginLeft: "5px"}
                                            }></i>
                                            <input type="checkbox" checked className="float-end custom-control-input"
                                                style={
                                                    {marginLeft: "5px"}
                                                }/> {point} </li>
                                    ))
                                } </ul>
                            </div>
                        ))
                    } </div>
                </li>
            ))
        } </div>
    );
}
export default ModuleList;
