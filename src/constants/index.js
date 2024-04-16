import { hexadecimal, tesla, uneechub } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    API,
    reactQuery,
    mysql,
    reactNative,
    aws,
    jira,
    meet,
    youtube,
    weather,
    jobs
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: reactQuery,
        name: "React Query",
        type: "Server State Management",
    },
    {
        imageUrl: reactNative,
        name: "React Native",
        type: "Mobile Applcation",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    }, {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Web Service",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Product Development",
    },
    {
        imageUrl: API,
        name: "API",
        type: "API",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Nodejs Developer Intern",
        company_name: "JMV Techhnology",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Feb 2022 - Mar 2022",
        points: [
            "Designing and developing APIs using Nodejs to fulfill frontend application requirements",
            "Implementing and refining functionality based on client specifications",
            "Managing and securing backend servers & Database to ensure optimal performance and data protection",
            "Overseeing code deployment processes to facilitate seamless updates and releases",
            "Utilizing AWS S3 and EC2 for efficient storage solutions and environment management"
        ],
    },
    {
        title: "React.js Developer Intern",
        company_name: "Uneechub",
        icon: uneechub,
        iconBg: "#accbe1",
        date: "May 2022 - Fed 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Integrating APIs to enhance application functionality."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Hexadecimal",
        icon: hexadecimal,
        iconBg: "#a2d2ff",
        date: "Mar 2023 - Jan 2024",
        points: [
            "Developing and maintaining web and Mobile applications using React.js and React Native other related technologies.",
            "developing and Integrating APIs using Nodejs as per application requirements",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Managing and securing backend servers & Database to ensure optimal performance and data protection",
            "Utilizing AWS S3 and EC2 for efficient storage solutions and environment management",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Yash18-baghel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yash-baghel-57967522b',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        githubLink: 'https://github.com/Yash18-baghel/Igram',
        liveLink: 'https://igram-clone.vercel.app',
    },
    {
        iconUrl: meet,
        theme: 'btn-back-blue',
        name: 'Zoom Clone',
        description: 'Created a Zoom Meet clone enabling users to host and join virtual meetings with live audio and video sharing, scheduling, and recording features.',
        githubLink: 'https://github.com/Yash18-baghel/zoom-clone',
        liveLink: 'https://yoom-meet.vercel.app',
    },
    {
        iconUrl: youtube,
        theme: 'btn-back-red',
        name: 'Youtube Clone',
        description: 'Developed a YouTube clone allowing users to explore real YouTube data, surf videos, and view detailed video information including comments, likes, subscribers, and more.',
        githubLink: 'https://github.com/Yash18-baghel/YT',
        liveLink: 'https://yash18-baghel.github.io/YT',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-yellow',
        name: 'Global Weather App',
        description: 'Crafted a web-based weather application enabling users to access live weather reports for various locations through an interactive map interface. Users can explore different regions, view real-time weather data, and stay informed about current weather conditions with ease.',
        githubLink: 'https://github.com/Yash18-baghel/WEATHER_APP_GLOBE',
        liveLink: 'https://yash18-baghel.github.io/WEATHER_APP_GLOBE',
    },
    {
        iconUrl: jobs,
        theme: 'btn-back-green',
        name: 'Jobs Application',
        description: 'Developed a mobile application that allows users to browse the latest job postings, review job requirements, and access detailed job descriptions for each listing. With intuitive navigation and comprehensive job details, the app streamlines the job search process, empowering users to find their ideal opportunities with ease.',
        githubLink: 'https://github.com/Yash18-baghel/native_jobs',
        liveLink: 'https://expo.dev/artifacts/eas/wv2yd7BE6BWKLd7pJBM5j6.apk',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-black',
        name: 'AI Supportive Prompts',
        description: 'Designed and developed a prompt application where users can create and explore AI-supported prompts. This platform empowers users to unleash their creativity by generating and sharing prompts tailored to their interests. With AI assistance, users can discover endless possibilities for writing, brainstorming, and creative expression.',
        githubLink: 'https://github.com/Yash18-baghel/project_promptHub',
        liveLink: 'https://promptohub.vercel.app'
    },

];