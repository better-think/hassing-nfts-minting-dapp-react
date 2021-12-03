import React, { useState, useEffect } from 'react'
import checkImg from "../assets/img/check.png"
import unCheckImg from "../assets/img/uncheck.png"

const RoadMapLine = props => {
    const {percents, processStates, contents} = props.roadmapPoints;
    const [pointsTop, setPointsTop] = useState([]);
    const [contentsTop, setContentsTop] = useState([]);
    const [finalPointTop, setFinalPointTop] = useState(0);
    const [isTabletWindow, setIsTabletWindow] = useState(false);

    useEffect(() => {
        let pTop = [];
        let cTop = [];
        let fTop = 0;
        percents.map((percent, index) => {
            let top1 = 8 * percent;
            let top2 = 0;
            if(index < percents.length - 1) {
                top2 = 8 * (percent + (percents[index+1] - percent) / 2);
            }
            else top2 = 8 * percent + 50;
            pTop.push(top1);
            cTop.push(top2);
        })
        fTop = (percents[percents.length - 1] + 25) * 8
        setPointsTop(pTop);
        setContentsTop(cTop);
        setFinalPointTop(fTop);
        checkWindowSize();
        window.onresize = () => checkWindowSize();
    }, [])

    const checkWindowSize = () => {
        if(window.innerWidth <= "768") {
            setIsTabletWindow(true)
        }
        else {
            setIsTabletWindow(false)
        }
    }

    return  <div className="m-auto relative" id="roadmap">
                <svg height="1000" width="10" className="absolute  2xl:left-[50%] xl:left-[50%]  lg:left-[50%] md:left-[50%] left-[5%] top-[0px]">
                    <line x1="4" y1="0" x2="4" y2="900" style={{stroke: "rgb(51, 255, 153)", strokeWidth: 2}} />
                </svg>
                {
                    percents.map((percent, index) => {
                        return <div>
                                    <img src={processStates[index] ? checkImg : unCheckImg} className="w-[20px] h-[20px] rounded-full absolute 2xl:left-[49.5%] xl:left-[49.5%]  lg:left-[49.5%] md:left-[49.5%] left-[4.2%]" style={{top: (8 * percent)+ "px"}}/>
                                    {
                                        isTabletWindow
                                        ?
                                        <>
                                        <p className="absolute text-[#92fdb8]" style={{top: pointsTop[index]+ "px", left: "8%"}}>#{index+1}</p>
                                        <p className="absolute w-[75%] text-[#92fdb8]" style={{top: contentsTop[index] + "px", left: "8%"}}>{contents[index]}</p>
                                        </>
                                        :
                                        <>
                                        <p className="absolute text-white" style={{top: pointsTop[index]+ "px", left: (index % 2) ? "46%" : "53%"}}>#{index+1}</p>
                                        {
                                            index % 2
                                            ?
                                            <p className="absolute w-[40%] text-[#92fdb8] text-right" style={{top: contentsTop[index] + "px", right: "53%"}}>{contents[index]}</p>
                                            :
                                            <p className="absolute w-[40%] text-[#92fdb8]" style={{top: contentsTop[index] + "px", left: "53%"}}>{contents[index]}</p>
                                        }
                                        </>                                        
                                    }                                    
                                </div>

                    })
                }
                
                {
                    (percents.length + 1) % 2
                    ?
                    <>
                    <svg height="10" width="200" className="absolute" style={{top: (finalPointTop + 5) + "px", left: isTabletWindow?"5%":"50%"}}>
                        <line x1="0" y1="4" x2="200" y2="4" style={{stroke: "#218813", strokeWidth: 2}} />
                    </svg>
                    <p className="absolute p-[30px] bg-[#3e9325]  text-white text-[18px] rounded-lg" style={{top: (finalPointTop - 40) + "px", left: isTabletWindow? "15%" : "60%", width: isTabletWindow? "60%" : "30%"}}>More details coming soon, Make sure to follow our discord.</p>
                    </>
                    :
                    <>
                    <svg height="10" width="200" className="absolute" style={{top: (finalPointTop + 5) + "px", right: isTabletWindow?"" : "50%", left: isTabletWindow? "5%" : "" }}>
                        <line x1="0" y1="4" x2="200" y2="4" style={{stroke: "#218813", strokeWidth: 2}} />
                    </svg>
                    <p className="absolute p-[30px] bg-[#3e9325]  text-white text-[18px] rounded-lg" style={{top: (finalPointTop - 40) + "px", right: isTabletWindow?"" : "60%", left: isTabletWindow? "15%" : "", width: isTabletWindow? "60%" : "30%"}}>More details coming soon, Make sure to follow our discord.</p>
                    </>
                }      
                <img src={unCheckImg} className="absolute w-[15px] h-[15px] rounded-full" style={{top: finalPointTop + "px", left: isTabletWindow? "4.5%": "49.8%"}}/>          
            </div>
}

const RoadMap = () => {
    const roadmapPoints = {
        percents: [15, 27, 42, 55, 62, 73],
        processStates: [true, true, true, false, false, false],
        contents: [
            "Build and design the website and program the smart contract",
            "Build the ETC Pharaohs community twitter account and receive feedback",
            "Launch minting to all of our 5,000 Pharaohs on 12/12",
            "Completely sold out of Classic Pharaohs",
            "Hold Giveaways for the people that could not get a pharaoh",
            "Donate 10% of the proceedings to a charity or a cause that the ETCarmy chooses"
        ]
    };

    return (
        <div className="relative pb-[300px] h-[1300px]">
            <div className="w-full text-center xl:text-[100px] text-[50px] font-extrabold text-white opacity-20">ROADMAP AOTIVATIONS</div>
            <div className="absolute xl:top-[43px] top-0 w-full text-center text-[50px] font-medium text-white">ROADMAP</div>
            <div className="w-full">
                <h2 className="text-white text-center w-[50%] mb-[50px] mx-auto">Our goal is to continue these activities long into the future and make it a primary purpose of our community, to be a force for good in our world</h2>
                <RoadMapLine roadmapPoints={roadmapPoints}/>                
            </div>
        </div>
    )
}

export default RoadMap