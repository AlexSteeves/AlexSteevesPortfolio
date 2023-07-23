import Clarify from './Components/Pictures/Clarify_Logo.png';
import Database from './Components/Pictures/Database_Project.png';
import Tailwind from './Components/Pictures/TailWind-Discord-Practice.png';

import { FaReact, FaNodeJs, FaJava, FaPython} from "react-icons/fa";
import { SiTailwindcss, SiMysql} from "react-icons/si";

export const projects = [
    {
      title: "TailwindCSS Practice",
      subtitle: "Tailwind and React",
      description:
        "Used TailwindCSS and React to replicate discords sidebar",
      image: Clarify,
      link: "https://github.com/AlexSteeves/tailwind-practice",
    },
    
    {
      title: "Hotel Palace",
      subtitle: "React and PostgreSQL",
      description:
        "I actively contributed to the development of a hotel booking website, utilizing React for the frontend and PostgreSQL for the backend.",
      image: Database,
      link: "https://github.com/MichiasShiferaw/database-proj",
    },


    {
      title: "Clarify Smart Mirror",
      subtitle: "React Native and TypeScript",
      description:
        "Developing a ios and android app to interact with my capstone projects smart mirror.",
      image: Tailwind,
      link: "https://github.com/uoClarify"
    },
  ];
  
  
  export const skills = [
    {
      text:  "React",
      symbol: <FaReact />,
    },
    {
      text: "Tailwind",
      symbol: <SiTailwindcss />,
    },
    {
      text: "Java",
      symbol: <FaJava />,
    },
    {
      text: "Node.JS",
      symbol: <FaNodeJs />,
    },
    {
      text: "mySQL",
      symbol: <SiMysql />
    },
    {
      text: "Python",
      symbol: <FaPython />,
    },
    {
      text: "Prolog",
     
    },
   
   
    
    
  ];

 
  