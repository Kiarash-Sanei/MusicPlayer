import Button from "./Button";
import MusicButton from "./MusicButton";

interface Props {
  onClickYT: () => void;
  onClickSP: () => void;
  image: string;
  name: string;
  singer: string;
  album: string;
  year: string;
  path:string;
}
const MusicShow = ({
  onClickYT,
  onClickSP,
  image,
  name,
  singer,
  album,
  year,
  path
}: Props) => {
  return (
    <div
      className="card text-center text-bg-dark border-light"
      style={{ width: "400px", margin: "10px" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt="Song Cover"
        style={{ width: "397px", height: "397px" }}
      />
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <h3 className="card-text">{singer}</h3>
        <h4 className="card-text">{album}</h4>
        <p className="card-text">{year}</p>
        <Button color="red" onClick={onClickYT} text="YouTube" />
        <Button
          color="green"
          onClick={onClickSP}
          text="Spotify"
          textColor="black"
        />
        <MusicButton music={path} />
      </div>
    </div>
  );
};
export default MusicShow;
