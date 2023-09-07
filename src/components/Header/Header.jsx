import React, {useState,useEffect} from "react";
import logo from '../../assets/logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* import { WalletButton } from "../../services/web3"; */


export function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navigate = useNavigate();


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark a-bottom">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img width="50px" src="./assets/logo.png" />
    </a>
    <div>
      <a className="navsmlinkk d-md-none" href="https://twitter.com/anarchycoineth?s=21" target="_blank">
        Twitter
      </a>
      <a className="navsmlinkk d-md-none" href="https://t.me/anarchyarmy" target="_blank">
        Telegram
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link" href="/#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#how-to-buy">
            How to buy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#how-to-claim">
            How to claim
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/mission-statement")}}>
            Mission statement
          </a>
        </li>
      </ul>
      <ul
        className="navbar-nav ml-auto mb-2 mb-lg-0 d-none d-md-flex"
        style={{ marginRight: 15 }}
      >
        <li className="nav-item">
          <a className="nav-link navsmlink" href="https://twitter.com/anarchycoineth?s=21" target="_blank">
            Twitter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link navsmlink" href="https://t.me/anarchyarmy" target="_blank">
            Telegram
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-none d-md-block">
     {/*  <WalletButton color={"white"}/> */}
{/* 
        <button type="button" className="nav-cbtn">
          CONNECT WALLET &nbsp;
          <i className="bi bi-arrow-up-right" />
        </button> */}
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Header;
