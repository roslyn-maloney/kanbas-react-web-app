export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        {/* start of the list */}
        <ul id="wd-assignment-list">
            {/* start of a new assignment */}
          <li className="wd-assignment-list-item">
            {/* set link for A1 */}
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a><br/>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br/>
            <b>Due</b> May 13 at 11:59pm | 100pts
          </li>
          {/* start of a new assignment */}
          <li className="wd-assignment-list-item">
            {/* set link for A2 */}
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a><br/>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br/>
            <b>Due</b> May 20 at 11:59pm | 100pts
          </li>
          {/* start of a new assignment */}
          <li className="wd-assignment-list-item">
            {/* set link for A3 */}
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIOT + REACT
            </a><br/>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br/>
            <b>Due</b> May 27 at 11:59pm | 100pts
          </li>
        </ul>
      </div>
  );
}
  