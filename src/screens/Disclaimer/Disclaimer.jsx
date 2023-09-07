import Button from '../../components/Button/Button';
import { useMediaQuery } from 'usehooks-ts';
import { ImgWebp } from '../../helpers/imgwebp';
import { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import { useState, useEffect } from 'react';

const Disclaimer = () => {
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
            <h1 className="pho">Disclaimer</h1>
          </div>
          <div className="col-md-6 pbgel">
            <img src="./assets/pbgel.svg" />
          </div>
        </div>
        <div className="text-boxes">
          <div className="pbox">
          This Disclaimer ("Disclaimer") governs your use of the anarchycoin.io platform ("Platform") and the ANA tokens ("Tokens") issued by anarchycoin.io ("we," "us," or "our"). By accessing or using the Platform and engaging with ANA tokens, you agree to comply with this Disclaimer.
          </div>
          <div className="pbox">
            <span className='description-header'>
            General Information:
            </span>
            <span>
            &nbsp;The information provided on the Platform, including but not limited to the content, materials, and resources, is for general informational purposes only. It does not constitute financial, investment, or legal advice. You should not rely on the information provided on the Platform for making any decisions.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Risk and Volatility:
            </span>
            <span>
            &nbsp;Cryptocurrencies, including ANA tokens, are subject to market risks, price volatility, and technological vulnerabilities. The value of ANA tokens can fluctuate significantly, and there is no guarantee of future value or returns. You should carefully consider the risks involved and seek professional advice before engaging with ANA tokens.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            No Investment Recommendation:
            </span>
            <span>
            &nbsp;The information provided on the Platform should not be construed as an endorsement, recommendation, or solicitation to invest in ANA tokens or any other cryptocurrencies. We do not provide any investment advice or make any claims regarding the potential profitability or suitability of ANA tokens for your specific circumstances.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Affiliate Programs:
            </span>
            <span>
            &nbsp;We may participate in affiliate programs and may earn commissions or referral fees when users engage with third-party products or services through links or promotional content provided on the Platform. However, the presence of affiliate programs does not affect our commitment to providing unbiased and accurate information.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Third-Party Content:
            </span>
            <span>
            &nbsp;The Platform may contain links to third-party websites, applications, or resources. We are not responsible for the accuracy, reliability, or completeness of any content or resources provided by third parties. Any reliance on third-party content is at your own risk, and we disclaim any liability for damages or losses arising from such reliance.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Third-Party Services:
            </span>
            <span>
            &nbsp;We may mention or recommend certain third-party services or products on the Platform. However, we do not endorse or guarantee the quality, suitability, or reliability of those services or products. Any engagement with third-party services or products is at your own discretion and risk.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            No Warranty:
            </span>
            <span>
            &nbsp;The Platform and the information provided on it are provided on an "as-is" basis, without any warranties or representations, whether expressed or implied. We disclaim all warranties, including but not limited to warranties of accuracy, reliability, merchantability, and fitness for a particular purpose.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Limitation of Liability:
            </span>
            <span>
            &nbsp;To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Platform or engagement with ANA tokens. This includes any damages resulting from errors, omissions, interruptions, or delays in the Platform's operation.
            </span>
          </div>

          <div className="pbox">
            <span className='description-header'>
            Modification of Disclaimer:
            </span>
            <span>
            &nbsp;We reserve the right to modify or update this Disclaimer at any time, with or without notice. It is your responsibility to review this Disclaimer periodically. By continuing to use the Platform and engage with ANA tokens, you agree to be bound by the updated Disclaimer.
            </span>
          </div>

          <div className="pbox">
          If you have any questions or concerns about this Disclaimer, please contact us at team@anarchycoin.io. Your continued use of the Platform and engagement with ANA tokens indicate your acceptance of this Disclaimer.
          </div>

        
        </div>
      </div>
    </>
  );
};


export default Disclaimer;
