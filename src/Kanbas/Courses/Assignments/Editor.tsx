import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router";
import * as db from "../../Database";
import {Link} from "react-router-dom";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments-editor">
      {/* input for the assignment name */}

      {assignments
        .filter((assignment: any) => assignment._id == aid && assignment.course === cid)
        .map((assignment: any) => (
          <div className="mb-3"> <br />
            <label htmlFor="input1" className="form-label">
              Assignment Name</label>
            <input type="text" className="padding"
              id="wd-name" defaultValue={assignment.title} placeholder="Assignment Name" />
            <br /><br />
            <textarea id="wd-description" rows={3}>
              The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
              The landing page should include the following:
              •  Your full name and section
              •  Links to each of the lab assignments
              •  Link to the Kanbas application
              •  Links to all relevant source code repositories
              The Kanbas application should include a link to navigate back to the landing page.
            </textarea> <br /> <br />

            {/* handels the points */}
            <table id="editor-table">
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                  <input className="padding" id="wd-points" defaultValue={assignment.points} />
                </td>
              </tr><br />

              {/* handles the the assignment group */}
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                  <select name="wd-group" className="padding" id="wd-group">
                    <option selected>{assignment.group}</option>
                    <option value="Assignments">ASSIGNMENTS</option>
                    <option value="Quizzes">QUIZESS</option>
                    <option value="Exams">EXAMS</option>
                    <option value="Projects">PROJECTS</option>
                  </select>
                </td>
              </tr><br />
              {/* handles the type of grade */}
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-display-grade-as">{assignment.grade}</label>
                </td>
                <td>
                  <select name="wd-display-grade-as" className="padding" id="wd-display-grade-as">
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter</option>
                  </select>
                </td>
              </tr><br />

              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-submission-type">{assignment.submission}</label>
                </td>
                <td>
                  <select name="wd-submission-type" className="padding" id="submission-type">
                    <option value="online">Online</option>
                    <option value="paper">Paper</option>
                  </select>
                  <br /><br />
                </td>
              </tr>

              <tr>
                <td align="right" valign="top"></td>
                <td style={{ border: '1px solid black', padding: '10px' }}>
                  <b>Online entry options</b>
                  <div>
                    <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="text entry" checked/>
                    <label className="padding" htmlFor="wd-text-entry"> Text Entry</label><br />
                  </div>
                  <div>
                    <input type="checkbox" id="wd-website-url" name="wd-website-url" value="website url" />
                    <label className="padding" htmlFor="wd-website-url"> Website URL</label> <br />
                  </div>
                  <div>
                    <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="media recordings" />
                    <label className="padding" htmlFor="wd-media-recordings"> Media Recordings</label><br />
                  </div>
                  <div>
                    <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="student annotation" />
                    <label className="padding" htmlFor="wd-student-annotation"> Student Annotation</label><br />
                  </div>
                  <div>
                    <input type="checkbox" id="wd-file-upload" name="wd-file-upload" value="file upload" />
                    <label className="padding" htmlFor="wd-file-upload">File Upload</label><br />
                  </div>
                </td>
              </tr><br />

              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-assign-to">Assign</label>
                </td>
                <td style={{ border: '1px solid black', padding: '10px' }}>
                  <b>Assign to</b><br />
                  <input className="padding" type="text" id="wd-assign-to" defaultValue={assignment.assigned} />
                  <br /><br />

                  Due<br />
                  <div className="input-group">
                    <input className="padding" defaultValue={assignment.due} />
                    <span className="input-group-text"><SlCalender /></span>
                  </div>

                  <br /><br />
                  <table>
                    <tr>
                      <td align="left">
                        Available from<br />
                        <div className="input-group">
                          <input className="padding" defaultValue={assignment.from} />
                          <span className="input-group-text"><SlCalender /></span>
                        </div>

                      </td>
                      <td>
                        Until<br />
                        <div className="input-group">
                          <input className="padding" value={assignment.due} />
                          <span className="input-group-text"><SlCalender /></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <hr />
            <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className={`list-group-item list-group-item-action text-danger border-0'`}>
            <button className="bottom-buttons" id="save-bt">Save</button>
            <button className="bottom-buttons" id="cancel-bt">Cancel</button>
            </Link>
            
          </div>
        ))}

    </div>
  );
}