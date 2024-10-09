import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/ModuleControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
        placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-assignment-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
              </h3>
              <ModuleControlButtons />
            </div>
            <ul className="wd-hw list-group rounded-0">
              <li className="wd-assignment-list-item">
                {/* set link for A1 */}
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a><br />
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
                <b>Due</b> May 13 at 11:59pm | 100pts </li>
              <li className="wd-hw list-group-item p-3 ps-1"> LESSON 2 </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
