import calculator from '../assets/calculator.png';
import todoList from '../assets/todo-list.png';
import rockPaperScissors from '../assets/rock-paper-scissors.png';
import ticTacToe from '../assets/tic-tac-toe.png';

export const HERO_CONTENT = 'With 3 years expertise in MERN, React Native. I specialize in full-stack and mobile app development. I create responsive web solutions. My React Native skills craft seamless, cross-platform apps for Android and iOS, ensuring top-tier user experiences, reflecting my commitment to quality and innovation.';

export const EXPERIENCES = [
    {
        year: "09/2021 - Present",
        role: "Full Stack Developer",
        company: "CloudSight Technologies Private Limited",
        description: "I possess a diverse skillset, having experience working on numerous projects utilizing various technologies. I'm adept at both front-end and back-end development, leveraging Node.js, .Net Core, React JS, and React Native.  I've successfully delivered 4 React Native apps to the Play Store, showcasing my ability to build mobile applications. My database expertise encompasses both SQL (MySQL) and NoSQL (MongoDB) solutions, allowing me to tailor data storage to project requirements.",
        technologies: [
            'React.js',
            'React Native',
            'Node.js',
            '.Net Core',
            'MySQL',
            'MongoDB',
            'Express.js'
        ]
    },
    {
        year: "12/2020 - 04/2021",
        role: "Full Stack Web Developer",
        company: "Smart Food Safe",
        description: "As a Full Stack Web Developer utilizing the MERN Stack (MongoDB, ExpressJS, React JS, Node JS), I played a key role in developing a real-time monitoring system for farmers. This system provided crucial data on crop conditions, livestock health, and environmental factors, empowering farmers to make informed decisions. During the development phase, I collaborated closely with the UI/UX team, translating their designs into functional front-end elements that maintained the design vision while creating a smooth and intuitive user experience for farmers.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
        year: "08/2020 - 09/2020",
        role: "Front End Web Developer",
        company: "ProCivil",
        description: "I contributed significantly to the user experience (UX) of our administrative tools. I built custom UI components in React JS that not only improved the visual appeal of the Admin Panel but also catered to specific functionalities, making it more user-friendly. Additionally, I leveraged my knowledge of React Native to develop the Procivil mobile app, guaranteeing a seamless user experience across different platforms. By implementing intuitive design elements and interactions throughout both the Admin Panel and mobile app, I was able to further enhance user satisfaction and engagement.",
        technologies: ["React.js", "React Native"]
    }
]

export const PROJECTS = [
    {
        title: "Scientific Calculator",
        description: "This scientific calculator empowers you to conquer diverse scientific computations. It offers all the fundamental arithmetic operations (addition, subtraction, multiplication, and division) alongside advanced functions like trigonometry (sine, cosine, tangent, and their inverses), logarithms (common and natural), and exponentiation. The calculator even facilitates basic unit conversion between degrees and radians. Streamlining your workflow, it includes dedicated buttons for clearing the entire expression (AC) or deleting single digits (DEL).",
        technologies: ["React.js"],
        link: "https://calculator-zebv.onrender.com",
        image: calculator
    },
    {
        title: "Todo-List",
        description: "This is a todo list application developed using React and React Bootstrap, enhanced with Redux for efficient local data management. Users can effortlessly add, edit, mark tasks as completed, and delete tasks from the list, making it a practical tool for managing daily tasks.",
        technologies: ["React.js", "Redux"],
        link: "https://todo-list-divf.onrender.com",
        image: todoList
    },
    {
        title: "Rock Paper Scissors",
        description: "This Rock Paper Scissors game, built with React and Tailwind CSS, allows users to play against the computer, featuring score tracking and game reset options. The game provides a simple and engaging user interface where players can select rock, paper, or scissors and instantly see the computer's random choice. The game keeps track of the score, increasing it for wins and decreasing it for losses, with draws leaving the score unchanged. Additionally, players can reset the game for a new round without altering the score or reset the score to zero, making it a fun and interactive way to enjoy this classic game.",
        technologies: ["React.js"],
        link: "https://rock-paper-scissor-game-emc3.onrender.com",
        image: rockPaperScissors
    },
    {
        title: "Tic-Tac-Toe",
        description: "This Tic-Tac-Toe game allows two players to compete on a 3x3 grid, strategically placing their marks (X or O). The game automatically detects wins and draws, visually indicating winning moves with drawn lines. Its responsive design and reset option make it a user-friendly choice for enjoying this classic game.",
        technologies: ["React.js"],
        link: "https://tic-tac-toe-tn1g.onrender.com",
        image: ticTacToe
    }
]