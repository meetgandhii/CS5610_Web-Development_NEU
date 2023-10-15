import "./stylesheet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faTachometerAlt,
    faBook,
    faCalendarAlt,
    faInbox,
    faClock,
    faDesktop,
    faArrowCircleRight,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
    const links = [
        {
            name: "Account",
            icon: faUserCircle
        },
        {
            name: "Dashboard",
            icon: faTachometerAlt
        },
        {
            name: "Courses",
            icon: faBook
        },
        {
            name: "Calendar",
            icon: faCalendarAlt
        },
        {
            name: "Inbox",
            icon: faInbox
        },
        {
            name: "History",
            icon: faClock
        },
        {
            name: "Studio",
            icon: faDesktop
        },
        {
            name: "Help",
            icon: faQuestionCircle
        },
    ];

    const { pathname } = useLocation();

    return (
        <ul className="kanbas-navigation-ul">
            <li className="kanbas-navigation-li">
                <img src="/logo.png" width="65px" alt="Logo" />
            </li>
            {links.map((link, index) => (
                <li className={`kanbas-navigation-li ${pathname.includes(link.name) && "active"}`}>
                    <Link key={index} to={`/Kanbas/${link.name}`} className={`kanbas-navigation-a ${pathname.includes(link.name) && "active"}`}>
                        <FontAwesomeIcon icon={link.icon} className={`kanbas-navigation-icon ${pathname.includes(link.name) && "icon-active"}`} />
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;
