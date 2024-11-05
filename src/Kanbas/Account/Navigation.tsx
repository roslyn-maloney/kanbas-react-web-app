import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd account-group fs-5 rounded-0">
      <Link
        to={`/Kanbas/Account/Signin`}
        className={`account-group-item ${pathname.includes("Signin") ? "active border-left border-2 border-black text-black" : "text-danger"}`}>
        Signin
      </Link>
      <br />
      <Link to={`/Kanbas/Account/Signup`}
        className={`account-group-item ${pathname.includes("Signup") ? "active border-left border-2 border-black text-black" : "text-danger"}`}>
        Signup  
        </Link> 
        <br />
      <Link to={`/Kanbas/Account/Profile`}
        className={`account-group-item ${pathname.includes("Profile") ? "active border-left border-2 border-black text-black" : "text-danger"}`}> 
        Profile 
        </Link> 
        <br />
    </div>
  );
}

// <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
//${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
//<FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
//<br />
//Account
//</Link>