import React, { useEffect, useState } from "react";
import logo from "../../../images/logoRed.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { user } = useSelector((s) => s);

  const { signUpWithEmailAndPassword, signUpWithGoogle } = useAuth();

  const [validName, setValidName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
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
      await signUpWithEmailAndPassword(
        values.email,
        values.password,
        values.name,
        values.lastName
      );
      setValues({
        name: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {}, []);

  function checkValidInput() {
    if (values.name) {
      setValidName(true);
    } else {
      setValidName(false);
    }

    if (values.lastName) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    }

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

    if (validEmail && validLastName && validName && validPass) {
      hanleCreateAccount();
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <section id="sign-up">
      <div className="container">
        <div className="sign-up">
          <img src={logo} alt="logo" />
          <div className="sign-up__logo">
            <h1>MOTION WEB PLATFORM</h1>
          </div>
          <h2>Зарегистрироваться</h2>
          <div className="sign-up__form">
            <input
              className={validName ? "" : "placeholder"}
              style={{
                borderColor: validName ? "" : "red",
              }}
              onChange={handleInputValue}
              type="text"
              name="name"
              value={values.name}
              placeholder="Имя..."
            />
            <p style={{ display: validName ? "none" : "" }}>Заполните имя</p>
            <input
              className={validLastName ? "" : "placeholder"}
              style={{
                borderColor: validLastName ? "" : "red",
              }}
              onChange={handleInputValue}
              type="text"
              name="lastName"
              value={values.lastName}
              placeholder="Фамилия..."
            />
            <p style={{ display: validLastName ? "none" : "" }}>
              Заполните фамилие
            </p>

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

            <div className="sign-up__pass">
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
                className="sign-up__pass__eye"
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
                display:
                  error ||
                  !validName ||
                  !validLastName ||
                  !validEmail ||
                  !validPass
                    ? ""
                    : "none",
              }}
            >
              <MdError style={{ fontSize: "20px", color: "red" }} />
              {error}
            </h4>
            <button onClick={checkValidInput}>Зарегистрироваться</button>
          </div>
          <button
            onClick={() => signUpWithGoogle()}
            className="sign-up__with-google"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="googleBtn"
            />
            Регистрация через Google
          </button>
          <h5>
            У вас уже есть аккаунт на MOTION WEB PLATFORM?{" "}
            <span onClick={() => navigate("/log_in")}>Войдите в аккаунт</span>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
