import React, { useState, useEffect } from 'react'
import aboutImg from "../assets/img/about.jpg"


const About = () => {
    return (
        <div className="relative pb-[250px]" id="about">
            <div className="w-full text-center lg:text-[100px] text-[50px] font-extrabold text-white opacity-20">WHAT AND WHY</div>
            <div className="absolute lg:top-[43px] top-0 w-full text-center text-[50px] font-medium text-white">ABOUT</div>
            <div className="grid lg:grid-cols-12 grid-cols-1 justify-between items-center 2xl:px-[100px] xl:px-[100px] lg:px-[100px] md:px-[150px] sm:px-[80px] px-[50px] pt-[50px]">
                <div className="col-start-1 col-span-4">
                    <div className="text-white text-[30px]">
                        What are Classic Pharaohs??
                        The Classic Pharaohs are a collection of 5,000 Pharaohs that are each unique and different from each other, it is the first unique project on the Ethereum Classic Blockchain that is not found anywhere else!!
                    </div>
                    <div className="text-white text-[20px] opacity-70 pt-[30px]">                         
                        ETCBayc, is an exclusive 10,000 only mint-able premium NFT. No two pieces of these 10,000 digital beauties are alike. Each being unique and pristine, there is an order of rarity that makes certain ones more valuable than the others. each Bored Ape is inspired by its Ethereum counterpart.<br/><br/>
                        ETCBAYC is the first ape on etc blockchain, everyone can get an Ape. Well, as long as you are within the first 10,000. All Apes will cost the same amount.<br/><br/>
                        ETCBAYC is among the first high-quality art projects on etc still nascent NFT landscape. With their Ethereum counterparts already trading in the secondary market for over 100 ETH a piece
                    </div>
                </div>
                <div className="xl:col-end-12 xl:col-span-5 lg:col-end-13 lg:col-span-6 xl:pr-[100px] mx-auto lg:mt-0 mt-[50px]">
                    <img src={aboutImg} className="border-[30px] border-solid border-black"/>
                </div>
            </div>
        </div>
    )
}

export default About