import { useState } from "react";
import "./work.scss"

export default function Work() {
    const[currentSlider,setCurrentSlider]                                 = useState(0)

    const data = [
        {
            id                                                            : 1,
            icon                                                          : "assets/mobile.png",
            title                                                         : "Development works",
            desc                                                          : 
            "worked in areas like machine learning and web Development. Well versed with Python, C++, Java and JavaScript. Experienced with frameworks like Django, React, OpenCV, Node etc.",
            img                                                           : "https://www.flexsin.com/blog/wp-content/uploads/2019/12/Custom-Software-Development.jpg",
        },
        {
            id                                                            : 2,
            icon                                                          : "assets/writing.png",
            title                                                         : "Certificates",
            desc                                                          : 
            "Certified in Data Science, Python Programming, JavaScript, SQL, Problem Solving and SAP",
            img                                                           : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4354757.jpg&f=1&nofb=1",
        },
        {
            id                                                            : 3,
            icon                                                          : "assets/globe.png",
            title                                                         : "Achievements",
            desc                                                          : 
            "5 star Coder and Gold badge on HackerRank, 3 star on CodeChef, GFG Score-300+  ",
            img                                                           : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hBUbMxO4UZrbVPvGzFHy8AHaE8%26pid%3DApi&f=1",
        },

    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlider(currentSlider>0 ? currentSlider-1 : 2) :
        setCurrentSlider(currentSlider<data.length-1 ? currentSlider + 1  : 0);
    };
    return (
        <div className                                                    = "work" id="work">
            <div className                                                = "slider" style={{transform: `translateX(-${currentSlider*100}vw)`}}>
                {data.map(d=>(
                    <div className                                        = "container">
                    <div className                                        = "item">
                        <div className                                    = "left">
                            <div className                                = "leftContainer">
                                <div className                            = "imgContainer">
                                    <img src                              = {d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span><a href                             = "#resume">Click here to see Portfolio</a></span>
                            </div>
                        </div>
                        <div className                                    = "right">
                            <img src                                      = {d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src                                                      = "assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src                                                      = "assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
    )
}
