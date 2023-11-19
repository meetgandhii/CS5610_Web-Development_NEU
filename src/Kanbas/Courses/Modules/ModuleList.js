import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "../Modules/moduleReducer.js";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    return (
        <div className="list-group">
            <li className="list-group-item"
                style={
                    {
                        display: "flex",
                        alignItems: "center"
                    }
                }>
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
                    onClick={handleAddModule}>
                    Add</button>
                <button onClick={() => handleUpdateModule(module._id)}
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

                <input style={
                    { marginRight: "10px" }
                }
                    value={
                        module.name
                    }
                    onChange={
                        (e) => dispatch(setModule({
                            ...module,
                            name: e.target.value
                        }))
                    } />
                <textarea value={
                    module.heading
                }
                    onChange={
                        (e) => dispatch(setModule({
                            ...module,
                            heading: e.target.value
                        }))
                    } />
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
                            onClick={() => handleDeleteModule(module._id)}>

                            Delete
                        </button>

                        <a className="list-group-item list-group-item-secondary">
                            <i className="fa fa-ellipsis-v float-end"
                                style={
                                    { marginLeft: "5px" }
                                }></i>
                            <i className="fa fa-plus float-end"
                                style={
                                    { marginLeft: "5px" }
                                }></i>
                            <input type="checkbox" checked className="float-end custom-control-input"
                                style={
                                    { marginLeft: "5px" }
                                } /> {
                                module.name
                            } </a>
                        <div class="list-group">

                            <div>
                                <a className="list-group-item">
                                    <FontAwesomeIcon icon={faGripVertical}
                                        className="needsSpaceOnRight" />

                                    <i className="fa fa-ellipsis-v float-end"
                                        style={
                                            { marginLeft: "5px" }
                                        }></i>
                                    <input type="checkbox" checked className="float-end custom-control-input"
                                        style={
                                            { marginLeft: "5px" }
                                        } /> {
                                        module.heading
                                    } </a>
                                <ul className="list-group">

                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points2
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points3
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points4
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points5
                                        } </li>

                                </ul>
                                <a className="list-group-item">
                                    <FontAwesomeIcon icon={faGripVertical}
                                        className="needsSpaceOnRight" />

                                    <i className="fa fa-ellipsis-v float-end"
                                        style={
                                            { marginLeft: "5px" }
                                        }></i>
                                    <input type="checkbox" checked className="float-end custom-control-input"
                                        style={
                                            { marginLeft: "5px" }
                                        } /> {
                                        module.heading1
                                    } </a>
                                <ul className="list-group">

                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points6
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points7
                                        } </li>


                                </ul>
                                <a className="list-group-item">
                                    <FontAwesomeIcon icon={faGripVertical}
                                        className="needsSpaceOnRight" />

                                    <i className="fa fa-ellipsis-v float-end"
                                        style={
                                            { marginLeft: "5px" }
                                        }></i>
                                    <input type="checkbox" checked className="float-end custom-control-input"
                                        style={
                                            { marginLeft: "5px" }
                                        } /> {
                                        module.heading2
                                    } </a>
                                <ul className="list-group">

                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points8
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points9
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points10
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points11
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points12
                                        } </li>
                                    <li className="list-group-item"
                                        style={
                                            { paddingLeft: "35px" }
                                        }>
                                        <FontAwesomeIcon icon={faGripVertical}
                                            className="needsSpaceOnRight" />
                                        <i className="fa fa-ellipsis-v float-end"
                                            style={
                                                { marginLeft: "5px" }
                                            }></i>
                                        <input type="checkbox" checked className="float-end custom-control-input"
                                            style={
                                                { marginLeft: "5px" }
                                            } /> {
                                            module.points13
                                        } </li>


                                </ul>
                            </div>

                        </div>
                    </li>
                ))
            } </div>
    );
}
export default ModuleList;
