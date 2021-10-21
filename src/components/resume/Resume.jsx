import './resume.scss'
import ResumeList from "../resumeList/ResumeList"
import { useEffect, useState } from 'react';
import { featuredResume,webResume,
    mlResume,certificateResume,rankResume } from '../../data';

export default function Resume() {
    const [selected,setSelected]        = useState("featured")
    const [data,setData]                = useState([])
    const list = [
        {
            id                          : "featured",
            title                       : "Featured",
        },
        {
            id                          : "web",
            title                       : "Web Apps",
        },
        {
            id                          : "ml",
            title                       : "ML Software",
        },
        {
            id                          : "certificate",
            title                       : "Certificates",
        },
        {
            id                          : "ranks",
            title                       : "Achievements",
        },
    ];
    useEffect(()=>{
        switch(selected){
            case "featured"             : 
                setData(featuredResume);
                break;
            case "web"                  : 
                setData(webResume);
                break;
            case "ml"                   : 
                setData(mlResume);
                break;
            case "certificate"          : 
                setData(certificateResume);
                break;
            case "ranks"                : 
                setData(rankResume);
                break;
                default                 : 
                    setData(featuredResume);
        }
    },[selected])
    return (
        <div className                  = "resume" id="resume">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <ResumeList title   = {item.title}
                    active              = {selected===item.id}
                    setSelected         = {setSelected}
                    id                  = {item.id}/>
                ))}
            </ul>
            <div className              = "container">
                {data.map((d)=>(
                    <div className      = "item">
                        <img src        = {d.img} alt="" />
                        <h3><a href     = {d.url}>{d.title}</a></h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
