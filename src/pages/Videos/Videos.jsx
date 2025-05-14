import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import ReactPlayer from 'react-player/lazy';

import './videos.css';
import { useState } from "react";

import youtube__icon from '../../assets/icons/social-icons/youtube_icon.svg';

function Videos() {

    const videos = [
        {
            name: "Vídeo presentación de Chords API`",
            url: "https://youtu.be/AeSVz7Ewje8?si=OHVWWpvnCPYj78PH",
            img: "https://img.youtube.com/vi/AeSVz7Ewje8/0.jpg"
        },
        {
            name: "Vídeo presentación de Musikos App",
            url: "https://youtu.be/hBbSiVGH7nQ?si=3nSaakFjdHqMSVHD",
            img: "https://img.youtube.com/vi/hBbSiVGH7nQ/0.jpg"
        },
        {
            name: "Vídeo presentación de Pokemon Game App",
            url: "https://youtu.be/MxDscYjcJKU?si=-zRrBLrMGHuRRI_F",
            img: "https://img.youtube.com/vi/MxDscYjcJKU/0.jpg"
        }
    ]

    const [selectedVideo, setSelectedVideo] = useState(videos[0].url);

    const handleSelectVideo = (url) => {
        setSelectedVideo(url)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="pageContainer videos">
            <AnimatedTitle
                headingLevel= 'h1'
                initialText='V'
                finalText='ídeos'
                id='page__animatedTitle'
            />
            <h2 className='page__subtitle videos__subtitle'>AQUÍ PODRÁS VER MIS VÍDEOS PRESENTANDO PROYECTOS</h2>
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
                                    onClick={()=>handleSelectVideo(video.url)}
                                    aria-label={`Marcar ${video.name} para ver arriba`}
                                >
                                    <img src={video.img} className="videos__otherVideoImg"/>
                                    <span className="videos__otherVideoDescription">SELECCIONAR PARA VER</span>
                                </button>
                                
                            )
                        })
                    }
                </div>
                
            </section>
            <section className="videos__youtubeChannel">
                <h4 className="youtubeChannel__text">TODOS LOS VÍDEOS EN MI CANAL DE YOUTUBE</h4>
                <a 
                    href="https://youtube.com/@aldaydev" 
                    target="_blank"
                    className="youtubeChannel__button"
                    aria-label="Visitar canal de Youtube"
                >
                    <span className="youtubeChannel__buttonText">IR A YOUTUBE</span>
                    <img 
                        src={youtube__icon}
                        className="youtubeChannel__icon"
                    /> 
                </a>
            </section>
        </div>
    )
}

export default Videos;