import React, { useState, useEffect } from 'react'
import Slider from './slider'

const Apes = () => {
    return (
        <div className="relative pb-[300px]" id="apex">
            <div className="w-full text-center lg:text-[100px] text-[50px] font-extrabold text-white opacity-20">BORED APES COLLECTION</div>
            <div className="absolute lg:top-[43px] top-0 w-full text-center text-[50px] font-medium text-white">Etc Apes</div>
            <div>
                <Slider/>
            </div>
        </div>
    )
}

export default Apes