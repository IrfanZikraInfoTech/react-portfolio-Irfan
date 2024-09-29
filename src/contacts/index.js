import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project2.jpg";
import project5 from "../assets/project5.png";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const HERO_CONTENT = `I'm a Full Stack Developer based in Faridabad, Haryana, with a B.Tech in Computer Science and Engineering. I specialize in React and enjoy working on innovative projects that challenge my skills. My academic foundation in Non-Medical and Computer Science from Vidya Niketan has fueled my passion for technology. I’m committed to creating efficient, scalable solutions and continuously expanding my knowledge in the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `I am a Full Stack Developer with a strong foundation in both front-end and back-end technologies, specializing in React for building dynamic and user-centric web applications. Based in Faridabad, Haryana, I hold a B.Tech in Computer Science and Engineering, which has equipped me with a comprehensive understanding of software development.

With a passion for technology and innovation, I thrive on challenging projects that push the boundaries of my knowledge and skills. My journey in tech began during my school years at Vidya Niketan (CBSE), where I completed my 12th grade with a specialization in Non-Medical and Computer Science, and my 10th grade from the same institution.

I am always eager to learn and grow, consistently staying up-to-date with the latest industry trends. My goal is to create efficient, scalable, and impactful solutions that deliver a seamless experience for users.`;

export const EXPERIENCES = [
  {
    year: "2023 - current",
    role: "Full Stack Developer",
    company: "Zikra Infotech",
    description: `Initially worked on PHP-based projects, then transitioned to developing web applications using React.js and Node.js. Designed and implemented RESTful APIs, and collaborated with cross-functional teams to deliver high-quality software products. Promoted to Senior React Developer for my contributions and expertise.`,
    technologies: ["Javascript", "Php", "CSS", "React", "SQL", "Laravel"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "BHR Code Pvt. Ltd.",
    description: `Started my development journey, learning React and completing an internship, which led to a full-time position. Contributed to building web applications using JavaScript, React.js while managing databases with MongoDB.`,
    technologies: ["Javascript", "HTML", "CSS", "React", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Continuum360",
    image: project1,
    description:
      "Developed a healthcare platform with two distinct roles: Patient and Doctor. The app allows patients to book appointments based on doctor availability, while doctors can manage patient consultations, provide medical advice, issue prescriptions, suggest exercises, and track patient progress. Focused on streamlining the doctor-patient interaction, improving efficiency and accessibility in healthcare services.",
    technologies: ["HTML", "CSS", "React", "Larvel"],
  },
  {
    title: "QR-Code-Generator",
    image: project2,
    description:
      "Created a QR-Code Generator app with React, allowing users to easily generate QR codes from text inputs. Focused on delivering a simple and efficient user interface for seamless code generation.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Weather-Broadcast",
    image: project3,
    description:
      "Built a Weather-Broadcast app using React, integrating real-time weather data and providing an intuitive, user-friendly interface. Focused on optimizing performance and delivering accurate weather updates.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "MI-Clone-App",
    image: project4,
    description:
      "Rebuilt MI.com’s website using React, ensuring a seamless and responsive user experience. Applied best practices in front-end development, optimizing performance and enhancing UI/UX.",
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Calculator",
    image: project5,
    description:
      "Normally functional calculator use less amount of code and doing many calculations.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "D-317 Dabua Colony N.I.T Faridabad",
  phoneNo: "+91 9205875078",
  email: "ir06162@gmail.com",
};
