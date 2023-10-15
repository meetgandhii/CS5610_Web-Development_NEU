import { Link, useParams, useLocation } from "react-router-dom";
import "./stylesheet.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (

/* 

<ul class="account-navigation-ul">
                                <li class="account-navigation-li"><a class="account-navigation-a "
                                        href="/Kanbas/Courses/Home/index.html">Home</a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Modules<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Piazza<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Zoom
                                        Meetings<i style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a"
                                        href="/Kanbas/Courses/Assignments/screen.html">Assignments</a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Quizzes<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li active-account-link-border"><a
                                        class="account-navigation-a"
                                        href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">People<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Panopto
                                        Video<i style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Discussions<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a"
                                        href="#">Announcements<i style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Pages<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Files<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Rubrics<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Outcomes<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a"
                                        href="#">Collaborations<i style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a></li>
                                <li class="account-navigation-li"><a class="account-navigation-a" href="#">Syllabus<i
                                            style="color: rgba(70, 70, 70, 0.3);"
                                            class="fa-flip-horizontal fa fa-eye-slash float-end"></i></a>
                                </li>
                                <li class="account-navigation-li"><a class="account-navigation-a"
                                        href="/Kanbas/Courses/Settings/course_details.html">Settings</a></li>

                            </ul>

*/

<ul className="account-navigation-ul">
      {links.map((link, index) => (
        <li className={`account-navigation-li ${pathname.includes(link) && "active-account-link-border"}`}>
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active-account-link-color"}`}>
          {link}
        </Link>
        </li>
      ))}
    </ul>
  );
}


export default CourseNavigation;

