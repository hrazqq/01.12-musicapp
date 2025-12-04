import { Title, Artist, Duration, Cover } from "../shared/ui/ui";
import cover  from '../public/cover.jpg';
import { useState } from "react";
import secondsToMMSS from "@/app/utils/secondsToMMSS";
import styles from './active.module.css';



export const Active = () =>{

    const [color, setColor] = useState(false);
    const [color_2, setColor2] = useState(false);
    const [color_3, setColor3] = useState(false);

    const formatedDuration = secondsToMMSS(Duration);

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
    const handleChangeColor3 = () =>{
        if(color_3){
            setColor3(false)
            console.log(color_3)
        } else{
            setColor3(true)
            console.log(color_3)
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.naming}>
                <Cover src={cover}/>
                <div>
                    <Title children='Falling'/>
                    <Artist artist='Rival, CRVN'/>
                    

                    
                </div>
                <div className={styles.play}>
                        <i class="bi bi-skip-backward-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5"/>
</svg>
                        </i>
                        <div onClick={()=> handleChangeColor3()}>
                        <i class="bi bi-play-fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill={color_3 ? "grey" : "black"} class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
                    </i>
                    </div>
                    <i class="bi bi-skip-forward-fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" fill="currentColor" class="bi bi-skip-forward-fill" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5"/>
</svg>
                    </i>
                    </div>
                    <div className={styles.last}>
                        <div onClick={()=> handleChangeColor()}>
                        <i class="bi bi-heart-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill={color ? "red" : "black"} class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
                        </i>
                        </div>
                        <div onClick={()=> handleChangeColor2()}>

                        
                        <i class="bi bi-volume-up-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill={color_2 ? "grey" : "black"} class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
                        </i>
                        </div>
                        
                    </div>
            </div>
            </div>
    )
}
            