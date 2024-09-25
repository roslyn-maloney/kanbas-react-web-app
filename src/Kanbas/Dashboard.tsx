import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        {/* Course 2 : Computer Systems */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CS3650 Computer Systems
              </h5>
              <p className="wd-dashboard-course-title">
              CS3650 Computer Systems MERGED Fall 2024
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            {/* Course 3 : Linear Algebra */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              MATH2331 Linear Algebra
              </h5>
              <p className="wd-dashboard-course-title">
              MATH2331 13472 Linear Algebra SEC 05 Fall 2024 [BOS-1-TR]
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            {/* Course 4 : Professional Development */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CS1210 Professional Development
              </h5>
              <p className="wd-dashboard-course-title">
              CS1210 11858 Professional Development Co-op SEC 05 Fall 2024 [VTL-1-OL]
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            {/* Course 5 : Corruption, Integrity, and Accountability */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CRIM1500 Corruption, Integrity, and Accountability
              </h5>
              <p className="wd-dashboard-course-title">
              CRIM1500.13568.202510
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            {/* Course 6 : Mathematics of Data Models */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CS2810 Mathematics of Data Models
              </h5>
              <p className="wd-dashboard-course-title">
              CS2810.32946.202430
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            {/* Course 7 : Fundamentals of Computer Science 1 */}
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" alt="React logo" width={200} />
            <div>
              <h5>
              CS2500 Fundamentals of Computer Science 1
              </h5>
              <p className="wd-dashboard-course-title">
              CS2500 11537 Fundamentals of Computer Sci 1 SEC 05 Fall 2023 [BOS-1-TR]
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
