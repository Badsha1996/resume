import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume"
import Testimonials from "./components/tetimonials/Testimonials"
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen]    = useState(false)
  return (
    <div className                = "app">
      {/*topbar setting when clicking the hamburger*/}
      <Topbar menuOpen            = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen              = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className              = "sections">
          <Intro/>
          <Resume/>
          <Work/>
          <Testimonials/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
