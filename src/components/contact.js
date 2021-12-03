import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faDiscord, faTwitter, faMediumM } from "@fortawesome/free-brands-svg-icons"
import globalImg from "../assets/img/dot-c-azalea.png";

const Contact = () => {
    useEffect(() => {
        console.clear();
    })
    return (
        <div className="relative pb-[100px] px-[5%]" id="contact">
            <div className="grid lg:grid-cols-9 grid-cols-1 justify-between items-center w-full">
                <div className="lg:col-start-1 lg:col-span-4 relative w-full h-[500px]">
                    <div className="nk-circle-animation nk-df-center text-primary small"   style={{background: `url(${globalImg})`, backgroundPosition: "50% 50%", backgroundSize: "contain"}}></div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                        <div className="flex items-center mb-[15px]">
                            <p className="w-[40px] h-[40px] bg-yellow-600 bg-opacity-75 rounded-full text-white text-[20px] pt-[3px] pl-[10px] text-left mr-[10px]">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </p>
                            <span className="text-white text-[15px]">info@etcbayc.com</span>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <p className="w-[40px] h-[40px] bg-yellow-600 bg-opacity-75 rounded-full text-white text-[20px] pt-[3px] pl-[10px] text-left mr-[10px]">
                                <FontAwesomeIcon icon={faTelegramPlane}  />
                            </p>
                            <span className="text-white text-[15px]">Join us on Telegram</span>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <p className="w-[40px] h-[40px] bg-yellow-600 bg-opacity-75 rounded-full text-white text-[20px] pt-[3px] pl-[10px] text-left mr-[10px]">
                                <FontAwesomeIcon icon={faTwitter}  />
                            </p>
                            <span className="text-white text-[15px]">Join us on Twitter</span>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <p className="w-[40px] h-[40px] bg-yellow-600 bg-opacity-75 rounded-full text-white text-[20px] pt-[3px] pl-[8px] text-left mr-[10px]">
                                <FontAwesomeIcon icon={faDiscord}  />
                            </p>
                            <span className="text-white text-[15px]">Join us on Discord</span>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <p className="w-[40px] h-[40px] bg-yellow-600 bg-opacity-75 rounded-full text-white text-[20px] pt-[3px] pl-[12px] text-left mr-[10px]">
                                <FontAwesomeIcon icon={faMediumM}  />
                            </p>
                            <span className="text-white text-[15px]">Join us on Medium</span>
                        </div>
                    </div>
                    <div className="absolute bottom-[-10px] left-0 right-0 w-full justify-between">
                        <div className ="grid w-[40%] mx-auto grid-cols-4 justify-between">
                            <div className="text-white text-center"><FontAwesomeIcon icon={faTelegramPlane} /></div>
                            <div className="text-white text-center"><FontAwesomeIcon icon={faTwitter} /></div>
                            <div className="text-white text-center"><FontAwesomeIcon icon={faDiscord} /></div>
                            <div className="text-white text-center"><FontAwesomeIcon icon={faMediumM} /></div>
                        </div>                    
                    </div>
                </div>
                <div className="lg:col-end-10 lg:col-span-5 px-6">
                    <h1 className="text-white text-[30px]">CONTACT US</h1>
                    <p className="my-[10px] text-[#bbd4f3] text-[20px]">
                        The Founder: Our founder is Ali Essa, a young college student that is extremely passionate about Ethereum Classic, He is of Egyptian descent and currently resides in the United States he has always been interested in CryptoCurrency and NFTS and most importantly $ETC, he is currently working as an operations manager for multiple businesses and he is planning to pursue a degree in Software engineering due to his extreme interest in software 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact