import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda<ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Introduction to the course<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                READING<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Full Stack Developer - Chapter 2 - Creating User<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                SLIDES<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Introduction to Web Development<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Creating an HTTP server with Node.js<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Creating a React Application<LessonControlButtons />
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 2 - Formatting User Interfaces with HTML<ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Learn how to create user itnerfaces with HTML<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Deploy the assignment to Netlify<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                SLIDES<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Introduction to HTML and the DOM<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Formatting Web content with Headings and<LessonControlButtons />
              </span>
              <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                Formatting content with Lists and Tables<LessonControlButtons />
              </span>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}