import './githubButton.css';

import github_icon from "../../assets/icons/util-icons/github_simpleicon.svg";

export default function GithubButton({githubData, index}) {
    return (
        <a
            key={index}
            href={githubData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="githubButton__link"
            aria-label={`Ir a repositorio del ${githubData.type} de ${githubData.name}`}
        >
            <img src={github_icon} className="githubButton__linkIcon" />
            <span className="mainProject__linkText">
                {githubData.type.toUpperCase()}
            </span>
        </a>
    );
}
