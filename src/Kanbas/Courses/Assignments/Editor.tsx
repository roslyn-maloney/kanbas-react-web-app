import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment } from "./reducer";


export default function AssignmentEditor(){
  const { cid, aid } = useParams();
  console.log("hello")
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ); 
  console.log(assignments);
  
  const dispatch = useDispatch();
  const assignment = assignments.filter((assignment: any) => assignment._id == aid && assignment.course == cid); // filtering out the asingment with particular course id and assignment id
  const [selectedAssignment, setSelectedAssignment] = useState({
    title: '',
    description: '',
    points: 0,
    due: "",
    from: "",
  });
  if (aid == "New") {
    setSelectedAssignment({
      title: "",
      description: "",
      points: 0,
      due: "mm/dd/yy",
      from: "mm/dd/yy",
    });
  } 
  if (aid == assignment._id){
    setSelectedAssignment({
      title: assignment.title,
      description: assignment.description,
      points: assignment.points,
      due: assignment.due,
      from: assignment.from,
    });
  }

  const updateAssignment = () => {
    dispatch(addAssignment(selectedAssignment)); // Dispatch to Redux to save the new assignment
  };

  return (
    <div id="wd-assignments-editor">
      {/* input for the assignment name */}
      <div className="mb-3"> <br />
        <label htmlFor="input1" className="form-label">
          Assignment Name</label>
        <input type="text" className="padding"
          id="wd-name" defaultValue={selectedAssignment.title}
          onChange={(e) => setSelectedAssignment({ ...selectedAssignment, title: e.target.value })}
          placeholder="Assignment Name" />
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
                  onChange={(e) => setSelectedAssignment({ ...selectedAssignment, due: e.target.value})} />
                <span className="input-group-text"><SlCalender /></span>
              </div>

              <br /><br />
              <table>
                <tr>
                  <td align="left">
                    Available from<br />
                    <div className="input-group">
                      <input className="padding" defaultValue={selectedAssignment.from}
                        onChange={(e) => setSelectedAssignment({ ...selectedAssignment, from: e.target.value})} />
                      <span className="input-group-text"><SlCalender /></span>
                    </div>

                  </td>
                  <td>
                    Until<br />
                    <div className="input-group">
                      <input className="padding" defaultValue={selectedAssignment.due}
                        onChange={(e) => setSelectedAssignment({ ...selectedAssignment, due: e.target.value})} />
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
          {/* when button is clicked update the assignment */}
          <button className="bottom-buttons" id="save-bt" onClick={updateAssignment}>Save</button>
          <button className="bottom-buttons" id="cancel-bt">Cancel</button>
        </Link>
      </div>
    </div>
  );
}