import react_icon from '../assets/icons/tech-icons/react.svg';
import node_icon from '../assets/icons/tech-icons/node.svg';
import express_icon from '../assets/icons/tech-icons/express.svg';
import mongodb_icon from '../assets/icons/tech-icons/mongodb.svg';
import mysql_icon from '../assets/icons/tech-icons/mysql.svg';
import firebase_icon from '../assets/icons/tech-icons/firebase.svg';
import testing_icon from '../assets/icons/tech-icons/testing.svg';
import vanilla_icon from '../assets/icons/tech-icons/vanilla.svg';
import mongoose_icon from '../assets/icons/tech-icons/mongoose.svg';
import sequelize_icon from '../assets/icons/tech-icons/sequelize.svg';
import bootstrap_icon from '../assets/icons/tech-icons/bootstrap.svg';
import vite_icon from '../assets/icons/tech-icons/vite.svg';
import jwt_icon from '../assets/icons/tech-icons/jsonwebtokens.svg';
import npm_icon from '../assets/icons/tech-icons/npm.svg';
import swagger_icon from '../assets/icons/tech-icons/swagger.svg';
import selenium_icon from '../assets/icons/tech-icons/selenium.svg';
import jest_icon from '../assets/icons/tech-icons/jest.svg';
import cypress_icon from '../assets/icons/tech-icons/cypress.svg';
import git_icon from '../assets/icons/tech-icons/git.svg';
import github_icon from '../assets/icons/tech-icons/github.svg';
import reactrouter_icon from '../assets/icons/tech-icons/reactrouter.svg';

const technologiesData = [
    {
        id: "react",
        name: "React",
        bgColor: "#61DAFB",
        textColor: "black",
        icon: react_icon,
        isFilter: true
    },
    {
        id: "node",
        name: "Node",
        bgColor: "#8CC84B",
        textColor: "white",
        icon: node_icon,
        isFilter: true
    },
    {
        id: "express",
        name: "Express",
        bgColor: "#000000",
        textColor: "white",
        icon: express_icon,
        isFilter: true
    },
    {
        id: "mongodb",
        name: "MongoDB",
        bgColor: "#47A248",
        textColor: "white",
        icon: mongodb_icon,
        isFilter: true
    },
    {
        id: "mysql",
        name: "MySQL",
        bgColor: "#F29111",
        textColor: "black",
        icon: mysql_icon,
        isFilter: true
    },
    {
        id: "firebase",
        name: "FireBase",
        bgColor: "#DD2C00",
        textColor: "white",
        icon: firebase_icon,
        isFilter: true
    },
    {
        id: "testing",
        name: "Testing",
        bgColor: "c33be2",
        textColor: "white",
        icon: testing_icon,
        isFilter: true
    },
    {
        id: "vanilla",
        name: "Vanilla",
        bgColor: "#F7DF1E",
        textColor: "black",
        icon: vanilla_icon,
        isFilter: true
    },
    {
        id: "mongoose",
        name: "Mongoose",
        bgColor: "#880000",
        textColor: "white",
        icon: mongoose_icon,
        isFilter: false
    },
    {
        id: "sequelize",
        name: "Sequelize",
        bgColor: "#52B0E7",
        textColor: "white",
        icon: sequelize_icon,
        isFilter: false
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        bgColor: "#7952B3",
        textColor: "white",
        icon: bootstrap_icon,
        isFilter: false
    },
    {
        id: "vite",
        name: "Vite",
        bgColor: "#646CFF",
        textColor: "white",
        icon: vite_icon,
        isFilter: false
    },
    {
        id: "jwt",
        name: "JSON Web Tokens",
        bgColor: "#000000",
        textColor: "white",
        icon: jwt_icon,
        isFilter: false
    },
    {
        id: "bcrypt",
        name: "Bcrypt",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "winston",
        name: "Winston",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "nodemailer",
        name: "Node Mailer",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "cookieparser",
        name: "Cookie Parser",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "nodemon",
        name: "Nodemon",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "cors",
        name: "CORS",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "ejs",
        name: "EJS",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "yaml",
        name: "Yaml",
        bgColor: "#CB171E",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "dotenv",
        name: "Dotenv",
        bgColor: "#CB171E",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "swagger",
        name: "Swagger",
        bgColor: "#85EA2D",
        textColor: "black",
        icon: swagger_icon,
        isFilter: false
    },
    {
        id: "jsdoc",
        name: "JSDoc",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        isFilter: false
    },
    {
        id: "selenium",
        name: "Selenium",
        bgColor: "#43B02A",
        textColor: "white",
        icon: selenium_icon,
        isFilter: false
    },
    {
        id: "jest",
        name: "Jest",
        bgColor: "#C21325",
        textColor: "white",
        icon: jest_icon,
        isFilter: false
    },
    {
        id: "cypress",
        name: "Cypress",
        bgColor: "#000000",
        textColor: "white",
        icon: cypress_icon,
        isFilter: false
    },
    {
        id: "reactrouter",
        name: "React Router",
        bgColor: "#61DAFB",
        textColor: "black",
        icon: reactrouter_icon,
        isFilter: false
    },
    {
        id: "git",
        name: "Git",
        bgColor: "#F05032",
        textColor: "white",
        icon: git_icon,
        isFilter: false
    },
    {
        id: "github",
        name: "GitHub",
        bgColor: "#181717",
        textColor: "white",
        icon: github_icon,
        isFilter: false
    }

]

export default technologiesData;