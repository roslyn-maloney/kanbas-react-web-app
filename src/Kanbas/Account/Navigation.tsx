import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd account-group fs-5 rounded-0">
      <Link to={`/Kanbas/Account/Signin`} 
      className="account-group-item active border border-0"> Signin  </Link> <br />
      <Link to={`/Kanbas/Account/Signup`} 
      className="account-group-item text-danger border border-0" > Signup  </Link> <br />
      <Link to={`/Kanbas/Account/Profile`} 
      className="account-group-item text-danger border border-0"> Profile </Link> <br />
    </div>
);
}
