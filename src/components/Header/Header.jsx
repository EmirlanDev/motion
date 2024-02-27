import React, { useEffect, useState } from "react";
import logo from "../../images/logoRed.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const { user } = useSelector((s) => s);

  useEffect(() => {
    if (!user) {
      setProfile(false);
    }
  }, [user]);

  let profileBlock = document.querySelector(".header__profile");
  let photoUser = document.querySelector(".header__photoUser");
  let photoName = document.querySelector(".photoName");

  window.addEventListener("click", (e) => {
    if (e.target === photoUser || e.target === photoName) {
      setProfile(true);
    } else if (e.target !== profileBlock) {
      setProfile(false);
    }
  });

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <h1>MOTION WEB PLATFORM</h1>
          </div>
          {!user ? (
            <div className="header__btns">
              <button onClick={() => navigate("/log_in")}>Войти</button>
              <button onClick={() => navigate("/sign_up")}>
                Зарегистривоваться
              </button>
            </div>
          ) : (
            <nav>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/questions">Вопросы</NavLink>
              <NavLink to="/theme">Темы</NavLink>
            </nav>
          )}
          <div
            onClick={() => setProfile(!profile)}
            style={{
              display: user ? "" : "none",
            }}
          >
            {user && user.photoURL ? (
              <img
                className="header__photoUser"
                src={user.photoURL}
                alt="userPhotoURL"
              />
            ) : (
              <h3 className="photoName" onClick={() => setProfile(!profile)}>
                {user && user.displayName ? user.displayName.slice(0, 1) : ""}
              </h3>
            )}
          </div>
          <div
            style={{
              transform: profile ? "scaleY(1)" : "scaleY(0)",
            }}
            className="header__profile"
          >
            <p onClick={() => navigate("/profile")}>Profile</p>
            <p
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
            >
              Log Out
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
