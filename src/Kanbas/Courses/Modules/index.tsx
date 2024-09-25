export default function Modules() {
    return (
      <div>
        {/* buttons at the top of the screen */}
        <button>Collapse All</button><button>View Progress</button> <select>
            <option value="All" selected>Publish All</option>
            <option value="Week 1">Publish Week 1</option>
            <option value="Week 2">Publish Week 2</option>
        </select><button>+ Module</button>

        {/* Produces Lecture 1 on the site  */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction,Syllabus,Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                {/* Produces the learning objective heading  */}
                <span className="wd-title">LEARNING OBJECTIVES</span>
                {/* Start of the unordered list */}
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
            {/* End of the unordered list */}
            <ul className="wd-lessons">
              <li className="wd-lesson">
                {/* Produces the learning objective heading  */}
                <span className="wd-title">READING</span>
                {/* Start of the unordered list */}
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
              </li>
            </ul>
            {/* End of the unordered list */}
            <ul className="wd-lessons">
              <li className="wd-lesson">
                {/* Produces the learning objective heading  */}
                <span className="wd-title">SLIDES</span>
                {/* Start of the unordered list */}
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a react Application</li>
                </ul>
              </li>
            </ul>
            {/* End of the unordered list */}
          </li>

        {/* Produces Lecture 2 on the site  */}
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introductions to HTML and DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
  