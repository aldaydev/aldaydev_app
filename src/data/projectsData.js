import gamer_capture_desktop from '../assets/images/projects/gamer_capture_400px.webp';
import gamer_capture_fullScreen from '../assets/images/projects/gamer_capture_1200px.webp';
import gamer_logo from '../assets/images/projects/gamer_logo.webp';
import devagency_capture_desktop from '../assets/images/projects/devagency_capture_400px.webp';
import devagency_capture_fullScreen from '../assets/images/projects/devagency_capture_1200px.webp';
import devagency_logo from '../assets/images/projects/devagency_logo.webp';
import cvaudiovisual_capture_desktop from '../assets/images/projects/cvaudiovisual_capture_400px.webp';
import cvaudiovisual_capture_fullScreen from '../assets/images/projects/cvaudiovisual_capture_1200px.webp';
import cvaudiovisual_logo from '../assets/images/projects/cvaudiovisual_logo.webp';
import aldayes_capture_desktop from '../assets/images/projects/aldayes_capture_400px.webp';
import aldayes_capture_fullScreen from '../assets/images/projects/aldayes_capture_1200px.webp';
import aldayes_logo from '../assets/images/projects/aldayes_logo.webp';
import pokegame_capture_desktop from '../assets/images/projects/pokegame_capture_400px.webp';
import pokegame_capture_fullScreen from '../assets/images/projects/pokegame_capture_1200px.webp';
import pokegame_logo from '../assets/images/projects/pokegame_logo.webp';
import musikos_capture_desktop from '../assets/images/projects/musikos_capture_400px.webp';
import musikos_capture_fullScreen from '../assets/images/projects/musikos_capture_1200px.webp';
import musikos_logo from '../assets/images/projects/musikos_logo.webp';
import chordsapi_capture_desktop from '../assets/images/projects/chordsapi_capture_400px.webp';
import chordsapi_capture_fullScreen from '../assets/images/projects/chordsapi_capture_1200px.webp';
import chordsapi_logo from '../assets/images/projects/chordsapi_logo.webp';
import aldaydev_capture_desktop from '../assets/images/projects/aldaydev_capture_400px.webp';
import aldaydev_capture_fullScreen from '../assets/images/projects/aldaydev_capture_1200px.webp';
import aldaydev_logo from '../assets/images/projects/aldaydev_logo-shadow.webp';
import mlink_capture_fullScreen from '../assets/images/projects/mlink_capture_1200px.webp';
import mlink_capture_desktop from '../assets/images/projects/mlink_capture_400px.webp';
import mlink_logo from '../assets/images/projects/mlink_logo.webp';

const projectsData = [
    {
        id: "mlink",
        name: "Mlink App",
        description: "Mlink es una app full stack tipo 'link tree' pensada para músicos. En ella puedes crear tu perfil, tener tu 'username' único y un enlace para compartir de una sola vez todas tus redes sociales como artista musical.",
        date: "2025-06",
        rate: 5,
        language: 'typescript',
        documentation: false,
        testing: true,
        technologies: ["typescript", "react", "node", "express", "jwt", "vite", "reactrouter", "reactquery", "tailwind", "html", "css", ],
        img: {
            fullScreen: mlink_capture_fullScreen,
            desktop: mlink_capture_desktop,
            mobile: mlink_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/mlink_client"
            },
            { 
                type: "backend",
                url: "https://github.com/aldaydev/mlink_server"
            }
        ],
        deployed: "https://mlink.alday.dev",
        video: null
    },
    {
        id: "aldaydev",
        name: "AldayDev Portfolio",
        description: "Este portfolio en el que estás ahora mismo. Aquí pretendo mostrarte de manera visual todos mis conocimientos y habilidades sobre desarrollow web. Podrás ver mis proyectos filtrándolos por tecnología, ver mi currículum y saber un poco más acerca de mí.",
        date: "2025-05",
        rate: 4,
        language: 'javascript',
        documentation: false,
        testing: false,
        technologies: ["react", "node", "reactrouter", "vite", "html", "css", "javascript"],
        img: {
            fullScreen: aldaydev_capture_fullScreen,
            desktop: aldaydev_capture_desktop,
            mobile: aldaydev_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/aldaydev_app"
            }
        ],
        deployed: null,
        video: null
    },
    {
        id: "chords",
        name: "Chords API",
        description: "API Rest pública y gratuita. Pensada para desarrolladores que están empezando a hacer sus primeras peticiones (fetch, axios) y que, además, les gusta la música. Totalmente desplegada, vistas servidas desde el backend, documentación en inglés con Swagger y JSDoc.",
        date: "2025-04",
        rate: 5,
        language: 'javascript',
        documentation: true,
        testing: true,
        technologies: ["node", "express", "mongodb", "mongoose", "ejs", "swagger", "jsdoc", "nodemon", "winston", "dotenv", "cors", "render"],
        img: {
            fullScreen: chordsapi_capture_fullScreen,
            desktop: chordsapi_capture_desktop,
            mobile: chordsapi_logo
        },
        github: [
            { 
                type: "backend",
                url: "https://github.com/aldaydev/chords_api"
            }
        ],
        deployed: "https://chords.alday.dev",
        video: "https://youtu.be/AeSVz7Ewje8"
    },
    {
        id: "musikos",
        name: "Musikos App",
        description: "Versión beta de 'Musikos', una aplicación full stack creada para conectar músicos entre sí. En ella puedes buscarlos, filtrar por estilo, instrumento, ubicación, edad y nombre. También puedes crear tu cuenta para que otros músicos afines te encuentren.",
        date: "2025-03",
        rate: 4,
        language: 'javascript',
        documentation: true,
        testing: true,
        technologies: ["react", "node", "express", "mongodb", "mysql", "reactrouter", "nodemon", "bcrypt", "cors", "cookieparser", "dotenv", "jsdoc", "jwt", "mongoose", "nodemailer", "sequelize", "mongoose", "swagger", "winston", "jest", "selenium", "cypress", "vite", "dotenv", "html", "css", "javascript"],
        img: {
            fullScreen: musikos_capture_fullScreen,
            desktop: musikos_capture_desktop,
            mobile: musikos_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/musikos_client"
            },
            { 
                type: "backend",
                url: "https://github.com/aldaydev/musikos_server"
            }
        ],
        deployed: null,
        video: "https://youtu.be/hBbSiVGH7nQ?si=mO9WE-1Yw_EDZi0t"
    },
    {
        id: "pokemon-game",
        name: "Pokemon Game App",
        description: "Aplicación creada con React que consiste en un juego de pokemon donde puedes registrarte y ganar pokeballs al cazar pokemons y cumplir hitos. Creada con React, utilizando FireBase Auth para gestionar la autenticación y FireStore para la base de datos.",
        date: "2025-01",
        rate: 2,
        language: 'javascript',
        documentation: false,
        testing: true,
        technologies: ["react", "reactrouter", "node", "firebase", "selenium", "html", "css", "javascript"],
        img: {
            fullScreen: pokegame_capture_fullScreen,
            desktop: pokegame_capture_desktop,
            mobile: pokegame_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/pokegame"
            }
        ],
        deployed: "https://pokegame.alday.dev",
        video: "https://youtu.be/MxDscYjcJKU?si=ApWAEuw926NKNoYU"
    },
    {
        id: "alday-es",
        name: "Mi web Musical",
        description: "Mi website como artista musical. Realizado con HTML, CSS y JavaScript y creado en el contexto de mis estudios oficiales de 'Desarrollo de aplicaciones Web'.",
        date: "2024-11",
        rate: 1,
        language: 'javascript',
        documentation: false,
        testing: false,
        technologies: ["html", "css", "javascript", "vanilla"],
        img: {
            fullScreen: aldayes_capture_fullScreen,
            desktop: aldayes_capture_desktop,
            mobile: aldayes_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/alday_es"
            }
        ],
        deployed: "https://alday.es",
        video: null
    },
    {
        id: "cv-audiovisual",
        name: "CV Audiovisual",
        description: "Website con mi currículum audiovisual. Realizado con HTML, CSS y JavaScript y creado en el contexto del 'Master en CSS Avanzado'.",
        date: "2024-10",
        rate: 1,
        language: 'javascript',
        documentation: false,
        testing: false,
        technologies: ["html", "css", "javascript", "vanilla"],
        img: {
            fullScreen: cvaudiovisual_capture_fullScreen,
            desktop: cvaudiovisual_capture_desktop,
            mobile: cvaudiovisual_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/CV_AUDIOVISUAL"
            }
        ],
        deployed: "https://cvaudiovisual.alday.dev",
        video: null
    },
    {
        id: "dev-agency",
        name: "Dev Agency Layout",
        description: "Proyecto de maquetación de la web de una agencia de desarollo web. Realizado con HTML, CSS y JavaScript y creado en el contexto del 'Master en CSS Avanzado'.",
        date: "2024-09",
        rate: 1,
        language: 'javascript',
        documentation: false,
        testing: false,
        technologies: ["html", "css", "javascript", "vanilla"],
        img: {
            fullScreen: devagency_capture_fullScreen,
            desktop: devagency_capture_desktop,
            mobile: devagency_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/dev-agency"
            }
        ],
        deployed: "https://devagency.alday.dev",
        video: null
    },
    {
        id: "gamer",
        name: "Gamer News Layout",
        description: "Proyecto de maquetación de un portal web de noticias de videojuegos. Realizado con HTML, CSS y JavaScript y creado en el contexto del 'Master en CSS Avanzado'.",
        date: "2024-08",
        rate: 1,
        language: 'javascript',
        documentation: false,
        testing: false,
        technologies: ["html", "css", "javascript", "vanilla"],
        img: {
            fullScreen: gamer_capture_fullScreen,
            desktop: gamer_capture_desktop,
            mobile: gamer_logo
        },
        github: [
            { 
                type: "frontend",
                url: "https://github.com/aldaydev/gamer"
            }
        ],
        deployed: "https://gamer.alday.dev",
        video: null
    },

]

export default projectsData;