
// Techo filter icon imports
import react_icon from '../assets/icons/filter-icons/react_icon.png';
import node_icon from '../assets/icons/filter-icons/node_icon.png';
import express_icon from '../assets/icons/filter-icons/express_icon.png';
import mongo_icon from '../assets/icons/filter-icons/mongo_icon.png';
import mysql_icon from '../assets/icons/filter-icons/mysql_icon.png';
import firebase_icon from '../assets/icons/filter-icons/firebase_icon.png';

//Other filter icon imports

import vanilla_icon from '../assets/icons/filter-icons/vanilla_icon.svg';
import testing_icon from '../assets/icons/filter-icons/testing_icon.svg';

const techFilterIcons = [
    {
        id: "react",
        name: "React",
        alt: "Icono de React",
        icon: react_icon
    },
    {
        id: "node",
        name: "Node",
        alt: "Icono de Node",
        icon: node_icon
    },
    {
        id: "express",
        name: "Express",
        alt: "Icono de Express",
        icon: express_icon
    },
    {
        id: "mongodb",
        name: "Mongo DB",
        alt: "Icono de Mongo DB",
        icon: mongo_icon
    },
    {
        id: "mysql",
        name: "MySQL",
        alt: "Icono de MySQL",
        icon: mysql_icon
    },
    {
        id: "firebase",
        name: "Firebase",
        alt: "Icono de Firebase",
        icon: firebase_icon
    }
]

const otherFilterIcons = [
    {
        id: "vanilla",
        name: "Vanilla",
        alt: "Icono de Vanilla",
        icon: vanilla_icon
    },
    {
        id: "testing",
        name: "Testing",
        alt: "Icono de Testing",
        icon: testing_icon
    },
]

export {techFilterIcons, otherFilterIcons};