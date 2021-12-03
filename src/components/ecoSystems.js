import React, { useState, useEffect } from 'react'
import globalImg from '../assets/img/globe-particle.png'
import line from "../assets/img/line.png"

const EcoSystems = () => {
    return (
        <div className="relative pb-[200px]" id="ecoSystems">
            <div className="w-full text-center lg:text-[100px] text-[50px] font-extrabold text-white opacity-20">CORE ECOSYSTEMS</div>
            <div className="absolute lg:top-[43px] top-0 w-full text-center text-[50px] font-medium text-white">ECOSYSTEMS</div>
            <div className="pt-[50px]">
                <div className="absolute top-[250px] w-full">
                    <img src={globalImg} className="w-full"/>
                </div>
                <div className="w-full px-[10%] grid lg:grid-cols-4 md:grid-cols-2 justify-between z-10">
                    <div className="px-[20px] flex global-item flex-col lg:pt-[200px]">
                        <div>
                            <h2 className="text-center  text-[20px] text-white">MARKETPLACE</h2>
                            <p className="text-center text-[#97afd5] text-[16px] mt-6">market place that you can trade you bored apes yacht clubs</p>
                        </div>
                        <div>
                            <img src={line} className="h-[120px]  m-auto mt-[50px]"/>
                        </div>
                        
                    </div>
                    <div className="px-[20px] flex global-item flex-col lg:pt-[100px]">
                        <div>
                            <h2 className="text-center text-[20px] text-white">ERC-721</h2>
                            <p className="text-center text-[#97afd5] text-[16px] mt-6">The apes are stored as ERC-721 tokens on the Ethereum Classic blockchain and hosted on IPFS. Purchasing an ape costs 2 ETC.</p>
                        </div>
                        <div>
                            <img src={line} className="h-[120px]  m-auto mt-[50px]"/>
                        </div>                        

                    </div>
                    <div className="px-[20px] flex global-item flex-col">
                        <div>
                            <h2 className="text-center  text-[20px] text-white">FAIR LAUNCH</h2>
                            <p className="text-center text-[#97afd5] text-[16px] mt-6">Fair Launch, fair distribution</p>
                        </div>
                        <div>
                            <img src={line} className="h-[120px] m-auto mt-[50px]"/>
                        </div>
                    </div>
                    <div className="px-[20px] flex global-item flex-col lg:pt-[200px]">
                        <div>
                            <h2 className="text-center  text-[20px] text-white">RARITY</h2>
                            <p className="text-center text-[#97afd5] text-[16px] mt-6">10,000 Provably-rare Bored Ape tokens.</p>
                        </div>
                        <div>
                            <img src={line} className="h-[120px] m-auto mt-[50px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcoSystems