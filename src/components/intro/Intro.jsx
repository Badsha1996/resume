import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
    const textRef                                       = useRef();
    useEffect(() => {
        init(textRef.current, 
            { showCursor                                : true,
              backDelay                                 : 1500,
              backSpeed                                 : 60,
              strings                                   : ['Web Developer', 'Designer', 'Computer Programmer', 'Competitive Coder' ] })
    },[])
    return (
        <div className                                  = 'intro' id="intro">
            <div className                              = "left">
                <div className                          = "imgContainer">
                    <img src                            = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2F9i4%2Fpxo%2F9i4pxo5AT.gif&f=1&nofb=1" alt="" />
                </div>
            </div>
            <div className                              = "right">
                <div className                          = "wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Badsha Laskar</h1>
                    <h3>Software Engineer & <span ref   = {textRef}></span></h3>
                </div>
                <a href                                 = "#resume">
                    <img src                            = "assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
