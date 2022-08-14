// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    firstName: "👋 Hi, I'm ",
    middleName: "",
    lastName: "Calvin",
    message: " Software Engineer. Enthusiastic learner. Road cyclist. ",

    icons: [
        {
            image: "fab fa-github",
            url: "https://github.com/calvindotsg",
        },
        {
            image: "fab fa-linkedin",
            url: "https://www.linkedin.com/in/calvin-loh",
        },
        {
            image: "fas fa-envelope",
            url: "/contact",
        },
        {
            image: "fas fa-file-pdf",
            url: require("../assets/Resume_Calvin.pdf"),
        }
    ],
};

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../assets/profile-photo.jpg"),
    imageSize: 250,
    messages: ["I seek an practical experiences where opportunities for learning are actively up for grabs. " +
    "I am grateful for each challenge, each being a valuable learning opportunity."],
    resume: require("../assets/Resume_Calvin.pdf"),
};

const finalYearProject = {
    show: true,
    heading: "Final year project",
    lists: [
        {
            ProjectTitle: "A web app utilising backend rule-based decision-making in " +
                "recommending location for food and beverage outlets with desired attributes for customers",
            DegreeTitle: "Bachelor of Science Computing and Information Systems",
            Title: "Undergraduate",
            Time: "Sep 2021 - May 2022",
            ProjectLink: "https://fyp-calvinloh-190428332.web.app/",
            GithubLink: "https://github.com/calvindotsg/Final-year-project",
            Descriptions: [
                "• Problem statement: Identified as shortfalls in current methods among F&B management.",
                "• Project scope: Customers motivations and location scouting for new outlets.",
                "• Status quo: Deficiencies in techniques used to gather customer desired attributes, in these areas:",
                "1. Optimal outlet location relies on mainly human intuition.",
                "2. Limited information technology tools.",
                "How it works:",
                "1. The proposed web application seeks to gather customer’s motivations, distill into these distinct criteria as input into this application.",
                "2. Thereafter, this project aims to use rule-based decision-making based on specific business rules and customer inputs.",
                "3. The output of rule engine displayed on the web application:",
                "• Map with markers of target customers frequented locations",
                "• Feature tiles for each desired attribute your restaurant is recommended to provide."
            ],
            TechStack: ["React, mapbox-gl, json-rule-engine, json-forms, Semantic UI React, emailjs, sweetalert2, JetBrains WebStorm"],
        }
    ]
};

const career = {
    show: true,
    heading: "Career",
    lists: [
        {
            CompanyName: "NCS Group",
            Address: "NCS Hub, Singapore",
            Title: "Software engineer",
            Time: "Jun 2022 - Present",
            Descriptions: [
                "• Develop full-stack web application with proprietary Angular-Spring Boot Java Framework " +
                "based on user stories and specifications.",
                "• Put into practice agile scrum methodology in a hybrid team environment, " +
                "using Kanban boards, GitLab and latest DevOps tools.",
                "• Under the mentorship of senior colleagues in developing software engineering best practices."
            ],
            TechStack: ["Agile scrum software development, Angular, Sprint Boot, Object-oriented Java, Apache Maven, " +
            "REST services, HTML5, MySQL, MS SQL, Jira, AWS, Jenkins, GitLab, Git"],
        },
        {
            CompanyName: "Sopra Steria Asia Pte. Ltd.",
            Address: "one-north business park, Singapore",
            Title: "Temporary Java Software engineer",
            Time: "Jun 2021 - Sep 2021",
            Descriptions: [
                "• Paired with a senior colleague with tasks within development and testing phases " +
                "of iterative-based software development lifecycle, with on-job learning experience as a priority",
                "• Effectively troubleshoot and resolve issues within backend rule engine" +
                " and object-oriented Java component, with active collaboration among hybrid team" +
                " through Jira and Microsoft Teams",
                "• Utilised the latest tech stack and DevOps tools to assist development " +
                "within the context of a government contracted IT project."
            ],
            TechStack: ["Object-oriented Java, IBM Operational Decision Manager, Business Action Language, mySQL, Jira, " +
            "GitLab"],
        }
    ]
};
const education = {
    show: true,
    heading: "Education",
    lists: [
        {
            university: "University of London, SIM Global Education",
            degree: "Bachelor of Science (Honours) Computing and Information Systems (Second Upper Division)",
            time: "Sep 2019 - May 2022",
            description: ""
        },
        {
            university: "Yishun Junior College",
            degree: "GCE Advanced Level",
            time: "Jan 2016 - Dec 2017",
            description: ""
        }
    ]
};

const onlineWritings = {
    show: true,
    heading: "My published works",
    quote: {
        text: "Stay hungry stay foolish",
        by: "Steve Jobs"
    },
    list: [
        {
            title: "Stomp out Dengue community service event",
            url: "https://web.archive.org/web/20210309074708/https://yolk16.rssing.com/chan-9426123/article142.html",
            description: "Student press coverage of ground-up initiative to fight dengue in Singapore",
        },
        {
            title: "Inter-school Debates competition",
            url: "https://web.archive.org/web/20150328034404/http://discover-nyp.blogspot.sg/2014/07/stomp-out-dengue-carnival-2014-touches.html",
            description: "Student press coverage of a fierce debates competition, represented by student debate teams" +
                " from the various faculties of Nanyang Polytechnic"
        }
    ]

};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "calvindotsg", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Say hi 👋",
    message:
        "Have an interesting project or an opportunity? Let's get in touch!",
    email: "hello [at] calvin.sg",
};

export {
    navBar, mainBody, about,
    getInTouch, career, education,
    onlineWritings, repos, finalYearProject
};
