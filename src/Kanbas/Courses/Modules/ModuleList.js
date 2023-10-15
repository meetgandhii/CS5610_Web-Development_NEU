import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./stylesheet.css"
function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;
    return (
        <div className="list-group">
            {
            modules.filter((module) => module.course === courseId).map((module, index) => (
                <li key={index}
                    className="list-group-item">
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
