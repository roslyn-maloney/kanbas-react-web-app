import { Link } from "react-router-dom";
export default function Profile() {
  return (
      <div id="wd-profile-screen">
        <h3>Profile</h3>
        <input id="wd-username"
          placeholder="username"
          defaultValue="alice"
          className="form-control mb-2" />

        <input id="wd-password"
          placeholder="password"
          type="password"
          defaultValue="123"
          className="form-control mb-2" />

        <input id="wd-firstname"
          placeholder="First Name"
          defaultValue="Alice"
          className="form-control mb-2" />

        <input id="wd-lastname"
          placeholder="Last Name"
          defaultValue="Wonderland"
          className="form-control mb-2" />

        <input id="wd-dob"
          type="date"
          defaultValue="2000-01-01"
          className="form-control mb-2" />

        <input id="wd-email"
          defaultValue="alice@wonderland"
          type="email" />

        <select defaultValue="FACULTY" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <Link id="wd-signin-btn"
          to="/Kanbas/Account/Signin"
          className="btn btn-primary w-100">
          Sign out </Link>
        <Link id="wd-signin-link" to="/Kanbas/Account/Signin">Sign out</Link>
      </div>
  );
}
