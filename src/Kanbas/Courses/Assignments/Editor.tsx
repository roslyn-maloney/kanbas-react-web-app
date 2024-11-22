import { SlCalender } from "react-icons/sl";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
import { addAssignment, updateAssignment} from "./reducer";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer.assignments
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignment = assignments.find((assignment: any) => assignment._id == aid) || {
    title: "",
    description: "",
    points: 0,
    due: "",
    from: "",
    course: cid,
    _id: new Date().getTime().toString(),
  }
  const [selectedAssignment, setSelectedAssignment] = useState(assignment);
  const isEdit = assignments.findIndex((a : any) => a._id === aid) !== -1;

  // everytime using async pair up with await
  const handleSave = async () => {
    if(isEdit) {
      await assignmentClient.updateAssignment(selectedAssignment); // update existing assignment 
    } else {
      await coursesClient.createAssignment(cid || "", selectedAssignment); // create a new assignment
    } 
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  }
  

return (
  <div id="wd-assignments-editor">
    {/* input for the assignment name */}
    <div className="mb-3"> <br />
      <label htmlFor="input1" className="form-label">
        Assignment Name</label>
      <input type="text" className="padding"
        id="wd-name" value={selectedAssignment.title}
        onChange={(e) => setSelectedAssignment({ ...selectedAssignment, title: e.target.value })}
      />
      <br /><br />
      <textarea id="wd-description" rows={3}
        defaultValue={selectedAssignment.description}
        onChange={(e) => setSelectedAssignment({ ...selectedAssignment, description: e.target.value })}>
      </textarea> <br /> <br />

      {/* handels the points */}
      <table id="editor-table">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input className="padding" id="wd-points" defaultValue={selectedAssignment.points}
              onChange={(e) => setSelectedAssignment({ ...selectedAssignment, points: Number(e.target.value) })} />
          </td>
        </tr><br />
        <tr>
          <td style={{ border: '1px solid black', padding: '10px' }}>
            Due<br />
            <div className="input-group">
              <input className="padding" defaultValue={selectedAssignment.due}
                onChange={(e) => setSelectedAssignment({ ...selectedAssignment, due: e.target.value })} />
              <span className="input-group-text"><SlCalender /></span>
            </div>

            <br /><br />
            <table>
              <tr>
                <td align="left">
                  Available from<br />
                  <div className="input-group">
                    <input className="padding" defaultValue={selectedAssignment.from}
                      onChange={(e) => setSelectedAssignment({ ...selectedAssignment, from: e.target.value })} />
                    <span className="input-group-text"><SlCalender /></span>
                  </div>

                </td>
                <td>
                  Until<br />
                  <div className="input-group">
                    <input className="padding" defaultValue={selectedAssignment.due}
                      onChange={(e) => setSelectedAssignment({ ...selectedAssignment, due: e.target.value })} />
                    <span className="input-group-text"><SlCalender /></span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      {/* // must update a existing one or add a new one */}
      {/* when button is clicked update the assignment */}
      <button className="bottom-buttons" id="save-bt" onClick={handleSave}>Save</button>
      <Link to={`/Kanbas/Courses/${selectedAssignment.course}/Assignments`} className={`list-group-item list-group-item-action text-danger border-0'`}>
        <button className="bottom-buttons" id="cancel-bt">Cancel</button>
      </Link>
    </div>
  </div>
);
}