import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import logoImg from "../assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const [toogleFlag, setToogleflag] = useState(false);
    const [isDarkHeader, setIsDarkHeader] = useState(false);
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();    
    }, []);
  
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset > 100) {
                setIsDarkHeader(true)
            }
            else {
                setIsDarkHeader(false)
            }
        }
    }, [])


    return (
        <div className={`transition duration-[1500] w-full h-[120px] py-[20px] fixed top-0 z-50 ${isDarkHeader? "dark-header": "white-header"}`}>
            <div className="grid grid-cols-12  justify-between xl:px-24 px-16 w-full h-full ">
                <div className="col-start-1 col-span-2 flex items-center w-[150px] mx-auto h-full">
                    <img src={logoImg} className="w-full"/>
                </div>
                <div className="col-end-13 col-span-8 justify-between items-center lg:inline-block hidden">
                    <div className="grid grid-cols-8 h-full justify-between items-center">
                        <div className="col-start-1 col-span-5 h-full flex justify-between items-center">
                            <div className="text-white text-[16px] font-normal leading-relaxed hover:cursor-pointer hover:text-green-400"><a href="#home">Home</a></div>
                            <div className="text-white text-[16px] font-normal leading-relaxed hover:cursor-pointer hover:text-green-400"><a href="#apex">All Bored Apes</a></div>
                            <div className="text-white text-[16px] font-normal leading-relaxed hover:cursor-pointer hover:text-green-400"><a href="#roadmap">Roadmap</a></div>
                            <div className="text-white text-[16px] font-normal leading-relaxed hover:cursor-pointer hover:text-green-400"><a href="#faqs">FAQs?</a></div>
                            <div className="text-white text-[16px] font-normal leading-relaxed hover:cursor-pointer hover:text-green-400"><a href="#contact">Contact</a></div>
                        </div>
                        <div className="col-end-9 col-span-3 flex justify-end items-center">
                            <div className="pr-[20px]">
                                <button className="rounded-full w-[70px] h-[40px] text-[white] text-[13px] bg-[#14c56d] hover:bg-yellow-600">Mint</button>
                            </div>
                            <div>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(connect());
                                        getData();
                                    }}
                                    className="rounded-full w-[130px] h-[40px] text-[white] text-[13px] border-[4px] border-[#14c56d] border-solid hover:bg-[#14c56d]"
                                >
                                Connect Wallet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden col-end-13 col-span-1 float-right toggle-line h-full text-white items-center" onClick={() => setToogleflag(!toogleFlag)}>
                    {
                        toogleFlag
                        ?
                        <span className="text-[40px]"><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></span>
                        :
                        <span className="text-[40px]"><FontAwesomeIcon icon={faAlignLeft}></FontAwesomeIcon></span>
                    }                    
                </div>
                <div className={toogleFlag?"left-bar visible": "left-bar"}>
                    <div className="block w-full border-b-2 border-solid border-color-[#92a6ac] text-white text-[20px] py-[15px]"><a href="#home">Home</a></div>
                    <div className="block w-full border-b-2 border-solid border-color-[#92a6ac] text-white text-[20px] py-[15px]"><a href="#apex">All Bored Apes</a></div>
                    <div className="block w-full border-b-2 border-solid border-color-[#92a6ac] text-white text-[20px] py-[15px]"><a href="#roadmap">Roadmap</a></div>
                    <div className="block w-full border-b-2 border-solid border-color-[#92a6ac] text-white text-[20px] py-[15px]"><a href="#faqs">FAQs?</a></div>
                    <div className="block w-full border-b-2 border-solid border-color-[#92a6ac] text-white text-[20px] py-[15px]"><a href="#contact">Contact</a></div>
                    <div className="flex justify-between items-end mt-[50px]">
                        <div className="pr-[20px]">
                            <button className="rounded-full w-[70px] h-[40px] text-[white] text-[13px] bg-[#14c56d] hover:bg-yellow-600">Mint</button>
                        </div>
                        <div>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    getData();
                                }}
                                className="rounded-full w-[130px] h-[40px] text-[white] text-[13px] border-[4px] border-[#14c56d] border-solid hover:bg-[#14c56d]"
                            >
                            Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}
 
export default Header