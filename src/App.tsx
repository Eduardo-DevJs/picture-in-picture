import { useRef } from "react";
import Video from "./assets/video.mp4";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  async function modePicture() {
    if (!videoRef.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <video
        controls
        ref={videoRef}
        style={{ borderRadius: "20px" }}
        src={Video}
      ></video>
      <button onClick={modePicture}>PIP</button>
    </div>
  );
}
