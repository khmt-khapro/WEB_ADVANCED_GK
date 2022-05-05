import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "../components/Header";
import { login } from "../Redux/Actions/userActions";
import { logout } from "../Redux/Actions/userActions";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };


  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      {/* <Header /> */}
      {/* Header split components  */}
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+84 123 456 789</p>
              <p>students@tdtu.edu.vn</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="mobile-header">
        <div className="container ">
          <div className="row ">
            <div className="col-6 d-flex align-items-center">
              <Link className="navbar-brand" to="/">
                <img alt="logo" src="/images/new-logo.png" />
              </Link>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
              {userInfo ? (
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>

                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </div>
                </div>
              )}

              
            </div>
            {/* <div className="col-12 d-flex align-items-center">
              <form onSubmit={submitHandler} className="input-group">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit" className="search-button">
                  search
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      {/* PC HEADER */}

      <div className="pc-header">
        <div className="row">
          <div className="col-md-3 col-4 d-flex align-items-center" style={{paddingLeft: "50px"}}>
            <Link className="navbar-brand ml-5" to="/">
              <img alt="logo" src="/images/new-logo.png" />
            </Link>
          </div>
          {/* <div className="col-md-6 col-8 d-flex align-items-center">
            <form onSubmit={submitHandler} className="input-group">
              <input
                type="search"
                className="form-control rounded search"
                placeholder="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="search-button">
                search
              </button>
            </form>
          </div> */}
          <div className="col-md-8 d-flex align-items-center justify-content-end Login-Register">
            {userInfo ? (
              <div className="btn-group">
                <button
                  type="button"
                  className="name-button dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hi, {userInfo.name}
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>

                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* End Of Header split components  */}
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
