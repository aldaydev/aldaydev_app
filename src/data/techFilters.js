
// Techo filter icon imports
import react_icon from '../assets/icons/filter-icons/react_icon.webp';
import node_icon from '../assets/icons/filter-icons/node_icon.webp';
import express_icon from '../assets/icons/filter-icons/express_icon.webp';
import mongo_icon from '../assets/icons/filter-icons/mongo_icon.webp';
import mysql_icon from '../assets/icons/filter-icons/mysql_icon.webp';
import firebase_icon from '../assets/icons/filter-icons/firebase_icon.webp';
import vanilla_icon from '../assets/icons/filter-icons/vanilla_icon.webp';

//Laguage filter icon iports

import javascript_icon from '../assets/icons/filter-icons/javascript.svg';
import typescript_icon from '../assets/icons/filter-icons/typescript.svg';

//Other filter icon imports

import doc_icon from '../assets/icons/filter-icons/documentation_icon.svg';
import testing_icon from '../assets/icons/filter-icons/testing_icon.svg';

const languageFilters = [
    {
        id: "javascript",
        name: "JavaScript",
        alt: "Icono de JavaScript",
        icon: javascript_icon,
        brandColor: "#F7DF1E"
    },
    {
        id: "typescript",
        name: "TypeScript",
        alt: "Icono de TypeScript",
        icon: typescript_icon,
        brandColor: "#3178C6"
    },

]

const techFilters = [
    {
        id: "react",
        name: "React",
        alt: "Icono de React",
        icon: react_icon,
        brandColor: "#01D8FF"
    },
    {
        id: "node",
        name: "Node",
        alt: "Icono de Node",
        icon: node_icon,
        brandColor: "#5FA04E"
    },
    {
        id: "express",
        name: "Express",
        alt: "Icono de Express",
        icon: express_icon,
        brandColor: "#000000"
    },
    {
        id: "mongodb",
        name: "MongoDB",
        alt: "Icono de Mongo DB",
        icon: mongo_icon,
        brandColor: "#00684A"
    },
    {
        id: "mysql",
        name: "MySQL",
        alt: "Icono de MySQL",
        icon: mysql_icon,
        brandColor: "#057791"
    },
    {
        id: "firebase",
        name: "Firebase",
        alt: "Icono de Firebase",
        icon: firebase_icon,
        brandColor: "#DD2C00"
    },
    {
        id: "vanilla",
        name: "Vanilla",
        alt: "Icono de HTML5, CSS3 y JavaScript",
        icon: vanilla_icon,
        brandColor: "#F7DF1E"
    }

]

const otherFilters = [
    {
        id: "documentation",
        name: "Documentación",
        alt: "Icono de Documentación",
        icon: doc_icon
    },
    {
        id: "testing",
        name: "Testing",
        alt: "Icono de Testing",
        icon: testing_icon
    },
]

export {languageFilters, techFilters, otherFilters};