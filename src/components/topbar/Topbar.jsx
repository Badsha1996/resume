import "./topbar.scss"
import {Person,Mail,LinkedIn,GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className                      = {"topbar " + (menuOpen && "active")}>
            <div className                  = "wrapper">
                <div className              = "left">
                    {/* This link will send us to the id="intro" page */}
                    <a href                 = "#intro" className="logo">BL.portfolio</a>
                    {/* adding phone, linkdin, github, mail */}
                    <div className          = "itemcontainer">
                        <Person className   = "icon"/>
                        <span>+91 8170832391</span>
                    </div>
                    <div className          = "itemcontainer">
                        <Mail className     = "icon"/>
                        <span>badshalaskar0@gmail.com</span>
                    </div>
                    <div className          = "itemcontainer">
                        <LinkedIn className = "icon"/>
                        <a href             = "https://www.linkedin.com/in/badsha-laskar/" className="link">LinkedIn</a>
                    </div>
                    <div className          = "itemcontainer">
                        <GitHub className   = "icon"/>
                        <a href             = "https://github.com/Badsha1996" className="link">GitHub</a>
                    </div>
                </div>
                <div className              = "right">
                    <div className          = "humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className     = "line1"></span>
                        <span className     = "line2"></span>
                        <span className     = "line3"></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
