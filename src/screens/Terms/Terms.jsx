import Button from '../../components/Button/Button';
import { useMediaQuery } from 'usehooks-ts';
import { ImgWebp } from '../../helpers/imgwebp';
import { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import { useState, useEffect } from 'react';

const Terms = () => {
  useEffect(()=> {
    let elem = document.getElementById("root")
    if (elem) {
        elem.scrollIntoView({behavior: "auto"})
    }
}, [])
  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="pho">Terms of Service</h1>
          </div>
          <div className="col-md-6 pbgel">
            <img src="./assets/pbgel.svg" />
          </div>
        </div>
        <div className="text-boxes">
          <div className="pbox">
          These STEVEN Token Terms of Service ("Token Terms") govern the use and ownership of STEVE tokens ("Tokens") issued by Stevencoin.io ("we," "us," or "our"). By participating in the acquisition, possession, or use of STEVE Tokens, you agree to comply with these Token Terms.
          </div>
          <div className="pbox">
            <span className='description-header'>Nature of STEVE Tokens: </span>
            <span>STEVE Tokens are digital tokens and a form of digital currency based on the Ethereum Blockchain. They can be used within the Stevencoin.io ecosystem for various purposes, including but not limited to voting on specific services, products, or features offered by Stevencoin.io or the Steven DAO.</span>
          </div>
          <div className="pbox">
            <span className='description-header'>
            Ownership and Transfer: 
            </span>
            <span>
            &nbsp;Ownership of STEVE Tokens does not imply ownership rights or equity in Stevencoin.io. You acknowledge and agree that the Tokens are non-refundable, non-exchangeable, and non-transferrable, except as explicitly permitted by these Token Terms or as otherwise specified by Stevencoin.io.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Token Distribution: 
            </span>
            <span>
            &nbsp;The distribution of STEVE Tokens may be subject to specific rules and procedures set by Stevencoin.io. These rules may include participation in token sales, airdrops, or other designated mechanisms. By acquiring Tokens, you agree to abide by the applicable rules and procedures.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Token Usage:
            </span>
            <span>
            &nbsp; STEVE Tokens can be used within the Stevencoin.io ecosystem as a digital currency to vote on specific events, payments, and access to services offered by Stevencoin.io or Steven DAO. They do not represent any ownership in Stevencoin.io and should not be considered securities.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Trading Activities:
            </span>
            <span>
            &nbsp;The Stevencoin.io platform may facilitate the trading of STEVE tokens against paired currencies on
authorized exchanges.
            </span>
            <p>
            </p>
            <p>
            The trading activities on authorized exchanges are subject to the terms and conditions set by the respective exchanges. It is your responsibility to review and comply with the terms and policies of the specific exchange when engaging in trading activities.
            </p>
            <p>
            </p>
            <p>
            Stevencoin.io does not guarantee the availability, functionality, or reliability of any authorized exchange. We are not liable for any losses or damages resulting from trading activities conducted on authorized exchanges.
            </p>
            <p></p>
            <p>
            You acknowledge that the value of STEVE tokens may fluctuate and that trading involves risks. You should carefully consider and assess these risks before engaging in trading activities.
            </p>
            <p></p>
            <p>
            Stevencoin.io may provide information or links to authorized exchanges for trading purposes. However, we do not endorse or have control over these exchanges, and any transactions conducted on third-party platforms are solely between you and the exchange.
            </p>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Token Risks:
            </span>
            <span>
            &nbsp;You acknowledge and understand the risks associated with acquiring, possessing, or using STEVE Tokens. These risks may include, but are not limited to, price volatility and market fluctuations affecting the value of Tokens, technological risks, and regulatory risks. Please carefully consider these risks before engaging with STEVE Tokens.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Compliance and Prohibited Activities:
            </span>
            <span>
            &nbsp;You agree to comply with all applicable laws, regulations, and guidelines when acquiring, possessing, or using STEVE Tokens. You shall not engage in any prohibited activities, including but not limited to violating any laws, regulations, or third-party rights.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Token Events and Modifications: 
            </span>
            <span>
            &nbsp;We reserve the right to modify, suspend, or discontinue the functionality, distribution, or usage of STEVE Tokens at any time, with or without notice. We may also undertake token events, such as token burns or token swaps, to maintain or adjust the token economy. You acknowledge and agree that such events or modifications may impact the value, availability, or functionality of Tokens.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Disclaimer of Warranties:
            </span>
            <span>
            &nbsp;STEVE Tokens are provided on an "as-is" and "as available" basis. We make no warranties or representations regarding the Tokens, including their functionality, value, or suitability for any particular purpose. You acknowledge that the Token ecosystem is subject to various risks and uncertainties.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Limitation of Liability:
            </span>
            <span>
            &nbsp;To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the acquisition, possession, or use of ANA Tokens. This includes any damages resulting from errors, omissions, interruptions, or delays in the Token ecosystem.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Modification of Token Terms:
            </span>
            <span>
            &nbsp;We reserve the right to modify or update these Token Terms at any time, with or without notice. It is your responsibility to review these Token Terms periodically. By continuing to acquire, possess, or use ANA Tokens after any modifications, you agree to be bound by the updated Token Terms.
            </span>
          </div>
          <div className="pbox">
            <span className='description-header'>
            Token Wallets and Security: 
            </span>
            <span>
            &nbsp;You are solely responsible for maintaining the security and confidentiality of your Token wallet and associated private keys or login credentials. Any unauthorized access to your wallet resulting in the loss or theft of Tokens is your responsibility. We strongly recommend implementing appropriate security measures to protect your Tokens and wallet.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Prohibited Activities
            </span>
            <span>
            &nbsp;You agree not to engage in any activities that may compromise the security, integrity, or functionality of the Stevencoin.io ecosystem or ANA Tokens. Prohibited activities include, but are not limited to:
            </span>
            <p></p>
            <p>
            Unauthorized access or attempts to gain unauthorized access to Stevencoin.io systems, smart contracts, or user accounts.
            </p>

            <p></p>
            <p>
            Engaging in any form of hacking, phishing, or other malicious activities aimed at disrupting or compromising the Stevencoin.io ecosystem.
            </p>

            <p></p>
            <p>
            Engaging in any fraudulent or deceptive activities, including the creation or dissemination of false information regarding ANA Tokens or Stevencoin.io.
            </p>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Third-Party Platforms:
            </span>
            <span>
            &nbsp;The Stevencoin.io ecosystem may interact with third-party platforms or services, including cryptocurrency exchanges or wallet providers. Your use of such third-party platforms is subject to their terms and conditions. We disclaim any responsibility or liability for the actions, policies, or services of these third-party platforms.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Intellectual Property:
            </span>
            <span>
            &nbsp; All intellectual property rights, including but not limited to trademarks, logos, and content associated with Stevencoin.io and ANA Tokens, are owned by Stevencoin.io or its licensors. You shall not use, reproduce, modify, or distribute any intellectual property without explicit permission from Stevencoin.io.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Governing Law and Dispute Resolution:
            </span>
            <span>
            &nbsp;These Token Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Stevencoin.io is registered. Any disputes arising out of or in connection with these Token Terms shall be resolved through arbitration or other dispute resolution mechanisms as determined by Stevencoin.io.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Severability:
            </span>
            <span>
            &nbsp;If any provision of these Token Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Entire Agreement: 
            </span>
            <span>
            &nbsp;These Token Terms constitute the entire agreement between you and Stevencoin.io regarding the acquisition, possession, and use of ANA Tokens, superseding any prior agreements, understandings, or communications, whether oral or written.
If you have any questions or concerns about these Token Terms, please contact us at [contact email]. Your continued use or possession of ANA Tokens indicates your acceptance of these Token Terms.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};


export default Terms;
