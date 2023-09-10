import style from './Home.module.scss';
import Button from '../../components/Button/Button';
import { useMediaQuery } from 'usehooks-ts';
import { ImgWebp } from '../../helpers/imgwebp';
import { useTranslation } from 'react-i18next';
import { useNavigate,useLocation } from 'react-router-dom';
import { useRef, useState,useEffect } from 'react';

import axios from 'axios';

import Web3 from 'web3';

import imageMapResizerMin from 'image-map-resizer';
import Partners from './modules/Partners/Partners';
import TeamSlider from './modules/TeamSlider/TeamSlider';
import Roadmap from './modules/Roadmap/Roadmap';
import { Web3Button } from '@web3modal/react';
import transakSDK from '@transak/transak-sdk';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { useAccount, useContractRead, useBalance, useContractReads, useNetwork,useContractWrite, useDisconnect, usePrepareContractWrite, useWaitForTransaction,useSwitchNetwork,erc20ABI as ERC20_ABI } from "wagmi";
import { BigNumber,ethers,utils } from "ethers";
import {humanReadableAmount,useTimer} from "./../../helpers/readableAmount"
import { configureChains, createClient,createWagmiClient, WagmiConfig, useFeeData } from 'wagmi';
import {
  polygon,
  avalanche,
  arbitrum,
  gnosis,
  bsc,
  optimism,
  fantom,
  bscTestnet,
  mainnet,
} from 'wagmi/chains';

/* 
let transak = new transakSDK({
  apiKey: '155fdf22-7980-434d-b8c7-9bdf71857e1c', // (Required)
  environment: 'PRODUCTION', // (Required)
  // .....
  // For the full list of customisation options check the link above
});

transak.on(transak.ALL_EVENTS, (data) => {
  console.log(data);
});

// This will trigger when the user closed the widget
transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
  transak.close();
});

// This will trigger when the user marks payment is made
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
  console.log(orderData);
  transak.close();
});

const openTransak = () => {
  transak.init();
};
 */



const Home = () => {
  const navigate = useNavigate();
  const main = useRef();

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  gnosis,
  bsc,
  bscTestnet,
  optimism,
  fantom,
];

const projectId = '7f5ccc02305b7a343543afb7e8f84e4a';

// Wagmi client
const { provider, chains : activeChains } = configureChains(chains, [
  w3mProvider({ projectId: projectId })
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains)
/* 
/*  themeVariables={{"--w3m-background-color" : "#34985B","--w3m-accent-color" : "#34985B"}}    */

  return (
    <>
      <WagmiConfig client={wagmiClient}>

      <BuyScreen/>
      <VideoArea />
      <HowToBuy />
      <TokenBreakdown />
      <HowToClaim />
      <Dao /> 
            </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
    </>
  );
};


const VideoArea = () => {
  const [isMuted, setIsMuted] = useState(true);

  const vidRef = useRef(null);
  
  const playVideo = () => {
    vidRef?.current?.play();
  }

  const pauseVideo = () => {
    vidRef?.current?.pause();
  }


function changeSound(){
  setIsMuted(!isMuted);
}
  return (
<>
<div  className="video-box"
  style={{position : "relative", }}
   id='about'
   onClick={playVideo}>
<video
controls
  id="homeVideo"
  className="fullscreen-video"
  poster="./assets/splash.jpg"
  playsInline
  style={{position : "relative", }}
>
  <source src="./assets/video.mov" type="video/mp4" /> 
  Your browser does not
  support the video tag.
  
</video>
{/* <div className='sound-div' onClick={changeSound}>
  {isMuted ? <i className="fas fa-volume-off sound-icon"></i> :  <i className="fas fa-volume-up sound-icon volume-up"></i> }
 
  </div> */}
</div>

</>

  )


}

const HowToBuy = () => {

    
  return (
<>
<div className="container htb" id='how-to-buy'>
  <div className="row">
    <div className="col-md-6">
      <h2 className="htb">How to buy</h2>
    </div>
    <div className="col-md-6">
      <p className="pex">
        The $STEVE token sale is your chance to be part of a movement, a new
        blockchain project that promises to shake up the industry. By
        purchasing $STEVE tokens, you’ll be taking a first step away from a
        corrupt system to it’s core. Become part of something that’s truly
        decentralised.
      </p>
    </div>
  </div>
  <div className="d-grid gap-2 d-md-none mt-4 mb-4">
    <button
      type="button"
      className="btn btn-light btn-lg btn-block"
      style={{ fontWeight: 700 }}
      onClick={() => {
        let elem = document.getElementById("buy-div")
            elem.scrollIntoView({behavior: "smooth"})
      }}
    
    >
      BUY $STEVE NOW &nbsp;
      <i className="bi bi-arrow-up-right" />
    </button>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="htb-box">
        <div className="text-end">
          <img src="./assets/coins.png" />
        </div>
        <div className="text">
          <h3>ETH / USDT / BNB</h3>
          <p>
            To exchange your ETH, USDT or BNB for $STEVE tokens, simply select
            the corresponding button in the buy widget and enter the amount you
            wish to swap. Make sure to pay attention to the gas cost when
            purchasing.{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="htb-box">
        <div className="text-end">
          <img src="./assets/card.png" />
        </div>
        <div className="text">
          <h3>Buy with card</h3>
          <p>
            If you don’t have ETH, USDT or BNB to participate in the token
            sale. You can top up your compatible web3 wallet directly with
            Transak. Simply click the “CARD” button on the buy widget and
            follow the onscreen steps.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5 mb-5 d-none d-md-block text-center">
    <button type="button" className="nav-cbtn" 
    onClick={() => {
      let elem = document.getElementById("buy-div")
          elem.scrollIntoView({behavior: "smooth"})
    }}
      style={{ fontWeight: 700 }}
      >
      BUY $STEVE NOW &nbsp;
      <i className="bi bi-arrow-up-right" />
    </button>
  </div>
</div>
<hr style={{ marginTop: 100 }} />
</>


  )


}

const TokenBreakdown = () => {

    
  return (
<>
<div className="container" id='token-breakdown'>
  <h2 className="tbd">Token breakdown</h2>
  <div className="row mt-5">
    <div className="col-md-6">
      <div className="ztzf">
        <h3>
          $STEVE is a governance token on the Ethereum blockchain <br />
          (ERC20)
        </h3>
        <p>
          <span>80%</span> of the <span>69,420,000,000</span> STEVEN tokens
          are issued for sale.{" "}
        </p>
        <p>
          <span>20%</span> of the <span>69,420,000,000</span> STEVEN tokens are supplied for liquidity.{" "}
        </p>
      </div>
      <div className="ztzff text-start">
        <span>4.5%</span> <span>Sell &amp; transfer tax to DAO</span>
      </div>
      <div className="ztzff text-end">
        <span>0.5%</span> <span>Sell &amp; transfer burn</span>
      </div>
      <div style={{ marginTop: 70 }}>
        <img src="./assets/arrow.svg" className="me-4 d-none d-md-inline" />


        <button type="button" className="nav-cbtn"
      style={{ fontWeight: 700 }}
      onClick={() => {
        let elem = document.getElementById("buy-div")
            elem.scrollIntoView({behavior: "smooth"})
      }}
      >
          BUY $STEVE NOW &nbsp;
          <i className="bi bi-arrow-up-right" />
        </button>
      
      </div>
    </div>
    <div className="col-md-6">
      <img src="./assets/0204.png" style={{ width: "100%" }} />
    </div>
  </div>
</div>
<hr style={{ color: "#fff" }} />
</>

  )


}

const HowToClaim = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const contractAddressString = "YOUR TOKEN ADDRESS HERE"


  return (
<>
<div className="container" style={{ marginTop: 100 }} id='how-to-claim'>
<div className="row">
  <div className="col-md-6">
    <h3 className="htc">How to claim:</h3>
  </div>
  <div className="col-md-6">
    <p className="htcp">
    Steven investors will be able to claim their $STEVE tokens after the completion of the ICO. Please note that if you add the $STEVE token to your web3 wallet, purchased tokens won't display until you have claimed $STEVE after the ICO is complete.
    </p>
  </div>
  <div className="col-md-12 d-none d-md-block mt-5" />
  <div className="col-md-6">
  <div className="htcpi row position-relative">
      <div className='col-3 col-md-2'>
      <img src="./assets/one.svg" />
      </div>
      <div className='col-9 col-md-10 vertical-center'>
      Buy widget will convert into a claims
      function.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="htcpi row position-relative">
      <div className='col-3 col-md-2'>
      <img src="./assets/two.svg" />
      </div>
      <div className='col-9 col-md-10 vertical-center'>
      You can manually add the $STEVE token to your wallet with the contract address:

      </div>
    </div>
  </div>
</div>
</div>


<div className="addreslink">
<img src="./assets/hr.png" className="hrimg" />
<div className="container">
  <div className="col-md-4"></div>
<div className="col-md-4 offset-md-4">
    <div className="adlbox copy-text" >
      
      {contractAddressString}
      
      <button className="btn btn-success integration-checklist__copy-button" onClick={() =>  navigator.clipboard.writeText(contractAddressString)}>
        <img src="./assets/copy.svg" />
      </button>
    </div>
</div>

{/*   <div className="col-md-4 ">
    <div className="adlbox">
      0x0......
      <button className="btn btn-success">
        <img src="./assets/copy.svg" />
      </button>
    </div>
  </div> */}
</div>
</div>


</>


  )


}

const Dao = () => {

    
  return (
<>
<div className="container">
  <div className="dao">
    <div className="row">
      <div className="col-md-6">
        <h2 className='tbd'>
          Steven
          <br />
          DAO
        </h2>
        <img src="./assets/dao.png" className="iw" />
      </div>
      <div className="col-md-6">
        <p>
          The <span>Steven DAO</span> is primarily Philanthropy and
          Investment based.
        </p>
        <p>
          <span>Gnosis Safe</span> will help to secure the DAO treasury
          through multi-signature solutions.
        </p>
        <p>
          Each month the <span>DAO</span> will vote on the best proposals put
          forward from community members on how the funds are spent.
        </p>
        <p>
          Community members will also elect and vote out <span>DAO</span>{" "}
          ambassadors who work with the everydayrunning of the{" "}
          <span>DAOs</span> treasury.
        </p>
      </div>
    </div>
  </div>
</div>
<hr />
</>

  )


}

const tokenDecimals = 18

const externalTokens = {
  USDT: {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: "6"
  },
  BNB: {
    address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    decimals: "18"
  }
}

const toUsdFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
})

function readableNumberFormat(myNumber) {
  return myNumber.toLocaleString("de-DE", { minimumFractionDigits: 0 })
}

const BuyScreen = (() => {
  const { disconnect } = useDisconnect()
  const {  address : account, isConnecting, isDisconnected,isConnected } = useAccount()
  const BNBChainId = 56 // tac
  const ETHChainId = 1;
  const bnbFeeAmount = ethers.utils.parseEther("0.0084")
  const backendUrl = "http://localhost:3333"
  const BNBPresaleContract = "0x5d267900b71b0170Ccd1C5405EAE6c7fc4A62317"
  const { data: ethBalance, isError, isLoading } = useBalance({
    address: account,
    chainId:ETHChainId
  })


  const { data: bnbBalance } = useBalance({
    address: account,
    chainId: BNBChainId
  })
const CONTRACT_ADDRESS = "0x5d267900b71b0170Ccd1C5405EAE6c7fc4A62317"

const { TOKEN_PRICE, ALREADY_RISED, MAX_SOLD,ALREADY_SOLD,MAX_RISED,PHASE_MAX_RISED,MIN_TOKEN_AMOUNT } = {
  "TOKEN_PRICE" : {
    "0" : "0",
    "1" : "0.00021",
    "2" : "0.00024",
    "3" : "0.00027",
    "4" : "0.0003",
    "5" : "0.00033",
    "6" : "0.00036",
    "7" : "0.00039",
    "8" : "0.00042"
    },
    "MIN_TOKEN_AMOUNT" : {
      "0" : 0,
      "1" : 45000,
      "2" : 42000,
      "3" : 37000,
      "4" : 34000,
      "5" : 31000,
      "6" : 28000,
      "7" : 26000,
      "8" : 23000
      },
    "ALREADY_RISED" :  {
      "0" : "0",
      "1" : "0",
      "2" : "1457820",
      "3" : "3123900",
      "4" : "4998240",
      "5" : "7080840",
      "6" : "9371700",
      "7" : "11870820",
      "8" : "14578200"
      },
      "ALREADY_SOLD" :  {
        "0" : "0",
        "1" : "0",
        "2" : "6942000000",
        "3" : "13884000000",
        "4" : "20826000000",
        "5" : "27768000000",
        "6" : "34710000000",
        "7" : "41652000000",
        "8" : "48594000000"
        },
        "MAX_SOLD" :  {
          "0" : "0",
          "1" : "6942000000",
          "2" : "13884000000",
          "3" : "20826000000",
          "4" : "27768000000",
          "5" : "34710000000",
          "6" : "41652000000",
          "7" : "48594000000",
          "8" : "55536000000"
          },
      "PHASE_MAX_RISED" :  {
        "0" : "0",
        "1" : "1457820",
        "2" : "3123900",
        "3" : "4998240",
        "4" : "7080840",
        "5" : "9371700",
        "6" : "11870820",
        "7" : "14578200",
        "8" : "17493840",
        
        },
    "MAX_RISED" : "17493840"
}
const PRESALE_ABI = [
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "roundId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tokenPriceInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimStart",
						"type": "uint256"
					}
				],
				"internalType": "struct StevenPresale.AddPhase[]",
				"name": "_addPhase",
				"type": "tuple[]"
			}
		],
		"name": "addPhases",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenAmount",
				"type": "uint256"
			}
		],
		"name": "buyTokensWithBnb",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyTokensWithEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
  {
		"inputs": [],
		"name": "buyWithBnb",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenAmount",
				"type": "uint256"
			}
		],
		"name": "buyTokensWithUsdt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_currentPhase",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "claimableStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_phases",
				"type": "uint256[]"
			}
		],
		"name": "claimAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getStuckToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_roundId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isAutoPhase",
				"type": "bool"
			}
		],
		"name": "setActivePhase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "setToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "setWhiteListPresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_roundId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			}
		],
		"name": "updatePhaseClaimTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethAmount",
				"type": "uint256"
			}
		],
		"name": "withdrawETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "activePhase",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "BNB",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bnbUsdData",
		"outputs": [
			{
				"internalType": "contract AggregatorInterface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "_phases",
				"type": "uint256[]"
			}
		],
		"name": "claimableAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "claimedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deservedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "discountRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_weiAmount",
				"type": "uint256"
			}
		],
		"name": "estimatedToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ethUsdData",
		"outputs": [
			{
				"internalType": "contract AggregatorInterface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBnbPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bnbAmount",
				"type": "uint256"
			}
		],
		"name": "getBnbToUsd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentTokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bnbAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tokenPriceInUsd",
				"type": "uint256"
			}
		],
		"name": "getEstimatedTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_usdtAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tokenPriceInUsd",
				"type": "uint256"
			}
		],
		"name": "getEstimatedUsdtTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEthPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethAmount",
				"type": "uint256"
			}
		],
		"name": "getEthToUsd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_roundId",
				"type": "uint256[]"
			}
		],
		"name": "getPhases",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "roundId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tokensSold",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fundsRaisedEth",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fundsRaisedUsdt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fundsRaisedBnb",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tokenPriceInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimStart",
						"type": "uint256"
					}
				],
				"internalType": "struct StevenPresale.Phase[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isAutoMovePhase",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isClaimableActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isWhitelistPresale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "phase",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokensSold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundsRaisedEth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundsRaisedUsdt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundsRaisedBnb",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenPriceInUsd",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimStart",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "contract IRouter",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDT",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "usdToEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

  const { chain } = useNetwork()
  const {
    chains,
    error,
    isLoading: switchNetworkLoaiding,
    pendingChainId,
    switchNetwork
  } = useSwitchNetwork()

  const { data: USDTBalance} = useContractRead({
    address: externalTokens.USDT.address,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    enabled: !!account,
    args: [account],
    watch: true,
    chainId : ETHChainId
  })

  const { data: BNBBalance } = useContractRead({
    address: externalTokens.BNB.address,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    enabled: !!account,
    args: [account],
    watch: true,
    chainId : ETHChainId
  })

  const [isLessThanMinAmount, setIsLessThanMinAmount] = useState(false)

  const [amountValue, setAmountValue] = useState(1)
  const [showSuccessfulModal, setShowSuccessfulModal] = useState(false)
  const [showLoadingModal, setShowLoadingModal] = useState(false)

  const [ethInput, setEthInput] = useState(BigNumber.from("0"))
  const [readebleEthInput, setReadebleEthInput] = useState("")

  const [walletConnected, setWalletConnected] = useState(false);
  const [isRedirectMetamask, setIsRedirectMetamask] = useState(false);

  const [bnbValueInput, setBnbValueInput] = useState(BigNumber.from("0"))
  const [bnbInput, setBnbInput] = useState(BigNumber.from("0"))
  const [readebleBnbInput, setReadebleBnbInput] = useState("")

  const [usdtInput, setUsdtInput] = useState(BigNumber.from("0"))
  const [readebleUsdtInput, setReadebleUsdtInput] = useState("")

  const [estimatedUsdtToAna, setEstimatedUsdtToAna] = useState(0)

  const [buyMethod, setBuyMethod] = useState("eth")

  const connectMetamask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      //await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      setIsRedirectMetamask(true)

    }
  };


  const { data: allowanceUsdt } = useContractRead({
    address: externalTokens.USDT.address,
    abi: ERC20_ABI,
    functionName: "allowance",
    enabled: !!account, 
    args: [account, CONTRACT_ADDRESS],
    watch: true,
    chainId : ETHChainId
  })
  const { config: approveUsdt } = usePrepareContractWrite({
    address:  externalTokens.USDT.address,
    abi: ERC20_ABI,
    functionName: "approve", 
    args: [CONTRACT_ADDRESS, usdtInput],
    //overrides : [{from : account}],
    chainId : 1,
    enabled: !!account  && buyMethod == "usdt" && chain && chain?.id == ETHChainId && !!usdtInput
  })


  const { data: approveUsdtData, write: approveUsdtFn, reset : approveUsdtReset } = useContractWrite(
    approveUsdt
  )


  const { status: approveUsdtStatus } = useWaitForTransaction({
    hash: approveUsdtData?.hash
  })

  const { config: buyWithUsdt } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "buyTokensWithUsdt",
    args: [usdtInput],
    enabled: !!account && allowanceUsdt && usdtInput && BigNumber.from(allowanceUsdt).gte(usdtInput)   //&& buyMethod == "usdt" && chain?.id == ETHChainId 
  })

  const { data: buyWithUsdtData, write: buyWithUsdtFn ,reset : buyWithUsdtReset} = useContractWrite(
    buyWithUsdt
  )

  const { status: buyWithUsdtStatus } = useWaitForTransaction({
    hash: buyWithUsdtData?.hash
  })

  /*  */

  const { config: buyWithEth } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "buyTokensWithEth",
    overrides: { value: ethInput },
    enabled: !!account && buyMethod == "eth" && chain?.id == ETHChainId
  })

  const { data: buyWithEthData, write: buyWithEthFn, reset : buyWithEthReset } = useContractWrite(
    buyWithEth
  )

  const { status: buyWithEthStatus } = useWaitForTransaction({
    hash: buyWithEthData?.hash
  })

  /*  */

  const { data: allowanceBnb } = useContractRead({
    address: externalTokens.BNB.address,
    abi: ERC20_ABI,
    functionName: "allowance",
    enabled: !!account,
    args: [account, CONTRACT_ADDRESS],
    watch: true,
    chainId : ETHChainId
  })

  const { config: approveBnb } = usePrepareContractWrite({
    address: externalTokens.BNB.address,
    abi: ERC20_ABI,
    functionName: "approve",
    args: [CONTRACT_ADDRESS, bnbInput],
    enabled: !!account && buyMethod == "bnb"
  })

  const { data: approveBnbData, write: approveBnbFn } = useContractWrite(
    approveBnb
  )

  const { status: approveBnbStatus } = useWaitForTransaction({
    hash: approveBnbData?.hash
  })
  const { data: activePhase } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "activePhase",
    args: [],
    watch: true,
    chainId : ETHChainId
  })


  const { data: phaseInfo } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "phase",
    args: [activePhase],
    watch: true,
    chainId : ETHChainId

  })

  const { data: estimatedBnbToAna } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "getEstimatedTokenAmount",
    args: [bnbInput, phaseInfo?.tokenPriceInUsd],
    enabled: !!account, //&& bnbInput.gt(BigNumber.from("0")),
    chainId : ETHChainId
  })

  
  const { config: buyWithBnb } = usePrepareContractWrite({
    address: BNBPresaleContract,
    abi: PRESALE_ABI,
    functionName: "buyWithBnb",
    overrides: { value: bnbValueInput },
    enabled: !!account && buyMethod == "bnb" && chain?.id == BNBChainId && !!estimatedBnbToAna && BigNumber.from(estimatedBnbToAna).gt(BigNumber.from(ethers.utils.parseEther(String(MIN_TOKEN_AMOUNT[activePhase?.toString()]))))
  })

  const { data: buyWithBnbData, write: buyWithBnbFn,reset : buyWithBnbReset } = useContractWrite(
    buyWithBnb
  )

  const { status: buyWithBnbStatus } = useWaitForTransaction({
    hash: buyWithBnbData?.hash
  })
 
/* 
  const { config: buyWithBnb } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "buyTokensWithBnb",
    args: [bnbInput],
    enabled: !!account && buyMethod == "bnb"
  })

  console.log("buyMethod",buyMethod)
  console.log("bnbInput",bnbInput.toString())

  const { data: buyWithBnbData, write: buyWithBnbFn } = useContractWrite(
    buyWithBnb
  )

  const { status: buyWithBnbStatus } = useWaitForTransaction({
    hash: buyWithBnbData?.hash
  }) */

  const configProps = {
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    enabled: true,
    watch: true
  }



  const { data: estimatedEthToAna } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "estimatedToken",
    args: [ethInput],
    enabled: true,
    chainId : ETHChainId
  })
  const allPhases = []
  for (let i = 1; i <= Number(activePhase); i++) {
    allPhases.push(i)
  }

  const { data: claimableAmount } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "claimableAmount",
    watch: true,
    args: [account, allPhases],
    enabled: !!account && allPhases.length > 0,
    chainId : ETHChainId

  })

  const { data: deservedAmount } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "deservedAmount",
    args: [account, activePhase],
    enabled: !!account,
    watch: true,
    chainId : ETHChainId

  })


  

  


  const { data: getCurrentTokenPrice } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "getCurrentTokenPrice",
    args: [],
    watch: true,
    chainId : ETHChainId

  })
  const location = useLocation()
  const openRef = useRef(null);


  useEffect(()=> {
    if (location.hash) {
      if(location.hash != "#buy-div"){
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
      }
      
    }else{
      window.scrollTo(0, 0);
    }
}, [])
//estimatedBnbToAna
  useEffect(() => {
    if (!(window.ethereum || window.web3) ) {
      setIsRedirectMetamask(true)

    }
  }, []);

  useEffect(() => {
    const _estimatedBnbToAna =  Number(humanReadableAmount(estimatedBnbToAna,0,tokenDecimals))

    if(_estimatedBnbToAna < MIN_TOKEN_AMOUNT[activePhase?.toString()] && _estimatedBnbToAna != 0){
      setIsLessThanMinAmount(true)
    }else{
      setIsLessThanMinAmount(false)

    }

  }, [estimatedBnbToAna]);

  useEffect(() => {
    if (isConnected) {
      connectMetamask();
    }
  }, [account, isConnected]);

  useEffect(() => {
    if (
      buyWithBnbStatus == "success"
    ) {
      setShowLoadingModal(false)
      setShowSuccessfulModal(true)
      buyWithBnbReset()
    } else if(buyWithBnbStatus == "loading"){
      setShowLoadingModal(true)
    }
  }, [buyWithBnbStatus])

  useEffect(() => {
    if (
      buyWithEthStatus == "success"
    ) {
      setShowLoadingModal(false)
      setShowSuccessfulModal(true)
      buyWithEthReset()
    } else if(buyWithEthStatus == "loading"){
      setShowLoadingModal(true)
    }
  }, [buyWithEthStatus])

  useEffect(() => {
    if (
      buyWithUsdtStatus == "success"
    ) {
      setShowLoadingModal(false)
      setShowSuccessfulModal(true)
      buyWithUsdtReset()
    } else if(buyWithUsdtStatus == "loading"){
      setShowLoadingModal(true)
    }
  }, [buyWithUsdtStatus])

  useEffect(() => {
    if (
      approveUsdtStatus == "loading" 
    ) {
      setShowLoadingModal(true)
    } else if(approveUsdtStatus == "success" ){
      setShowLoadingModal(false)
      approveUsdtReset()
    }
  }, [approveUsdtStatus])

  useEffect(() => {
    if (!!account ) {
      if(chain?.id == ETHChainId){
        setBuyMethod("eth")
      }else if(chain?.id == BNBChainId){
        setBuyMethod("bnb")
      }else{
        switchNetwork?.(ETHChainId)
      }

    }
  }, [])
  useEffect(() => {
    if (!!account ) {
      if(chain?.id == ETHChainId){
        if(buyMethod !="usdt"){
          setBuyMethod("eth")
        }
      }else if(chain?.id == BNBChainId){
        setBuyMethod("bnb")
      }else{
        switchNetwork?.(ETHChainId)
      }

    }
  }, [chain?.id])

  useEffect(() => {
    if (!!account ) {
      if(buyMethod == "eth" || buyMethod == "usdt"){
        switchNetwork?.(ETHChainId)
      }else if(buyMethod == "bnb"){
        switchNetwork?.(BNBChainId)
      }

    }
  }, [buyMethod])
/* 
  useEffect(() => {


    if (!!account && buyMethod != "bnb" && chain?.id == BNBChainId ) {
      setBuyMethod("bnb")
    }
  }, [account,chain?.id]) */
/* 
  useEffect(() => {
    if (!!account && buyMethod != "bnb") {
      switchNetwork?.(ETHChainId)
      setBuyMethod("eth")

    }
  }, [account,chain?.id])
 */
/* 
  useEffect(() => {
    if (!!account && chain?.id != BNBChainId && buyMethod == "bnb") {
      switchNetwork?.(BNBChainId)
    }else if(!!account && chain?.id != ETHChainId && buyMethod == "eth"){
      switchNetwork?.(ETHChainId)
    }
  }, [buyMethod,account,chain?.id]) */

  const handleEthInputChange = event => {
    // 👇 Get input value from "event"
    const inputAmount = event.target.value
    setReadebleEthInput(event.target.value)
    setEthInput(utils.parseUnits(inputAmount, 18))
  }

  const handleBnbInputChange = event => {
    // 👇 Get input value from "event"
    const inputAmount = event.target.value
    setReadebleBnbInput(event.target.value)
    setBnbValueInput(utils.parseUnits(inputAmount, externalTokens.BNB.decimals))
    if(utils.parseUnits(inputAmount, externalTokens.BNB.decimals).lt(bnbFeeAmount)){
    setBnbInput(utils.parseUnits("0", externalTokens.BNB.decimals))

    }else{
      setBnbInput(utils.parseUnits(inputAmount, externalTokens.BNB.decimals).sub(bnbFeeAmount))
    }
  }

  function maxEthInput() {
    const formattedEth = (Number(ethBalance?.formatted) - 0.005).toFixed(3)
    if (Number(ethBalance?.formatted) - 0.005 < 0) {
      setReadebleEthInput(0)
      setEthInput(utils.parseUnits("0", 18))
    } else {
      setReadebleEthInput(formattedEth)
      setEthInput(utils.parseUnits(formattedEth, 18))
    }
  }
  const tokenWithDecimals = BigNumber.from("1000000000000000000")




  function setMaxUsdtEstimated(usdtInputBN) {
    const estimatedUsdt = usdtInputBN
      .mul(tokenWithDecimals)
      .div(getCurrentTokenPrice)
    setEstimatedUsdtToAna(estimatedUsdt)
  }

  function maxUsdtInput() {
    const formattedEth = humanReadableAmount(
      USDTBalance,
      3,
      externalTokens.USDT.decimals
    )
    setReadebleUsdtInput(formattedEth)
    setUsdtInput(USDTBalance)
    setMaxUsdtEstimated(USDTBalance)
  }
  
  const handleUsdtInputChange = event => {
    // 👇 Get input value from "event"
    const inputAmount = event.target.value
    setReadebleUsdtInput(inputAmount)
    const usdtInputBN = ethers.utils.parseUnits(
      inputAmount,
      6
    )

    const estimatedUsdt = usdtInputBN
    .mul(tokenWithDecimals)
    .div(getCurrentTokenPrice)
    setEstimatedUsdtToAna(estimatedUsdt)
    setUsdtInput((usdtInputBN))
  }

  function maxBnbInput() {
    const formattedBnb = (Number(bnbBalance?.formatted) - 0.015).toFixed(3)
    if (Number(bnbBalance?.formatted) - 0.015 < 0) {
      setReadebleBnbInput(0)
      setBnbInput(utils.parseUnits("0", 18))
      setBnbValueInput(utils.parseUnits("0", 18))
    } else {
      setReadebleBnbInput(formattedBnb)
      setBnbValueInput(formattedBnb)
      setBnbInput(utils.parseUnits(formattedBnb, 18).sub(bnbFeeAmount))
    }
  }

  function maxBnbInput2() {
    const formattedEth = humanReadableAmount(
      BNBBalance,
      3,
      externalTokens.BNB.decimals
    )
    setReadebleBnbInput(formattedEth)
    setBnbInput(BNBBalance)
  }

  const totalRised =
    Number(humanReadableAmount(phaseInfo?.tokensSold, 0, tokenDecimals)) *
      Number(TOKEN_PRICE[activePhase?.toString()]) +
    Number(ALREADY_RISED[activePhase?.toString()])

  const maxTokens = readableNumberFormat(
    Number(MAX_SOLD[activePhase?.toString()])
  )
  const tokensSold = readableNumberFormat(
    Number(humanReadableAmount(phaseInfo?.tokensSold, 0, tokenDecimals)) +  Number(ALREADY_SOLD[activePhase?.toString()])
  )

  const timeLeft = useTimer(String(document.querySelector('meta[name="leftTime"]').content))

  /* 
  {toUsdFormat.format(totalRised)} /{" "}
                    <span>{toUsdFormat.format(PHASE_MAX_RISED[activePhase?.toString()])}</span>
  */
  /* const percentege =
    ((Number(humanReadableAmount(phaseInfo?.tokensSold, 0, tokenDecimals)) + Number(ALREADY_RISED[activePhase?.toString()]) ) *
      100) /
    Number(humanReadableAmount(phaseInfo?.maxTokens, 0, tokenDecimals))
    console.log("percentege",percentege) */
    const percentege =
    (totalRised *
      100) /
    Number(PHASE_MAX_RISED[activePhase?.toString()])
  const percentegeCss = percentege + "%"

  return (
    <>
      {showLoadingModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShowLoadingModal(false)
                  }}
                />
              </div>
              <div className="modal-body">
                <h4 className="text-center">
                  Your transaction is in progress{" "}
                </h4>

                <div style={{ marginBottom: "40px", marginTop: "28px", fontSize : "60px" }} className='text-center'>
                <i class="fas fa-spinner fa-pulse"></i>
                  {/* <CircularLoading /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSuccessfulModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShowSuccessfulModal(false)
                    setShowLoadingModal(false)
                  }}
                />
              </div>
              <div className="modal-body">
                <h4 className="text-center">Your purchase was successful </h4>

                <div style={{ marginBottom: "20px", marginTop: "10px" }}>
                  <div className="text-center">
                    <i
                      style={{ fontSize: "5rem" }}
                      className="bi bi-check-circle"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container" ref={openRef} id="mission-statement">
        <div className="row">
          <div className="col-md-8">
            <img className="mt-5 homeils" src="./assets/title.svg" />
            <img
              className="mt-5 homeils"
              src="./assets/heroImage.png"
            />
            <div className="d-grid gap-2 d-md-none"></div>
          </div>
          <div className="col-md-4"  id='buy-div'>
            <div className="mt-5 stage-screen">
              <div className="stage-inside" >
                <h3>Presale stage {activePhase?.toString()}</h3>
                 <h4 className="mt-4">Stage {activePhase?.toString()} time left:</h4>
              <div className="row timeleft">
                <div className="col n">
                  {timeLeft.days} <span>d</span>
                </div>
                <div className="col-1 c">:</div>
                <div className="col n">
                {timeLeft.hours} <span>h</span>
                </div>
                <div className="col-1 c">:</div>
                <div className="col n">
                {timeLeft.minutes} <span>m</span>
                </div>
              </div>
                <div className="perc-bar">
                  <span>{percentege.toFixed(4)}%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: percentegeCss }}
                      aria-valuenow={Number(percentege.toFixed(0))}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="clearfix sold-rised">
                  <div className="float-start">SOLD:</div>
                  <div className="float-end">
                    {tokensSold} / <span>{maxTokens}</span>
                  </div>
                </div>
                <div className="clearfix sold-rised">
                  <div className="float-start">RAISED:</div>
                  <div className="float-end">
                    {toUsdFormat.format(totalRised)} /{" "}
                    <span>{toUsdFormat.format(PHASE_MAX_RISED[activePhase?.toString()])}</span>
                  </div>
                </div>

                {!!true && (
                  <>
                    <h4 style={{ paddingTop: "10px" }}>
                      You have{" "}
                      {!!claimableAmount
                        ? humanReadableAmount(claimableAmount, 1, tokenDecimals)
                        : humanReadableAmount(
                            "0",
                            1,
                            tokenDecimals
                          )}{" "}
                      $ANA tokens
                    </h4>

                    <div className="ethusdtbnb">
                      <ul className="nav nav-tabs nav-pills nav-fill">
                        <li className="nav-item">
                          <a
                            className= { buyMethod == "eth" ? "nav-link active" : "nav-link" }
                            data-bs-toggle="tab"
                            href="#eth"
                            onClick={() => {
                              setBuyMethod("eth")
                            }}
                          >
                            ETH
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={ buyMethod == "usdt" ? "nav-link active" : "nav-link" }
                            data-bs-toggle="tab"
                            href="#usdt"
                            onClick={() => {
                              setBuyMethod("usdt")
                            }}
                          >
                            USDT
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={ buyMethod == "bnb" ? "nav-link active" : "nav-link" }
                            data-bs-toggle="tab"
                            href="#bnb"
                            onClick={() => {
                              setBuyMethod("bnb")
                            }}
                          >
                            BNB
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content eubtab">
                      { buyMethod == "eth" &&
                      <div className="tab-pane container active" id="eth">
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <p>
                              {/* Amount you pay:  */} Pay <span>ETH</span>
                            </p>
                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                onChange={handleEthInputChange}
                                value={readebleEthInput}
                              />
                              <a className="max" onClick={maxEthInput}>
                                Max
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {/* Amount you : */} Receive <span>$ANA</span>
                            </p>

                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                disabled={true}
                                value={humanReadableAmount(
                                  estimatedEthToAna,
                                  1,
                                  tokenDecimals
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      }
                      
                      { buyMethod == "usdt" &&
                      
                      <div className="tab-pane container active" id="usdt">
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <p>
                              {/* Amount you pay:  */}Pay <span>USDT</span>
                            </p>
                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                onChange={handleUsdtInputChange}
                                value={readebleUsdtInput}
                              />
                              <a className="max" onClick={maxUsdtInput}>
                                Max
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {/* Amount you receive: */}Receive{" "}
                              <span>$ANA</span>
                            </p>

                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                disabled={true}
                                value={humanReadableAmount(
                                  estimatedUsdtToAna,
                                  1,
                                  tokenDecimals
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      }

{ buyMethod == "bnb" &&

                      <div className="tab-pane container active" id="bnb">
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <p>
                              {/* Amount you pay:  */}Pay <span>BNB</span>
                            </p>
                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                onChange={handleBnbInputChange}
                                value={readebleBnbInput}
                              />
                              <a className="max" onClick={maxBnbInput}>
                                Max
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {/* Amount you receive: */}Receive{" "}
                              <span>$ANA</span>
                            </p>

                            <div className="form-group">
                              <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="0"
                                id="inputLarge"
                                disabled={true}
                                value={!!estimatedBnbToAna ? humanReadableAmount(
                                  estimatedBnbToAna,
                                  1,
                                  tokenDecimals
                                )  : "0"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                    </div>

                  </>
                )}
                <div className="col-md-12 mt-4" >
                  <div className="d-grid gap-2 text-center">
                    {!account ? (
                      <></>
                    ) : (
                      <>
                        {buyMethod == "eth" && (
                          <button
                          type="button"
                          className="btn btn-light btn-lg buybutton "
                          onClick={() => buyWithEthFn()}
                          style={{ fontWeight: 700 }}>
                          BUY $ANA
                        </button>
                        )}

                        {buyMethod == "usdt" && !!allowanceUsdt && 
                          BigNumber.from(allowanceUsdt).lt(usdtInput) && (
                            <button
                              className="btn btn-lg btn-block buybutton"
                              onClick={() => approveUsdtFn?.()}
                            >
                              APPROVE
                            </button>
                          )}

                        {buyMethod == "usdt" && !!allowanceUsdt &&
                          BigNumber.from(allowanceUsdt).gte(usdtInput) && (
                            <button
                            type="button"
                            className="btn btn-light btn-lg buybutton"
                            onClick={() => buyWithUsdtFn?.()}
                            style={{ fontWeight: 700 }}
                          >
                            BUY $ANA
                          </button>
                          )}

                        
                        {buyMethod == "bnb" && 
                          <>
                          <button
   type="button"
   className="btn btn-light btn-lg buybutton"
   onClick={() => buyWithBnbFn()}
   style={{ fontWeight: 700 }}
   disabled={isLessThanMinAmount || (!!estimatedBnbToAna && BigNumber.from(estimatedBnbToAna).eq(BigNumber.from("0")))}
 >
   BUY $ANA
 </button>
 { isLessThanMinAmount &&
                         <div>Please buy at least {MIN_TOKEN_AMOUNT[activePhase?.toString()]} $ANA.</div>
                         }
                         </>
                         }
                         <>
                         </>

                        {/* <button
                          className="btn btn-lg btn-block buybutton"
                          onClick={() => disconnect()}
                          style={DISCONNECT_BUTTON}>
                          Disconnect
                        </button> */}
                      </>
                    )}
      
                        {!walletConnected &&  !isRedirectMetamask   ?  <></>: (
                        walletConnected ? <></>  : <>
                         <><a
                       href="https://metamask.app.link/dapp/Stevencoin.io"
                        className={"btn btn-lg btn-block buybutton"}
                      >Metamask</a>

                      </></>
                      )}
                      <div id='web3button'>
<Web3Button  /> 
                      </div>
<button
                          type="button"
                          className="btn btn-light btn-lg buybutton "
                          onClick={() => window.open("https://global.transak.com/", "_blank")}
                          style={{ fontSize: "1.15rem" }}>
                          Buy ETH With Credit Card
                        </button>

                  </div>
                </div>

                <h6 style={PRICE_SX}>
                  {" "}
                  1ANA = $
                  {humanReadableAmount(phaseInfo?.tokenPriceInUsd, 6, 6)}
                </h6>

                <div className="col-md-12 mt-4 mb-1 text-center">
                  <a href="#how-to-buy" className="nhb">
                    Need help buying?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

const PRICE_SX = {
  fontFamily: "'DM Sans'",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "100%",
  color: "#FFFFFF",
  textAlign: "center",
  marginTop: "23px"
}

const DISCONNECT_BUTTON = { backgroundColor: "red" }


export default Home;
