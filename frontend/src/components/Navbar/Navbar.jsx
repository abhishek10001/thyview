import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUserCircle,
} from "react-icons/fa";
import profilePic from "../../img/profile.png";
import "./Navbar.css";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <h2>THYViEW</h2>
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link className="link" to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/aboutpage">
            <FaInfoCircle /> About
          </Link>
        </li>
        {userInfo ? (
          <>
            <li className="nav-item" onClick={handleLogOut}>
              <FaSignInAlt /> Logout
            </li>
            <li className="nav-img">
              <Link to="/profile">
                <img src={profilePic} alt="Profile" />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="link" to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/register">
                <FaUserPlus /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
