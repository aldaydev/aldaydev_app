import './githubButton.css';

import deployed_icon from "../../assets/icons/util-icons/web_simpleicon.svg";

export default function DeployedButton({deployedData}) {
    return (
        <a
            href={deployedData}
            target="_blank"
            rel="noopener noreferrer"
            className="githubButton__link"
            aria-label={`Ir a ${deployedData}`}
        >
            <img src={deployed_icon} className="githubButton__linkIcon" />
            <span className="mainProject__linkText">
                DESPLEGADO
            </span>
        </a>
    );
}
