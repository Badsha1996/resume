import './testimonials.scss'

export default function Testimonials() {
    return (
        <div className                = "testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className            = "container">
                <div className        = "card">
                    <div className    = "top">
                        <img src      = "assets/right-arrow.png" className="left" alt="" />
                        <img src      = "assets/me.png" className="user" alt="" />
                        <a href       = "https://twitter.com/badshalaskar0"><img src      = "assets/twitter.png" className="right" alt="" /></a>
                    </div>
                    <div className    = "center">
                    Techno India University student 2021 Batch with major in Computer Science and Engineering. Currently a fresher with good programming Fundamentals. 
                    </div>
                    <div className    = "bottom">
                        <h3>Badsha Laskar</h3>
                        <h4>Software Engineer and Web Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
