import { Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* Course 1 : Given Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 : Computer Systems */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4550/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CS3650 Computer Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    CS3650 Computer Systems MERGED Fall 2024
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/* Course 3 : Linear Algebra*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3000/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    MATH2331 Linear Algebra 
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    MATH2331 13472 Linear Algebra SEC 05 Fall 2024 [BOS-1-TR]
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 : Professional Development */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2242/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CS1210 Professional Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    CS1210 11858 Professional Development Co-op SEC 05 Fall 2024 [VTL-1-OL]
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 : Corruption, Integrity, and Accountability*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2262/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CRIM1500 Corruption, Integrity, and Accountability
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    CRIM1500.13568.202510
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 : Mathematics of Data Models*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3500/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CS2810 Mathematics of Data Models
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    CS2810.32946.202430
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 : Fundamentals of Computer Science */}
          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4973/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body overflow-hidden">
                  <h5 className="wd-dashboard-course-title card-title overflow-hidden">
                    CS2500 Fundamentals of Computer Science 1
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-hidden">
                    CS2500 11537 Fundamentals of Computer Sci 1 SEC 05 Fall 2023 [BOS-1-TR]
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}