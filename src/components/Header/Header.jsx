import React, { useEffect, useState } from "react";
import logo from "../../images/logoRed.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);

  const { logOut } = useAuth();
  const { user } = useSelector((s) => s);

  useEffect(() => {
    if (!user) {
      setProfile(false);
    }
  }, [user]);

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
            }}>
            {user && user.photoURL ? (
              <img
                className="header__photoUser"
                src={user.photoURL}
                alt="userPhotoURL"
              />
            ) : (
              <h3>{user ? user.displayName.slice(0, 1) : ""}</h3>
            )}
          </div>
          <div
            style={{
              transform: profile ? "scaleY(1)" : "scaleY(0)",
            }}
            className="header__profile">
            <p>Profile</p>
            <p onClick={() => logOut()}>Log Out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
