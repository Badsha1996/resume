# React Portfolio website
## Requirements:
* React 
* scss
* Roboto Font 
* material ui
* ityped
## Run:
Run `npx create-react-app <folder>` if already inside cur directory type `.` instead of folder.
To run the project just type `npm start` or `yarn start`. For using SASS just type `npm install node-sass`. Add Roboto font in the index file `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap" rel="stylesheet">`. For material ui type `npm install @material-ui/core` in terminal. Then type ` npm install ityped` for installing itype. 
# Documantation of work:
## Navigationbar:
In topbar first creating a wrapper. Dividing it into two part **left** and **right**. In this navbar there will be a logo which will return the intro page, a manu and some links ex- mail, linkdin, github, and my phone number. For item container importing the icons from @material-ui/icons. Remember to add display flex in tobar.scss for horizontal showing or the icons in the left container will be verticale by default.
```javascript
<div className                              = "wrapper">
                <div className              = "left">
                    {/* This link will send us to the id="intro" page */}
                    <a href                 = "#intro" className="logo">b.Portfolio</a>
                    {/* adding phone, linkdin, github, mail */}
                    <div className          = "itemcontainer">
                        <Person className   = "icon"/>
                        <span>+91 8170832391</span>
                    </div>
                    ................
                    <div className          = "itemcontainer">
                        <GitHub className   = "icon"/>
                        <a href             = "https://github.com/Badsha1996" className="link">GitHub</a>
                    </div>
                </div>
```
for creating an animation on the humburger menu use usestate from react then add transition using sass. in App.jsx adding usestate
```javascript
function App() {
  {/* Creating a state for menu open and not open using usestate*/}
  const [menuOpen,setMenuOpen]              = useState(false)
```
adding onclick method to the humburger in topbar.jsx
```javascript
                <div className              = "right">
                    <div className          = "humburger" onClick={()=>setMenuOpen(!menuOpen)}>
```
## Side Menu:
Adding Menu jsx and sass file to components folder. Creating a menu function. Adding list and anchor tag for each list. using usestate for active and unactive transitions. customizing it using css.
```js
export default function Menu({menuOpen,setmenuOpen}) {
    return (
        <div className                      = {"menu "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href                 = "#intro">Home</a>
                </li>
```
## Intro Page:
Deviding the intro page into left and right section using display: flex, giving each flex 0.5 so that each ssection will get same area. Left side will be the image and right side contain an arrow down button and some text. For array we can use css animation **@keyframe** and for text there is an extension called ityped. First import useEffect from react the create functional component useEffect.
```js
const textRef = useRef();
    useEffect(() => {
        init(textRef.current, 
            { showCursor: true,
              backDelay : 1500, 
              backSpeed:  60,
              strings: ['Web Developer', 'Designer', 'Computer Programmer' ] })
    },[])
```
## Portfolio Page:
Creating an image container and featured items. Adding cursor pointer. customizing each section and align them vertically.
After that we will need separate component foldder for **resumeList**. Where the list of things will be listed as jason format data. After that all the data components will be imported from `data.js` file using usestate.
## work Page:
Divided the page into  two parts left and right. Added icon and text to one part and picture to another. Added two arrows for slider. Animate the frame.

