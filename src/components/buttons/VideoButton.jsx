import './githubButton.css';

import deployed_icon from "../../assets/icons/util-icons/youtube_simpleicon.svg";

export default function VideoButton({videoData}) {
    return (
        <a
            href={videoData}
            target="_blank"
            rel="noopener noreferrer"
            className="githubButton__link"
            aria-label={`Ir a ${videoData}`}
        >
            <img src={deployed_icon} className="githubButton__linkIcon" />
            <span className="mainProject__linkText">
                VIDEO
            </span>
        </a>
    );
}
