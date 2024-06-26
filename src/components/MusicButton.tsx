import { useRef, useState } from "react";
import Button from "./Button";

interface Props {
  music: string;
  united: (status: boolean) => void;
  isSomeOnePlaying: boolean;
}
const MusicButton = ({ music, united, isSomeOnePlaying }: Props) => {
  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const togglePlay = () => {
    if (!isSomeOnePlaying && audio.current.paused) {
      audio.current.play();
      setIsPlaying(true);
      united(true);
    } else if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
      united(false);
    }
  };
  const updateTime = () => {
    setCurrentTime(audio.current.currentTime);
    setDuration(audio.current.duration);
  };
  const updateSeek = (value) => {
    const seekTime = parseFloat(value.target.value);
    audio.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  return (
    <div>
      <div>
        <audio ref={audio} src={music} onTimeUpdate={updateTime} />
        <Button
          color="white"
          onClick={togglePlay}
          text={isPlaying ? "Pause" : "Play"}
          textColor="black"
        />
      </div>
      <div>
        <input
          type="range"
          className="form-range"
          value={currentTime}
          max={duration}
          onChange={updateSeek}
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
};
export default MusicButton;
