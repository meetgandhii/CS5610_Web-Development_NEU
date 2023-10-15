import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import "./stylesheet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
    faFileImport
} from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (

/*

 <div>
      <table>
        <tr>
          <div
            style={{
              marginBottom: "20px",
              justifyContent: "end",
              textAlign: "end",
              textAlign: "right",
            }}
          >
            <button>Collapse All</button>
            <button>View Progress</button>
            <div className="dropdown" style={{ display: "inline" }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Publish All
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Publish All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Publish All Items and Modules
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Unpublish
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn-danger">+Module</button>
          </div>
        </tr>
        <hr />
        <tr>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-secondary">
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <i className="fa fa-plus float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Week 0 - INTRO
            </a>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <i className="fas fa-grip-vertical"></i>
                <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                <input
                  type="checkbox"
                  checked
                  className="float-end custom-control-input"
                  style={{ marginLeft: "5px" }}
                />
                LEARNING OBJECTIVES
              </a>
              <ul className="list-group">
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Introduction to the course
                </li>
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Learn what is Web Development
                </li>
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Creating a development environment
                </li>
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Creating a Web Application
                </li>
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Get started with the 1st assignment
                </li>
              </ul>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <i className="fas fa-grip-vertical"></i>
                <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                <input
                  type="checkbox"
                  checked
                  className="float-end custom-control-input"
                  style={{ marginLeft: "5px" }}
                />
                READING
              </a>
              <ul className="list-group">
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="list-group-item" style={{ paddingLeft: "35px" }}>
                  <i className="fas fa-grip-vertical"></i>
                  <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
                  <input
                    type="checkbox"
                    checked
                    className="float-end custom-control-input"
                    style={{ marginLeft: "5px" }}
                  />
                  Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML
                </li>
              </ul>
            </div>
          </div>
        </tr>
      </table>

      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-secondary">
          <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
          <i className="fa fa-plus float-end" style={{ marginLeft: "5px" }}></i>
          <input
            type="checkbox"
            checked
            className="float-end custom-control-input"
            style={{ marginLeft: "5px" }}
          />
          Week 1
        </a>
        <div className="list-group">
          <a href="#" className="list-group-item">
            <i className="fas fa-grip-vertical"></i>
            <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
            <input
              type="checkbox"
              checked
              className="float-end custom-control-input"
              style={{ marginLeft: "5px" }}
            />
            LEARNING OBJECTIVES
          </a>
          <ul className="list-group">
            <li className="list-group-item" style={{ paddingLeft: "35px" }}>
              <i className="fas fa-grip-vertical"></i>
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Learn how to create user interfaces with HTML
            </li>
            <li className="list-group-item" style={{ paddingLeft: "35px" }}>
              <i className="fas fa-grip-vertical"></i>
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Keep working on assignment 1
            </li>
            <li className="list-group-item" style={{ paddingLeft: "35px" }}>
              <i className="fas fa-grip-vertical"></i>
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Deploy the assignment to Netlify
            </li>
          </ul>
        </div>
        <div className="list-group">
          <a href="#" className="list-group-item">
            <i className="fas fa-grip-vertical"></i>
            <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
            <input
              type="checkbox"
              checked
              className="float-end custom-control-input"
              style={{ marginLeft: "5px" }}
            />
            READING
          </a>
          <ul className="list-group">
            <li className="list-group-item" style={{ paddingLeft: "35px" }}>
              <i className="fas fa-grip-vertical"></i>
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="list-group-item" style={{ paddingLeft: "35px" }}>
              <i className="fas fa-grip-vertical"></i>
              <i className="fa fa-ellipsis-v float-end" style={{ marginLeft: "5px" }}></i>
              <input
                type="checkbox"
                checked
                className="float-end custom-control-input"
                style={{ marginLeft: "5px" }}
              />
              Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML
            </li>
          </ul>
        </div>
       
        </div>
        </div>

*/
<div>
      <table>
       
       
        <tr>

        <td valign="top" width={1000}  style={{paddingRight: "100px"}}>
          <div>
          <div
            style={{
              marginBottom: "20px",
              justifyContent: "end",
              textAlign: "end",
              textAlign: "right",
            }}
          >
            <button>Collapse All</button>
            <button>View Progress</button>
            <div className="dropdown" style={{ display: "inline" }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Publish All
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Publish All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Publish All Items and Modules
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Unpublish
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn-danger">+Module</button>
          </div>
          </div>
          <hr/>
          <div>
      <ModuleList />
     </div></td>

    <td valign="top" className="responsive-hide-right" width={500}>
      <h2>Course Status</h2>
      <div>
        <button className="btn btn-danger">
          <i className="fa fa-ban"></i> Unpublish
        </button>
        <button className="btn btn-success">
          <i className="fa fa-check"></i> Published
        </button>
      </div>
      <div className="list-group" style={{ width: '60%' }}>
        <div className="list-group-item list-group-item-primary">Import Options</div>
        <ul className="list-group">
          <li className="list-group-item">
          <FontAwesomeIcon icon={faFileImport} /> Import Existing Content
          </li>
          <li className="list-group-item">
            <i className="fa fa-sign-out"></i> Import from Commons
          </li>
          <li className="list-group-item">
            <i className="fa fa-crosshairs"></i> Choose Home Page
          </li>
          <li className="list-group-item">
            <i className="fa fa-bar-chart"></i> View Course Stream
          </li>
          <li className="list-group-item">
            <i className="fa fa-bullhorn"></i> New Announcement
          </li>
          <li className="list-group-item">
            <i className="fa fa-bar-chart"></i> New Analytics
          </li>
          <li className="list-group-item">
            <i className="fa fa-bell"></i> View Course Notifications
          </li>
        </ul>
      </div>
      <h2 style={{ width: '50%', fontSize: '18px', margin: '10px' }}>
        Coming Up{' '}
        <a
          style={{ textDecoration: 'none', color: 'rgba(200, 20, 20, 1)', fontSize: '15px' }}
          className="float-end"
          href="#"
        >
          View Calendar
        </a>
      </h2>
      <hr />
      <ul style={{ listStyle: 'none', textDecoration: 'none', width: '50%' }}>
        <FontAwesomeIcon icon={faCalendar} className="float-start" style={{ color: '#888', marginRight: '10px' }}/>
        <li>
          <a style={{ textDecoration: 'none', color: 'rgba(200, 20, 20, 1)' }} href="#">
            Lecture
          </a>
        </li>
        <li style={{ color: '#888', fontSize: '15px' }}>06 SP23 Lecture</li>
        <li style={{ marginBottom: '15px', color: '#888', fontSize: '15px' }}>Sep 11, 2023 at 6pm</li>
        <FontAwesomeIcon icon={faCalendar} className="float-start" style={{ color: '#888', marginRight: '10px' }}/>
       
        <li>
          <a style={{ textDecoration: 'none', color: 'rgba(200, 20, 20, 1)' }} href="#">
            CS4550 Lecture
          </a>
        </li>
        <li style={{ color: '#888', fontSize: '15px' }}>06 SP23 Lecture</li>
        <li style={{ marginBottom: '15px', color: '#888', fontSize: '15px' }}>Sep 11, 2023 at 6pm</li>
        <FontAwesomeIcon icon={faCalendar} className="float-start" style={{ color: '#888', marginRight: '10px' }}/>
        <li>
          <a style={{ textDecoration: 'none', color: 'rgba(200, 20, 20, 1)' }} href="#">
            CS5610 06 SP23 Lecture Sep 11 at 6pm
          </a>
        </li>
        <li style={{ color: '#888', fontSize: '15px' }}>06 SP23 Lecture</li>
        <li style={{ marginBottom: '15px', color: '#888', fontSize: '15px' }}>Sep 11, 2023 at 6pm</li>
      </ul>
    </td>
        </tr>
        </table>
    </div>
  );
}
export default Home;

