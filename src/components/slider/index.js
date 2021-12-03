import React, { useEffect, useState } from "react";
import range from "lodash/range";
import ItemsCarousel from "react-items-carousel";
import data from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faMediumM } from "@fortawesome/free-brands-svg-icons"

const courselItemNumber = data.carouselImgs.length;
const chevronWidth = 40;


const carouselItems = range(courselItemNumber).map(index => (
    <div 
        key={index} 
        className="w-[250px] mx-auto" 
        style={{ marginTop: (index % 2)? "50px" : "" }}
    >
        <img src={data.carouselImgs[index]} className="w-full rounded-md"/>
        <p className="pt-[20px] text-white text-center text-[20px]">{data.imgNames[index]}</p>
        <p className="pt-[20px] text-center text-white text-[13px]">ETCBayc</p>
        <div className="pt-[20px] grid grid-cols-4 justify-between px-[50px] mx-auto">
            <div className="text-white"><FontAwesomeIcon icon={faTelegramPlane} /></div>
            <div className="text-white"><FontAwesomeIcon icon={faTwitter} /></div>
            <div className="text-white"><FontAwesomeIcon icon={faDiscord} /></div>
            <div className="text-white"><FontAwesomeIcon icon={faMediumM} /></div>
        </div>

    </div>
));

const LeftButton = () => {
    return (
        <button className="absolute top-[130%] left-[33vw] w-[50px] h-[50px]  border-[2px] border-solid border-white rounded-full font-bold text-white text-[25px]">
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
        </button>
    )
}

const RightButton = () => {
    return (
        <button className="absolute top-[130%] right-[33vw] w-[50px] h-[50px]  border-[2px] border-solid border-white rounded-full  font-bold text-white text-[25px]">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </button>
    )
}

const Slider = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [displayedCardCount, setDisplayedCardCount] = useState(0);
    useEffect(() => {
        checkWindowWidth();          
    }, [])
    window.onresize = () => {
        checkWindowWidth();
    } 

    const checkWindowWidth = () => {
        if(window.innerWidth > 1150) {
            setDisplayedCardCount(4);
        }
        else if(window.innerWidth < 1150 && window.innerWidth > 900) {
            setDisplayedCardCount(3);
        }
        else if(window.innerWidth < 900 && window.innerWidth > 600) {
            setDisplayedCardCount(2);
        }
        else {
            setDisplayedCardCount(1);
        }
    }

    const onChange = value => setActiveItemIndex(value);

    return (
      <div className="2xl:px-[120px] xl:px-[80px] pl-[30px] pt-[100px] mx-auto">
        <ItemsCarousel
          gutter={40}
          numberOfCards={displayedCardCount}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={onChange}
          rightChevron={<RightButton/>}
          leftChevron={<LeftButton/>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </div>
    );
}

export default Slider