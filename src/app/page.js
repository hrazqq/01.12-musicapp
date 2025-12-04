'use client'
import styles from "./page.module.css";
import { Header } from "../../widget/header";
import { Songlist } from "../../widget/songList";
import { Search } from "../../widget/search";
import { useState } from "react";
import tracksList from "./assets/tracksList";
import { Active } from "../../widget/activ";
import { Footer } from "../../widget/footer";


const RunQuery = (query) =>{
  if(!query){
    return tracksList;
  }

  const lowerCase = query.toLowerCase();

  return tracksList.filter((track)=>
    track.title.toLowerCase().includes(lowerCase) ||
    track.artists.toLowerCase().includes(lowerCase)
  )
}

export default function Home() {
  const [songs, setSongs] = useState(tracksList);

  const handleChange = (event) =>{
    const foundTracks = RunQuery(event.target.value);
    setSongs(foundTracks);
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Search func={handleChange}/>
        <Songlist songs={songs}/>
        <Active/>
        <Footer/>
      </main>
    </div>
  );
}
