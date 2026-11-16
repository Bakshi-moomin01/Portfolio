export interface Project {
  name: string;
  period: string;
  status: "featured" | "building";
  statusLabel: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const PORTFOLIO_CONFIG = {
  name: "M.Moomin Bakshi",
  title: "B.Tech CSE (Hons.) | Cybersecurity Student",
  university: "Lovely Professional University (LPU)",
  semester: "3rd Semester",
  email: "bakshimoomin01@gmail.com",
  github: "https://github.com/Bakshi-moomin01",
  linkedin: "https://www.linkedin.com/in/m-moomin-bakshi/",
  profileImage: "/profile.jpg",
  resume: "/resume.pdf",
  badge: "Cybersecurity • Development • Problem Solving",
  headline: "Building secure, practical, and technology-driven solutions.",
  intro:
    "I am a Computer Science and Engineering student focused on cybersecurity, programming, and problem solving. My work centres on practical technology development — building secure software, analysing vulnerabilities, and turning engineering concepts into working systems, with continuous learning driving every project.",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "I study Computer Science and Engineering (Hons.) with a specialisation in Cybersecurity and Blockchain at Lovely Professional University, currently in my 3rd semester. My technical interests sit at the intersection of security fundamentals, programming, and practical systems engineering.",
  "I work with Python, C, SQL, Linux, and computer vision tooling to build secure, functional systems — from vision-guided embedded prototypes to static analysis pipelines for smart contract security. I approach problems by breaking them into verifiable steps and validating each one on real hardware or real code.",
  "Alongside technical work, I value clear communication, leadership, teamwork, and team management, developed through collaborative engineering programs and captaincy experience in sport. Continuous learning is a constant: each project pushes me into unfamiliar tooling and I document what I learn.",
];

export const EDUCATION = {
  institution: "Lovely Professional University",
  location: "Phagwara, Punjab",
  degree:
    "Bachelor of Technology (Hons.) – Computer Science and Engineering (Cybersecurity and Blockchain)",
  period: "August 2025 – Present",
  semester: "3rd Semester",
  cgpa: "6.64",
};

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "C", "HTML", "SQL"] },
  {
    category: "Cybersecurity",
    items: ["Cybersecurity Fundamentals", "Vulnerability Analysis", "Threat Mitigation"],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Linux",
      "Git",
      "GitHub",
      "OpenCV",
      "Raspberry Pi",
      "MongoDB",
      "MySQL",
      "VS Code",
    ],
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Problem Solving", "Teamwork", "Team Management", "Adaptability"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Intelligent Pesticide Sprinkling System (IPSS)",
    period: "November 2025 – December 2025",
    status: "featured",
    statusLabel: "Featured Project",
    technologies: [
      "Python",
      "OpenCV",
      "Embedded Systems",
      "Linux",
      "Raspberry Pi 4",
      "SSD MobileNet v3",
      "RPi.GPIO",
      "L298N H-Bridge",
    ],
    description:
      "Vision-guided edge computing platform using computer vision and embedded hardware for targeted pesticide spraying, optimizing liquid delivery and reducing chemical runoff.",
    highlights: [
      "Engineered an autonomous, vision-guided robotics prototype implementing localized real-time object classification for targeted liquid delivery.",
      "Deployed a quantized SSD MobileNet v3 network on a resource-constrained Raspberry Pi 4 CPU, compressing model size to approximately 16 MB and achieving stable edge inference speeds of 10–12 FPS.",
      "Implemented a Homography Matrix transformation in Python using OpenCV to translate raw pixel bounding boxes into real-world physical coordinate spaces.",
      "Configured RPi.GPIO logic layers to drive an L298N H-Bridge controller and isolated relays, separating Raspberry Pi 5V logic from inductive 12V pump motor loads.",
    ],
  },
  {
    name: "ChainGuard AI: An Autonomous Smart Contract Vulnerability Guard",
    period: "August 2026 – Present",
    status: "building",
    statusLabel: "Currently Building",
    technologies: [
      "Python",
      "Solidity",
      "Git",
      "GitHub",
      "Automation Pipelines",
      "Smart Contract Security",
    ],
    description:
      "Autonomous local security pipeline designed to analyze vulnerable blockchain smart contract source code, identify high-severity vulnerabilities, and generate safer corrected Solidity code.",
    highlights: [
      "Developing a local Python automation pipeline to read, analyze, and repair vulnerable blockchain smart contract source files.",
      "Implementing a static analysis workflow to identify high-severity vulnerabilities, including Reentrancy attacks.",
      "Building an automated remediation pipeline that refactors vulnerable Solidity code into cleaner, security-improved, compilable smart contracts.",
      "Using Git and GitHub for secure version control, structured development, and maintaining project history.",
    ],
  },
];

export const TRAINING: TimelineItem[] = [
  {
    title: "Cyber Security Training",
    org: "InternsElite",
    period: "May 2026 – July 2026",
    points: [
      "Completed a comprehensive training program in Cybersecurity, covering fundamental security concepts, vulnerability analysis, and threat mitigation.",
      "Gained practical exposure to identifying and analysing security vulnerabilities and understanding common cybersecurity threats.",
      "Applied theoretical cybersecurity concepts to practical, real-world security scenarios through hands-on training.",
      "Strengthened technical skills and understanding of information security principles, vulnerability assessment, and cyber threat mitigation.",
    ],
  },
  {
    title: "Tinkering Bootcamp '25",
    org: "I2EDC, IIT Jammu",
    period: "November 2025 – December 2025",
    points: [
      "Gained immersive hands-on exposure to modern engineering prototyping infrastructure and hardware-software design frameworks.",
      "Collaborated in cross-functional team efforts under the guidance of IIT faculty mentors to tackle complex, real-world innovation challenges under strict time constraints.",
      "Developed technical solutions from conceptual stages to functional models, focusing on engineering feasibility, entrepreneurship principles, and structured product pitches.",
    ],
  },
];

export const ADDITIONAL_ACHIEVEMENTS: { title: string; detail: string }[] = [
  { title: "Cricket", detail: "Participation and active involvement in cricket." },
  {
    title: "Leadership & Captaincy",
    detail:
      "Captaincy experience built around leadership, teamwork, and team management in competitive team settings.",
  },
  {
    title: "Additional Achievement",
    detail: "Editable placeholder — update this entry with a new achievement.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Python (Part 1 & 2)", issuer: "Infosys", date: "August 2026" },
  { name: "Introduction to AI", issuer: "Infosys", date: "March 2026" },
  { name: "Networking Basics", issuer: "Cisco Networking Academy", date: "February 2026" },
];

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
