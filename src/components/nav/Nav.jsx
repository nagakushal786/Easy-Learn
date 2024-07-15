import React, { useState } from "react";
import style from "./Nav.module.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [text, setText] = useState("Go to Courses");

  const handleCourses = () => {
    navigate("/courses");
    setText("Courses");
  }

  const handleHome = () => {
    navigate("/");
    setText("Go to Courses");
  }

  const handleFeedBack = () => {
    navigate("/feedback");
    setText("Go to Courses");
  }

  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <img
              className={style.logo}
              src="https://cdn-icons-png.flaticon.com/128/6601/6601248.png"
              alt="logo"
            />
            <h4>Easy Learn</h4>
          </div>
          <div className={style.nav_details}>
            {location.pathname !== "/" && <button onClick={handleHome}>Home</button>}
            <button onClick={handleCourses}>{text}</button>
            <button onClick={handleFeedBack}>Feedback</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;