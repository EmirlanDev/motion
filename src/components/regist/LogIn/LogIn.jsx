import React, { useEffect, useState } from "react";
import logo from "../../../images/logoRed.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user } = useSelector((s) => s);

  const { logInWithEmailAndPassword, signUpWithGoogle } = useAuth();

  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const [pass, setPass] = useState(true);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleInputValue(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function hanleCreateAccount() {
    try {
      await logInWithEmailAndPassword(values.email, values.password);
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {}, []);

  function checkValidInput() {
    if (values.email) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (values.password) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }

    if (validEmail && validPass) {
      hanleCreateAccount();
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <section id="log-in">
      <div className="container">
        <div className="log-in">
          <img src={logo} alt="logo" />
          <div className="log-in__logo">
            <h1>MOTION WEB PLATFORM</h1>
          </div>
          <h2>Войти</h2>
          <div className="log-in__form">
            <input
              className={validEmail ? "" : "placeholder"}
              style={{
                borderColor: validEmail ? "" : "red",
              }}
              onChange={handleInputValue}
              type="email"
              name="email"
              value={values.email}
              placeholder="Почта (email)..."
            />
            <p style={{ display: validEmail ? "none" : "" }}>Заполните почту</p>

            <div className="log-in__pass">
              <input
                className={validPass ? "" : "placeholder"}
                style={{
                  borderColor: validPass ? "" : "red",
                }}
                onChange={handleInputValue}
                type={pass ? "password" : "text"}
                name="password"
                value={values.password}
                placeholder="Пароль..."
              />

              <div
                style={{
                  transform: values.password
                    ? "scale(1) translateY(-50%)"
                    : "scale(0)",
                }}
                onClick={() => setPass(!pass)}
                className="log-in__pass__eye"
              >
                {pass ? (
                  <FaEye
                    style={{
                      fontSize: "20px",
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    style={{
                      fontSize: "22px",
                    }}
                  />
                )}
              </div>
            </div>
            <p style={{ display: validPass ? "none" : "" }}>Заполните пароль</p>
            <h4
              style={{
                display: error || !validEmail || !validPass ? "" : "none",
              }}
            >
              <MdError style={{ fontSize: "20px", color: "red" }} />
              {error}
            </h4>
            <button onClick={checkValidInput}>Войти</button>
          </div>
          <button
            onClick={() => signUpWithGoogle()}
            className="log-in__with-google"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="googleBtn"
            />
            Вход через Google
          </button>
          <h5>
            У вас нет учетной записи MOTION WEB PLATFORM?{" "}
            <span onClick={() => navigate("/sign_up")}>Зарегистрироваться</span>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
