import React, { useState, useEffect } from 'react'
import Accordion from "./Accordion";

const Faqs = () => {
    const items = [
        {
          title: "What are NFTS?",
          description:
            "A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be associated with easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to give the NFT a public proof of ownership"
        },
        {
          title: "What is $ETC ??",
          description:
            "Ethereum Classic is the original Ethereum blockchain, an open source, blockchain-based distributed computing platform featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions executed on a public Ethereum Virtual Machine."
        },
        {
            title: "How much do Classic Pharaohs cost?",
            description:
              "1 Classic Pharaoh goes for 2 $ETC"
        },
        {
            title: "How do I get a Classic Pharaoh?",
            description:
                "To Mint you first need to connect your compatible wallet or access our site from your wallets address and click Mint and voila!!"
        }
      ];
    return (
        <div className="relative pb-[300px]" id="faqs">
            <div className="w-full text-center text-[100px] font-extrabold text-white opacity-20">FAQS</div>
            <div className="absolute top-[43px] w-full text-center text-[50px] font-medium text-white">FAQS</div>
            <Accordion items={items} />
        </div>
    )
}

export default Faqs