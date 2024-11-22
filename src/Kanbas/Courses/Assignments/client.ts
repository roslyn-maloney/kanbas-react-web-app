// React.js Web application, create an assignment client file that uses axios to send POST, GET, PUT, and DELETE HTTP requests 
// to integrate the React.js application with the server application.
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment= async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
  };  

  export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
   };

  