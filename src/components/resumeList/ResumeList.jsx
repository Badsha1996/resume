import "./resumeList.scss"

export default function resumeList({id,title,active,setSelected}) {
    return (
        <li className   = {active ? "resumeList active":"resumeList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
