import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input id="wd-search-assignment"
          placeholder="Search for Assignments"
          style={{ borderRadius: '10px' }} />
      </div>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignments </button>

      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group </button><br /><br /><br /><br />



      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <p className="wd-rounded-corners-all-around 
                wd-border-thin wd-border-gray wd-border-solid  small-text">
                40% of Total
              </p>
              <FaPlus className="wd-side-icon" />
              <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" />
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A1
                </a><br /> <LessonControlButtons />
                <p>
                  <span className="red-text">Multiple Modules</span> |
                  <b> Not available until</b> May 6 at 12:00am |<br />
                  <b>Due</b> May 13 at 11:59pm | 100pts
                </p>
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" /> <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A2
              </a><br /> <LessonControlButtons />
                <span className="red-text">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br />
                <b>Due</b> May 20 at 11:59pm | 100pts</li>
              <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" /> <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A3
              </a><br /> <LessonControlButtons />
                <span className="red-text">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
                <b>Due</b> May 27 at 11:59pm | 100pts </li>
            </div>
          </li>
        </ul>
      </div>

    </div >
  );
}
