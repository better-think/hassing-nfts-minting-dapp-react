import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane, faDiscord, faTwitter, faMediumM } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="relative 2xl:px-[150px] xl:px-[150px] lg:px-[150px] px-[30px] py-[50px] flex justify-between">
            <div className="text-[#bbd4f3] text-[16px]">Copyright © 2021. Powered by EthereumClassic</div>
            <div className="w-[30%]">
                <div className ="grid grid-cols-4 justify-between">
                    <div className="text-white"><FontAwesomeIcon icon={faTelegramPlane} /></div>
                    <div className="text-white"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="text-white"><FontAwesomeIcon icon={faDiscord} /></div>
                    <div className="text-white"><FontAwesomeIcon icon={faMediumM} /></div>
                </div>    
            </div>
        </div>
    )
}

export default Footer