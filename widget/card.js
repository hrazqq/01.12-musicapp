'use client'

import { Title, Artist, Duration, Cover } from "../shared/ui/ui";
import cover  from '../public/cover.jpg';
import styles from './card.module.css';
import { useState } from "react";
import secondsToMMSS from "@/app/utils/secondsToMMSS";

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    const [color, setColor] = useState(false);
    const [color_2, setColor2] = useState(false);

    const formatedDuration = secondsToMMSS(duration);

    const handleChangeColor = () =>{
        if(color){
            setColor(false)
            console.log(color)
        } else{
            setColor(true)
            console.log(color)
        }
    }
    const handleChangeColor2 = () =>{
        if(color_2){
            setColor2(false)
            console.log(color_2)
        } else{
            setColor2(true)
            console.log(color_2)
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.naming}>
                <Cover src={preview}/>
                <div>
                    <Title children={title}/>
                    <Artist artist={artists}/>
                </div>
            </div>
            <div className={styles.reaction}>
                <div className={styles.sost}>
                <div onClick={()=> handleChangeColor()}>
                    <i class="bi bi-plus-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color ? "black" : "gray"} class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg></i>
</div>
                   <div onClick={()=> handleChangeColor2()}> <i className="bi bi-emoji-heart-eyes-fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color_2 ? "red" : "gray"} className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                    </svg>
                </i>
                </div>
                </div>
                <Duration duration={formatedDuration}/>
            </div>
        </div>
    )
}