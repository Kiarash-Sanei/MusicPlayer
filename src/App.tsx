import { useState } from "react";
import MusicShow from "./components/MusicShow";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const names = ["Enemy", "Dream", "Warriors","Believer"];
  const singers = [
    "Imagine Dragons & JID",
    "Imagine Dragons",
    "Imagine Dragons",
    "Imagine Dragons"
  ];
  const albums = [
    "Arcane League of Legends",
    "Smoke + Mirrors",
    "Smoke + Mirrors",
    "Evolve"
  ];
  const years = ["2021", "2015", "2015", "2017"];
  const musics = [];
  for (let i = 0; i < names.length; i++) {
    const query = names[i] + " " + singers[i];
    musics.push({
      func1: () =>
        window.open("https://www.youtube.com/results?search_query=" + query),
      func2: () => window.open("https://open.spotify.com/search/" + query),
      image: "assets/covers/" + names[i] + ".jpg",
      name: names[i],
      singer: singers[i],
      album: albums[i],
      year: years[i],
      path: "assets/musics/" + names[i] + ".mp3",
    });
  }
  return (
    <div>
      {musics.map((music) => (
        <MusicShow
          onClickYT={music.func1}
          onClickSP={music.func2}
          image={music.image}
          name={music.name}
          singer={music.singer}
          album={music.album}
          year={music.year}
          path={music.path}
          united = {setIsPlaying}
          isPlaying = {isPlaying}
        />
      ))}
    </div>
  );
}

export default App;
