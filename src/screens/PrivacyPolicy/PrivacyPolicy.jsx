import Button from '../../components/Button/Button';
import { useMediaQuery } from 'usehooks-ts';
import { ImgWebp } from '../../helpers/imgwebp';
import { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import { useState,useEffect } from 'react';

const PrivacyPolicy = () => {

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
            <h1 className="pho">Privacy Policy</h1>
          </div>
          <div className="col-md-6 pbgel">
            <img src="./assets/pbgel.svg" />
          </div>
        </div>
        <div className="text-boxes">
          <div className="pbox">
          This Privacy Policy ("Policy") outlines how anarchycoin.io ("we," "us," or "our"), collects, uses, discloses, and protects the personal information of users in connection with the use of ANA tokens ("Tokens") and the anarchycoin.io platform ("Platform"). We are committed to safeguarding the privacy of our users and ensuring the security of their personal information.
          </div>

          <div className="pbox">
            <span className='description-header'>
            Information Collection:
            </span>
            <span>
            &nbsp;We may collect certain personal information from users, including but not limited to:
            </span>
            <p></p>
            <p>
            Contact information such as name, email address, and phone number.
            </p>
            <p></p>
            <p>
            Financial information required for transactions or token purchases.
            </p>
            <p></p>
            <p>
            User preferences and settings related to the use of the Platform.
            </p>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Information Use:
            </span>
            <span>
            &nbsp;We may use the collected personal information for the following purposes:
            </span>
            <p></p>
            <p>
            Providing and improving the functionality and features of the Platform.
            </p>
            <p></p>
            <p>
            Processing transactions and facilitating the use of Tokens.

            </p>
            <p></p>
            <p>
            Responding to user inquiries, requests, and customer support.
            </p>
            <p></p>
            <p>
            Sending important notices, updates, and promotional communications.
            </p>
            <p></p>
            <p>
            Conducting research and analysis to enhance the user experience.
            </p>
            <p></p>
            <p>
            Complying with legal obligations and resolving disputes.
            </p>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Information Sharing:
            </span>
            <span>
            &nbsp;We may share personal information with the following entities or for the following purposes:
            </span>
            <p></p>
            <p>
            Authorized third-party service providers who assist in operating the Platform and providing related services.
            </p>
            <p></p>
            <p>
            Compliance with legal requirements, such as responding to lawful requests and protecting our rights, property, or safety.
            </p>
            <p></p>
            <p>
            Business partners or affiliates in connection with joint promotions or services, subject to your consent.
            </p>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Data Security:
            </span>
            <span>
            &nbsp;We implement appropriate technical and organizational measures to protect the personal information we collect and store. However, no method of transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Data Retention: 
            </span>
            <span>
            &nbsp;We retain personal information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            User Rights: 
            </span>
            <span>
            &nbsp;You have certain rights regarding your personal information, including the right to access, update, correct, and delete your information. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us using the information provided at the end of this Policy.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Cookies and Similar Technologies:
            </span>
            <span>
            &nbsp;The Platform may use cookies and similar technologies to enhance user experience, collect usage data, and analyze trends. You can manage your cookie preferences through your browser settings.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Third-Party Links:
            </span>
            <span>
            &nbsp;The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage you to review the privacy policies of those third parties before providing any personal information.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Children's Privacy:
            </span>
            <span>
            &nbsp;The Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to request its deletion.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Updates to the Policy:
            </span>
            <span>
            &nbsp;We reserve the right to update or modify this Policy at any time. Any changes will be effective upon posting the revised Policy on the Platform. We encourage you to review this Policy periodically to stay informed about how we collect, use, and protect your personal information.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Contact Us:
            </span>
            <span>
            &nbsp;If you have any questions, concerns, or requests regarding this Policy or the privacy practices of anarchycoin.io, please contact us at team@anarchycoin.io
            </span>
          </div>

          <div className="pbox">
          By using the Platform and engaging with ANA tokens, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
          </div>
        
        </div>
      </div>
    </>
  );
};


export default PrivacyPolicy;
