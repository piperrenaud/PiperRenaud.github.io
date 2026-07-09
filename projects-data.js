const projectsData = {

  "wiremus-tour": {
    title: "Wiremu's Tour",
    heroImage: null,
    about: [
      "Wiremu’s Tour is an educational interactive experience that takes children on a journey through Aotearoa’s native wildlife and conservation efforts. Guided by Wiremu, players explore New Zealand’s bush, discover native animals, and learn through interactive storytelling designed specifically for young audiences.",
      "The project combines visual storytelling with interactive educational content, encouraging curiosity and environmental awareness through approachable, engaging gameplay."
    ],
    info: {
      genre: "Educational Visual Novel/Interactive Learning Experience",
      platform: "PC",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "Ongoing (4th Year Capstone Project)",
      teamSize: "10 Developers (6 Artists, 2 Programmers, 1 Researcher, 1 Producer)",
      targetAudience: ["Children aged 6-8", "Early Readers", "Families and tourists interested in NZ wildlife"]
    },
    myRole: {
      title: "Gameplay Programmer",
      intro: [
        "I am one of two programmers responsible for implementing gameplay systems and creating tools that allow the rest of the team to efficiently build educational content."
      ],
      responsibilities: [
        "Developed a custom dialogue system",
        "Implemented ScriptableObject based dialogue architecture",
        "Built the animal level selection system",
        "Implemented scene management between animal experiences",
        "Worked closely with designers and researchers to present educational content",
        "Supported integration of scanned player artwork into gameplay"
      ]
    },
    technicalChallenges: [
      {
        name: "Creating A Dialogue Pipeline For Non-Programmers",
        problem: "The writers and designers needed to create and edit educational dialogue without requiring programmer assistance every time dialogue changed.",
        solution: "Designed a ScriptableObject-based dialogue architecture that separated dialogue data from gameplay logic.",
        result: [
            "Designers could rapidly iterate dialogue.",
            "Educational content became much easier to maintain.",
            "Dialogue remained modular and reusable across multiple animal experiences."
        ]      
        },
      {
        name: "Importing Player Artwork Into The Game",
        problem: "Player completes a physical colouring sheet which must become an in-game asset",
        solution: "Implemented the pipeline for importing scanned artwork using Vuforia image recognition and homography calculations, allowing artwork to be mapped onto in-game textures.",
        result: [
            "Players see their own artwork become part of the experience",
            "Increased engagement through personalization",
            "Created a memorable educational interaction"
        ]       }
    ],
    features: [
    {
        name: "Custom Dialogue System",
        text: "A modular dialogue system built around ScriptableObject that allows educational content to be edited independently of gameplay code.",
        image: null
    },
    {
        name: "Custom Animal Import System",
        text: "Players colour a physical animal template which is scanned and imported into the game, allowing their own artwork to appear as part of the world.",
        image: null
    },
    {
        name: "Discovery-Based Learning",
        text: "Players choose which native animal they want to learn about, encouraging curiosity while making each playthrough slightly different.",
        image: null
    }
    ],
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["Vuforia", "GitHub"],
      concepts: ["ScriptableObjects", "Data-driven Architecture", "Scene Management", "Dialogue Systems", "Event-driven Programming"]
    },
    whatILearned: [
      "This is my first large-scale collaborative game project, working alongside artists, researchers, and designers.",
      "The project reinforced how important modular architecture becomes as a project grows. Building systems that allows non-programmers to iterate independently significantly improved our team’s workflow and reduced bottlenecks between programming and content creation.",
      "I also gained experience collaborating across multiple disciplines, translating educational design goals into technical systems that were easy for the wider team to use."
    ],
    outcome: [
      "Developed as a 4th-year university capstone project",
      "Designed for in classrooms and educational visitors’ centres",
      "Focused on engaging children with New Zealand conservation through interactive Storytelling."
    ],
    media: [
      { image: null, caption: "Dialogue system Node" },
      { image: null, caption: "Burndown Chart" },
      { image: null, caption: "Macro Planning Chart" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "streetside": {
    title: "Streetside",
    heroImage: null,
    about: ["A fast-paced two-player co-op puzzle game where players race through city mazes to tag graffiti spots while solving environmental puzzles together. Players control Joey and Coco, two aspiring graffiti artists determined to make a name for themselves throughout Clyde City.",
        "The game combines Pac-Man-inspired grid-based movement with cooperative puzzles solving, unique player abilities, and spray-paining mechanics to create short, repayable levels that reward teamwork and quick decision-making."
    ],
    info: {
      genre: "Co-op Puzzle Game",
      platform: "PC & Console (Couch Co-op, Online multiplayer)",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "Ongoing (4th Year Capstone Project)",
      teamSize: "4 Developers (2 Programmers, 1 Artist, 1 Level Designer)",
      targetAudience: ["Ages 13+", "Fans of cooperative puzzle games", "Fans of fast-paced arcade games", "Couch co-op and online multiplayer audiences"]
    },
    myRole: {
      title: "Gameplay Programmer",
      intro: ["I am one of two programmers responsible for developing the game’s core gameplay systems and cooperative mechanics."],
      responsibilities: ["Supported development of grid-based player movement system", "Helped implement two-player gameplay systems", "Built the graffiti spray-painting mechanics", "Developed puzzle interaction systems", "Helping implement player abilities", "Assisting with gameplay integration across levels", "Collaborating with level designer to support puzzle implementation"]
    },
    technicalChallenges: [
      {
        name: "Building Responsive Grid-Based Movement",
        problem: "The game required fast, responsive movement that felt precise while remaining locked to a grid for puzzle consistency.",
        solution: "Developed a custom grid-based movement system inspired by classic arcade games, allowing player to move quickly between grid positions while maintaining predictable movement for puzzle design.",
        result:[
            "Tight, responsive controls",
            "Consistent puzzle interactions",
            "Gameplay that feels fast while remaining easy to read"
        ]
      },
      {
        name: "Creating Cooperative Gameplay Systems",
        problem: "Many puzzles required both players to interact together, requiring systems that synchronized player actions and encourage teamwork.",
        solution: "Implemented multiplayer gameplay systems that supported cooperative puzzle mechanics, player-specific abilities, and shared progression through each level.",
        result:[
            "Encouraged communication between players",
            "Enabled a variety of cooperative puzzle designs",
            "Reinforced the games core teamwork fantasy"
        ]
      },
      {
        name: "Designing the Graffiti Mechanics",
        problem: "The graffiti mechanic needed to feel rewarding while breaking up puzzle gameplay without slowing the pace.",
        solution: "Developed a small spray-paining mini-game that players complete after reaching a graffiti location, integrating it naturally into the gameplay loop..",
        result:[
            "Added variety to gameplay",
            "Reinforced the game’s graffiti theme",
            "Provided satisfying level completion moments"
        ]
      }
    ],
    features: [
    {
        name: "Grid-based movement",
        text: "Players move across the city using fast, tile-based movement inspired by classic arcade games, creating gameplay that feels both responsive and highly readable",
        image: null
    },
    {
        name: "Cooperative Puzzle Gameplay",
        text: "Levels are designed around two-player cooperation, with puzzles requiring communication, timing, and each character’s unique abilities to progress.",
        image: null
    },
    {
        name: "Graffiti Spray-Paining Mini Game",
        text: "Instead of simply reaching the goal, players complete a quick spray-paining interaction before successfully tagging each location.",
        image: null
    },
    {
        name: "Character Progression Through Collectables",
        text: "Players discover collectible comic pages throughout the game that gradually reveal Joey and Coco’s story and motivation.",
        image: null
    }
    ],
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["GitHub"],
      concepts: ["Grid-based Movement", "Multiplayer Gameplay", "Cooperative Gameplay", "Puzzle System Design", "State-based Logic", "Event-driven Programming"]
    },
    whatILearned: [
        "Working on a smaller multidisciplinary team highlighted the importance of designing gameplay systems that were both reusable and easy to build puzzles around.", 
        "I gained valuable experience implementing cooperative mechanics and I learned how strongly player movement influences puzzle design. Creating systems that felt responsive while remaining predictable was essential for maintaining satisfying gameplay.", 
        "This project also strengthened my understanding of designing gameplay around a clear core fantasy and ensuring every mechanic supported that vision."
    ],
    outcome: ["Designed as a cooperative game that combines fast-paced arcade movement with puzzle-solving and teamwork. The project focused on creating short, repayable levels where every mechanic reinforced cooperation and player expression through graffiti."],
    media: [
      { image: null, caption: "Burndown Chart" },
      { image: null, caption: "Scrum Chart" },
      { image: null, caption: "Macro Planning Chart" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "echoes": {
    title: "Echoes in the Facility",
    heroImage: null,
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    info: {
      genre: "Put genre here",
      platform: "put platform here",
      engine: "put engine here",
      devTime: "put development time here",
      teamSize: "put team size here",
      targetAudience: ["target audience", "target audience"]
    },
    myRole: {
      title: "Put role title here (e.g. Gameplay Programmer)",
      intro: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      responsibilities: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"]
    },
    technicalChallenges: [
      {
        name: "Name of challenge",
        problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    features: [
    {
        name: "Animal Selection System",
        text: "Players can choose which animal experience they want to explore, giving them control over their learning path.",
        image: null
    },
    {
        name: "Custom Player Artwork",
        text: "Players can scan their colouring sheet and see their own artwork appear inside the game.",
        image: null
    },
    {
        name: "Educational Dialogue",
        text: "Dialogue is designed to teach players about native wildlife through simple, age-appropriate storytelling.",
        image: null
    }
    ],
    technologies: {
      programming: ["Programming"],
      tools: ["Tools"],
      concepts: ["Concepts", "Concepts"]
    },
    whatILearned: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    outcome: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    media: [
      { image: null, caption: "Media 1" },
      { image: null, caption: "Media 2" },
      { image: null, caption: "Media 3" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "ai-car-racer": {
    title: "AI Car Racer",
    heroImage: null,
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    info: {
      genre: "Put genre here",
      platform: "put platform here",
      engine: "put engine here",
      devTime: "put development time here",
      teamSize: "put team size here",
      targetAudience: ["target audience", "target audience"]
    },
    myRole: {
      title: "Put role title here (e.g. Gameplay Programmer)",
      intro: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      responsibilities: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"]
    },
    technicalChallenges: [
      {
        name: "Name of challenge",
        problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    features: [
    {
        name: "Animal Selection System",
        text: "Players can choose which animal experience they want to explore, giving them control over their learning path.",
        image: null
    },
    {
        name: "Custom Player Artwork",
        text: "Players can scan their colouring sheet and see their own artwork appear inside the game.",
        image: null
    },
    {
        name: "Educational Dialogue",
        text: "Dialogue is designed to teach players about native wildlife through simple, age-appropriate storytelling.",
        image: null
    }
    ],
    technologies: {
      programming: ["Programming"],
      tools: ["Tools"],
      concepts: ["Concepts"]
    },
    whatILearned: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    outcome: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    media: [
      { image: null, caption: "Media 1" },
      { image: null, caption: "Media 2" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "deep-clean": {
    title: "Deep Clean",
    heroImage: null,
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    info: {
      genre: "Put genre here",
      platform: "put platform here",
      engine: "put engine here",
      devTime: "put development time here",
      teamSize: "put team size here",
      targetAudience: ["target audience", "target audience"]
    },
    myRole: {
      title: "Put role title here (e.g. Gameplay Programmer)",
      intro: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      responsibilities: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"]
    },
    technicalChallenges: [
      {
        name: "Name of challenge",
        problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    features: [
    {
        name: "Animal Selection System",
        text: "Players can choose which animal experience they want to explore, giving them control over their learning path.",
        image: null
    },
    {
        name: "Custom Player Artwork",
        text: "Players can scan their colouring sheet and see their own artwork appear inside the game.",
        image: null
    },
    {
        name: "Educational Dialogue",
        text: "Dialogue is designed to teach players about native wildlife through simple, age-appropriate storytelling.",
        image: null
    }
    ],
    technologies: {
      programming: ["Programming"],
      tools: ["Tools"],
      concepts: ["Concepts"]
    },
    whatILearned: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    outcome: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    media: [
      { image: null, caption: "Media 1" },
      { image: null, caption: "Media 2" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "procedural-generation": {
    title: "Procedural Generation",
    heroImage: null,
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    info: {
      genre: "Put genre here",
      platform: "put platform here",
      engine: "put engine here",
      devTime: "put development time here",
      teamSize: "put team size here",
      targetAudience: ["target audience", "target audience"]
    },
    myRole: {
      title: "Put role title here (e.g. Gameplay Programmer)",
      intro: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      responsibilities: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"]
    },
    technicalChallenges: [
      {
        name: "Name of challenge",
        problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    features: [
    {
        name: "Animal Selection System",
        text: "Players can choose which animal experience they want to explore, giving them control over their learning path.",
        image: null
    },
    {
        name: "Custom Player Artwork",
        text: "Players can scan their colouring sheet and see their own artwork appear inside the game.",
        image: null
    },
    {
        name: "Educational Dialogue",
        text: "Dialogue is designed to teach players about native wildlife through simple, age-appropriate storytelling.",
        image: null
    }
    ],
    technologies: {
      programming: ["Programming"],
      tools: ["Tools"],
      concepts: ["Concepts"]
    },
    whatILearned: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    outcome: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    media: [
      { image: null, caption: "Media 1" },
      { image: null, caption: "Media 2" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  },

  "coalesce": {
    title: "Coalesce",
    heroImage: null,
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    info: {
      genre: "Put genre here",
      platform: "put platform here",
      engine: "put engine here",
      devTime: "put development time here",
      teamSize: "put team size here",
      targetAudience: ["target audience", "target audience"]
    },
    myRole: {
      title: "Put role title here (e.g. Gameplay Programmer)",
      intro: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      responsibilities: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"]
    },
    technicalChallenges: [
      {
        name: "Name of challenge",
        problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    features: [
    {
        name: "Animal Selection System",
        text: "Players can choose which animal experience they want to explore, giving them control over their learning path.",
        image: null
    },
    {
        name: "Custom Player Artwork",
        text: "Players can scan their colouring sheet and see their own artwork appear inside the game.",
        image: null
    },
    {
        name: "Educational Dialogue",
        text: "Dialogue is designed to teach players about native wildlife through simple, age-appropriate storytelling.",
        image: null
    }
    ],
    technologies: {
      programming: ["Programming"],
      tools: ["Tools"],
      concepts: ["Concepts"]
    },
    whatILearned: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    outcome: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    media: [
      { image: null, caption: "Media 1" },
      { image: null, caption: "Media 2" }
    ],
    links: [
      { label: "Git Repo", url: "#", icon: "github" }
    ]
  }

};