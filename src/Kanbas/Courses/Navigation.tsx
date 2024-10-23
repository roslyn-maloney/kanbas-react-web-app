import { Link, useLocation, useParams } from "react-router-dom";
import "./style.css";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div className="wd-course-navigation list-group rounded-0 border-0"> 
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item list-group-item-action text-danger border-0'
              ${pathname.includes(link.label) ? "text-black border-start border-black border-3" : "text-danger"}`}>
          <br />
          {link.label}
        </Link>
      ))}
    </div>
    );
}
