import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

export default class Header extends Component {
  render() {
    return (


      <div className="navbar-expand-md navbar-light">
        {/* <div id="navbarCollapse">
          <div id="sideNav" className="sidenav">
            <button onclick="closeSideNav()"><i className="fa fa-chevron-right" /></button>
            <a href="#" className="nav-item nav-link user-action signIn"><img src="./img/avatar.png" className="avatar" alt="Avatar" /> Đăng Nhập</a>
            <a href="#Film" className="nav-item nav-link user-action"> Lịch Chiếu</a>
            <a href="#" className="nav-item nav-link user-action"> Cụm rạp</a>
            <a href="#" className="nav-item nav-link user-action"> Tin Tức</a>
            <a href="#" className="nav-item nav-link user-action"> Ứng dụng</a>
            <div className="nav-item">
              <a href="#" type="button" data-toggle="modal" data-target="#navModal" data-keyboard="true" className="nav-link user-action">Hồ Chí Minh</a>
            </div>
          </div>
        </div> */}
        <div className="navbar">
          <a href="#" className="navbar-brand d-flex"><img src="./img/logo.png" />
            <h3 className="ml-2">MOON</h3>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  " id="collapsibleNavId">
            <ul className="navbar-nav  ml-auto mt-2 mt-md-0">
              <li className="nav-item d-md-none d-block">
                <Link className="nav-link user-action " to="/logIn">
                  <img src="./avatar.png" className="avatar" alt="Avatar" />
                  Đăng nhập

                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/theater">
                  Theater
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

            </ul>
          </div>

          <div className="navbar-nav d-none d-md-block ml-auto">
            <div className="nav-item">
              <a href="#" className="nav-link user-action"><img src="./avatar.png" className="avatar" alt="Avatar" /> Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>










    );
  }
}
