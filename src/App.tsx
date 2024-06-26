import MusicShow from "./components/MusicShow";
function App() {
  const names = ["Enemy"];
  const singers = ["Imagine Dragons & JID"];
  const albums = ["Arcane League of Legends"];
  const years = ["2021"];
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
      path: "assets/musics/" + names[i]+ ".mp3",
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
        />
      ))}
    </div>
  );
}

export default App;
