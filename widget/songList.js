import styles from './songList.module.css'
import tracksList from '@/app/assets/tracksList' 
import { Card } from './card'

export const Songlist = ({songs}) =>{
    return(
        <div className={styles.tracklist}>
            {songs.map((track) =>{
                return(
                    <Card key = {track.id} {...track} />
                )
            })}
        </div>
    )
}