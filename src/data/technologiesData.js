import react_icon from '../assets/icons/tech-icons/react.svg';
import angular_icon from '../assets/icons/tech-icons/angular.svg';
import node_icon from '../assets/icons/tech-icons/node.svg';
import express_icon from '../assets/icons/tech-icons/express.svg';
import mongodb_icon from '../assets/icons/tech-icons/mongodb.svg';
import mysql_icon from '../assets/icons/tech-icons/mysql.svg';
import firebase_icon from '../assets/icons/tech-icons/firebase.svg';
import mongoose_icon from '../assets/icons/tech-icons/mongoose.svg';
import sequelize_icon from '../assets/icons/tech-icons/sequelize.svg';
import bootstrap_icon from '../assets/icons/tech-icons/bootstrap.svg';
import tailwind_icon from '../assets/icons/tech-icons/tailwindcss.svg';
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
import html_icon from '../assets/icons/tech-icons/html.svg';
import css_icon from '../assets/icons/tech-icons/css.svg';
import javascript_icon from '../assets/icons/tech-icons/javascript.svg';
import typescript_icon from '../assets/icons/tech-icons/typescript.svg';
import render_icon from '../assets/icons/tech-icons/render.svg';
import vscode_icon from '../assets/icons/tech-icons/vscode.svg';
import photoshop_icon from '../assets/icons/tech-icons/photoshop.svg';
import aftereffects_icon from '../assets/icons/tech-icons/aftereffects.svg';
import illustrator_icon from '../assets/icons/tech-icons/illustrator.svg';
import premiere_icon from '../assets/icons/tech-icons/premiere.svg';
import jira_icon from '../assets/icons/tech-icons/jira.svg';
import reactHookForm_icon from '../assets/icons/tech-icons/reacthookform.svg';
import reactQuery_icon from '../assets/icons/tech-icons/reactquery.svg';
import axios_icon from '../assets/icons/tech-icons/axios.svg';
import netlify_icon from '../assets/icons/tech-icons/netlify.svg';
import vercel_icon from '../assets/icons/tech-icons/vercel.svg';
import degitalocean_icon from '../assets/icons/tech-icons/digitalocean.svg';


const languagesData = [
    {
        id: "javascript",
        name: "JavaScript",
        bgColor: "#F7DF1E",
        textColor: "black",
        icon: javascript_icon,
        type: "develop"
    },
    {
        id: "typescript",
        name: "TypeScript",
        bgColor: "#3178C6",
        textColor: "black",
        icon: typescript_icon,
        type: "develop"
    },
    {
        id: "html",
        name: "HTML",
        bgColor: "#E34F26",
        textColor: "white",
        icon: html_icon,
        type: "develop"
    },
    {
        id: "css",
        name: "CSS",
        bgColor: "#663399",
        textColor: "white",
        icon: css_icon,
        type: "develop"
    },
]

const frontTechData = [
    {
        id: "angular",
        name: "Angular",
        bgColor: "#BD002E",
        textColor: "black",
        icon: angular_icon,
        type: "develop"
    },
    {
        id: "react",
        name: "React",
        bgColor: "#61DAFB",
        textColor: "black",
        icon: react_icon,
        type: "develop"
    },
    {
        id: "vite",
        name: "Vite",
        bgColor: "#646CFF",
        textColor: "white",
        icon: vite_icon,
        type: "develop"
    },
    {
        id: "reactrouter",
        name: "React Router",
        bgColor: "#61DAFB",
        textColor: "black",
        icon: reactrouter_icon,
        type: "develop"
    },
    {
        id: "reactrouter",
        name: "React Hook Form",
        bgColor: "#EC5990",
        textColor: "white",
        icon: reactHookForm_icon,
        type: "develop"
    },
    {
        id: "reactquery",
        name: "React Query",
        bgColor: "#FF4154",
        textColor: "white",
        icon: reactQuery_icon,
        type: "develop"
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        bgColor: "#06B6D4",
        textColor: "white",
        icon: tailwind_icon,
        type: "develop"
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        bgColor: "#7952B3",
        textColor: "white",
        icon: bootstrap_icon,
        type: "develop"
    },
    {
        id: "axios",
        name: "Axios",
        bgColor: "#5A29E4",
        textColor: "white",
        icon: axios_icon,
        type: "develop"
    },
]


const backTechData = [
    {
        id: "node",
        name: "Node",
        bgColor: "#8CC84B",
        textColor: "white",
        icon: node_icon,
        type: "develop"
    },
    {
        id: "express",
        name: "Express",
        bgColor: "#000000",
        textColor: "white",
        icon: express_icon,
        type: "develop"
    },
    {
        id: "mongoose",
        name: "Mongoose",
        bgColor: "#880000",
        textColor: "white",
        icon: mongoose_icon,
        type: "develop"
    },
    {
        id: "sequelize",
        name: "Sequelize",
        bgColor: "#52B0E7",
        textColor: "white",
        icon: sequelize_icon,
        type: "develop"
    },
    {
        id: "nodemon",
        name: "Nodemon",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "firebase",
        name: "Firebase",
        bgColor: "#DD2C00",
        textColor: "white",
        icon: firebase_icon,
        type: "develop"
    },
    {
        id: "jwt",
        name: "JSON Web Tokens",
        bgColor: "#000000",
        textColor: "white",
        icon: jwt_icon,
        type: "develop"
    },
    {
        id: "bcrypt",
        name: "Bcrypt",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "winston",
        name: "Winston",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "nodemailer",
        name: "Node Mailer",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "cookieparser",
        name: "Cookie Parser",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "cors",
        name: "CORS",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "ejs",
        name: "EJS",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "yaml",
        name: "Yaml",
        bgColor: "#CB171E",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    {
        id: "dotenv",
        name: "Dotenv",
        bgColor: "#CB171E",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
    
]

const testingTechData = [
    {
        id: "jest",
        name: "Jest",
        bgColor: "#C21325",
        textColor: "white",
        icon: jest_icon,
        type: "develop"
    },
    {
        id: "cypress",
        name: "Cypress",
        bgColor: "#000000",
        textColor: "white",
        icon: cypress_icon,
        type: "develop"
    },
    {
        id: "selenium",
        name: "Selenium",
        bgColor: "#43B02A",
        textColor: "white",
        icon: selenium_icon,
        type: "develop"
    },
]

const docTechData = [
    {
        id: "swagger",
        name: "Swagger",
        bgColor: "#85EA2D",
        textColor: "black",
        icon: swagger_icon,
        type: "develop"
    },
    {
        id: "jsdoc",
        name: "JSDoc",
        bgColor: "#0061F2",
        textColor: "white",
        icon: npm_icon,
        type: "develop"
    },
]

const dbTechData = [
    {
        id: "mongodb",
        name: "MongoDB",
        bgColor: "#47A248",
        textColor: "white",
        icon: mongodb_icon,
        type: "databases"
        
    },
    {
        id: "mongoatlas",
        name: "Mongo Atlas",
        bgColor: "#47A248",
        textColor: "white",
        icon: mongodb_icon,
        type: "databases"
        
    },
    {
        id: "mongocompass",
        name: "Mongo Compass",
        bgColor: "#47A248",
        textColor: "white",
        icon: mongodb_icon,
        type: "databases"
        
    },
    {
        id: "mysql",
        name: "MySQL",
        bgColor: "#F29111",
        textColor: "black",
        icon: mysql_icon,
        type: "databases"
    },
    {
        id: "mysqlworkbench",
        name: "MySQL Workbench",
        bgColor: "#F29111",
        textColor: "black",
        icon: mysql_icon,
        type: "databases"
    },
    {
        id: "firestore",
        name: "Firestore",
        bgColor: "#DD2C00",
        textColor: "white",
        icon: firebase_icon,
        type: "databases"
    },
]

const managementTechData = [
    {
        id: "git",
        name: "Git",
        bgColor: "#F05032",
        textColor: "white",
        icon: git_icon,
        type: "management"
    },
    {
        id: "github",
        name: "GitHub",
        bgColor: "#181717",
        textColor: "white",
        icon: github_icon,
        type: "management"
    },
    {
        id: "vscode",
        name: "VS Code",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: vscode_icon,
        type: "develop"
    },
    {
        id: "jira",
        name: "Jira",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: jira_icon,
        type: "management"
    },
    {
        id: "render",
        name: "Render",
        bgColor: "#000000",
        textColor: "white",
        icon: render_icon,
        type: "management"
    },
    {
        id: "netlify",
        name: "Netlify",
        bgColor: "#00C7B7",
        textColor: "white",
        icon: netlify_icon,
        type: "management"
    },
    {
        id: "vercel",
        name: "Vercel",
        bgColor: "#000000",
        textColor: "white",
        icon: vercel_icon,
        type: "management"
    },
    {
        id: "digitalocean",
        name: "Digital Ocean",
        bgColor: "#0080FF",
        textColor: "white",
        icon: degitalocean_icon,
        type: "management"
    },

]

const otherTechData = [
    {
        id: "photshop",
        name: "Photoshop",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: photoshop_icon,
        type: "other"
    },
    {
        id: "aftereffects",
        name: "After Effects",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: aftereffects_icon,
        type: "other"
    },
    {
        id: "premiere",
        name: "Premiere Pro",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: premiere_icon,
        type: "other"
    },
    {
        id: "illustrator",
        name: "Illustrator",
        bgColor: "#2B9FED",
        textColor: "white",
        icon: illustrator_icon,
        type: "other"
    },
]

export {backTechData, languagesData, frontTechData, dbTechData, testingTechData, docTechData, managementTechData, otherTechData};