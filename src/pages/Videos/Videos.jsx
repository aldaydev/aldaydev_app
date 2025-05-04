import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import ReactPlayer from 'react-player/lazy';

import './videos.css';
import { useState } from "react";

function Videos() {

    const videos = [
        {
            url: "https://youtu.be/hBbSiVGH7nQ?si=3nSaakFjdHqMSVHD",
            img: "https://img.youtube.com/vi/hBbSiVGH7nQ/0.jpg"
        },
        {
            url: "https://youtu.be/MxDscYjcJKU?si=-zRrBLrMGHuRRI_F",
            img: "https://img.youtube.com/vi/MxDscYjcJKU/0.jpg"
        },
        {
            url: "https://youtu.be/0244Zii9h5c?si=_c4lhMjbGPI6BQ4G",
            img: "https://img.youtube.com/vi/0244Zii9h5c/0.jpg"
        }
    ]

    const [selectedVideo, setSelectedVideo] = useState(videos[0].url)


    return (
        <div className="pageContainer videos">
            <AnimatedTitle
                initialText='V'
                finalText='ídeos'
                id='page__animatedTitle'
            />
            <h3 className='videos__subtitle'>AQUÍ PODRÁS VER MIS VÍDEOS PRESENTANDO PROYECTOS</h3>
            <section className="videos__videoList">
                <div className="videos__mainVideo">
                    <ReactPlayer
                        url={selectedVideo}
                        controls
                        // light={true}       // Carga el iframe solo al hacer clic
                        width="100%"       // Responsivo
                        height="100%"
                        
                    />
                </div>
                <div className="videos__otherVideos">
                    {
                        videos && videos.map((video, index) => {
                            return selectedVideo && video.url !== selectedVideo && (
                                <button
                                key={index}
                                    className="videos__otherVideoContainer"
                                    onClick={()=>setSelectedVideo(video.url)}
                                >
                                    <img src={video.img} className="videos__otherVideoImg"/>
                                </button>
                                
                            )
                        })
                    }
                </div>
                
            </section>
        </div>
    )
}

export default Videos;