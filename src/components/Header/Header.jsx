import React from "react";
import logo from "../../images/logoRed.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = true;
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <h1>MOTION WEB LLC</h1>
          </div>
          {user ? (
            <div className="header__btns">
              <button>Войти</button>
              <button>Зарегистривоваться</button>
            </div>
          ) : (
            <nav>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/questions">Вопросы</NavLink>
              <NavLink to="/theme">Темы</NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
