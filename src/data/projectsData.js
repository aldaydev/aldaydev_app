import gamer_capture_desktop from '../assets/images/projects/gamer_capture_400px.png';
import gamer_logo from '../assets/images/projects/gamer_logo.png';
import devagency_capture_desktop from '../assets/images/projects/devagency_capture_400px.png';
import devagency_logo from '../assets/images/projects/devagency_logo.png';
import cvaudiovisual_capture_desktop from '../assets/images/projects/cvaudiovisual_capture_400px.png';
import cvaudiovisual_logo from '../assets/images/projects/cvaudiovisual_logo.png';
import aldayes_capture_desktop from '../assets/images/projects/aldayes_capture_400px.png';
import aldayes_logo from '../assets/images/projects/aldayes_logo.png';
import pokegame_capture_desktop from '../assets/images/projects/pokegame_capture_400px.png';
import pokegamer_logo from '../assets/images/projects/pokegame_logo.png';
import musikos_capture_desktop from '../assets/images/projects/musikos_capture_400px.png';
import musikos_logo from '../assets/images/projects/musikos_logo.png';
import chordsapi_capture_desktop from '../assets/images/projects/chordsapi_capture_400px.png';
import chordsapi_logo from '../assets/images/projects/chordsapi_logo.png';
import technologiesData from './technologiesData';

const projectsData = [
    {
        id: 1,
        name: "Gamer News Layout",
        description: "Proyecto de maquetación de un portal web de noticias de videojuegos realizado con HTML, CSS y JavaScript.",
        date: "2024-08",
        rate: 5,
        isVanilla: true,
        technologies: ["html", "css", "javascript"],
        img: {
            "desktop": gamer_capture_desktop,
            "mobile": gamer_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/gamer"
            }
        ],
        deployed: "https://gamer.alday.dev/",
        video: null
    },
    {
        id: 2,
        name: "Dev Agency Layout",
        description: "Proyecto de maquetación de una agencia de desarrollo web realizado con HTML, CSS y JavaScript.",
        date: "2024-08",
        rate: 5,
        img: {
            "desktop": devagency_capture_desktop,
            "mobile": devagency_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/dev-agency"
            }
        ],
        deployed: "https://devagency.alday.dev/"
    }
]

export default projectsData;