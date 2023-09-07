import style from './Footer.module.scss';
import Button from '../Button/Button';
// import UpButton from '../UpButton/UpButton';
import { useMediaQuery } from 'usehooks-ts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isShowBox, setIsShowBox] = useState(false);
  const [mailAddress, setMailAddress] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  function changeBoxStatus(){
    setIsShowBox(!isShowBox)
  }

  function showBox(){
    setIsShowBox(true)
  }

  function hideBox(){
    setIsShowBox(false)
  }
  const handleMailChange = event => {
    // 👇 Get input value from "event"
    const inputAmount = event.target.value
    setMailAddress(inputAmount)
  }

  async function subscibeMailList(event){
    console.log("event",event)
    axios.post('https://anarchycoin.menumcepte.com/', {
      "mail_address" : mailAddress
    })
    .then(function (response) {
      console.log(response);
      setIsSubscribe(true)
    })
    .catch(function (error) {
      console.log(error);
      setIsSubscribe(true)
    });
  }


  return (
    <>
      <div className="container footer">
        <div className="row mt-5">
          <div className="col-md-4">
            <img src="./assets/logo.svg" />
            <h4>Stay up to date</h4>
            <div className="hwqm">
              {isShowBox ? 
              
              <span className="arrow-icon" onClick={changeBoxStatus}  >
              <i class="fas fa-arrow-circle-down"></i>
            </span>
             :
             <img src="./assets/qm.svg" className="qm" onClick={changeBoxStatus}   />

            }
             {/* <span className="qm-box" onClick={changeBoxStatus}  >
               ANARCHY
             </span> */}
            </div>
            {isShowBox && 
                         <div className='info-modal'>Fight the system</div>

            }

{!!isSubscribe && 
  <>
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  {/* <strong>Holy guacamole!</strong>  */}You have been added to our mailing list
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div>

</>
} 

            <div className="inpdiv">
            <form onSubmit={(event)=>{subscibeMailList(event);  event.preventDefault();}}>
              <input
                type="email"
                placeholder="Enter your email"
                id="emailsubscribe"
                name="email" 
                onChange={handleMailChange}
              />
              <button type="submit" className="subscribe">
                subscribe
              </button>
</form>

            </div>
            <div>
            </div>
          </div>
          <div className="col-md-3" />
          <div className="col-md-5">
            <div className="row">
              <div className="col-6 col-md-4 mt-5">
                <h5>MENU</h5>
                <ul>
                  <li>
                    <a href="/#about">About</a>
                  </li>
                  <li>
                    <a href="/#how-to-buy">How to buy</a>
                  </li>
                  <li>
                    <a href="/#token-breakdown">Token breakdown</a>
                  </li>
                  <li>
                    <a style={{cursor : "pointer"}} onClick={()=> {navigate("/mission-statement")}} >Mission statement</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4 mt-5">
                <h5>LINKS</h5>
                <ul>
                  <li>
                    <a style={{cursor : "pointer"}} onClick={()=> {navigate("/terms-of-service")}}>Terms</a>
                  </li>
                  <li>
                    <a style={{cursor : "pointer"}} onClick={()=> {navigate("/privacy-policy")}}>Privacy</a>
                  </li>
                  <li>
                    <a style={{cursor : "pointer"}} onClick={()=> {navigate("/disclaimer")}}>Disclaimer</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4 mt-5">
                <h5>SOCIAL</h5>
                <ul>
                  <li>
                    <a href="https://twitter.com/anarchycoineth?s=21">Twitter</a>
                  </li>
                  <li>
                    <a href="https://t.me/anarchyarmy">Telegram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container copyright">© 2023. All rights reserved.</div>
    
   
    </>
    
        )
};

export default Footer;
