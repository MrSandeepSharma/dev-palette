const resources = [
    {
        title: "A Todo List",
        description: "Learn to create an accessible todo list component.",
        url: "https://inclusive-components.design/a-todo-list/",
        tags: ["Frontend", "Accessibility", "Components"]
    },
    {
        title: "W3C",
        description: "Explore accessibility semantics for common design patterns.",
        url: "https://www.w3.org/WAI/ARIA/apg/",
        tags: ["Frontend", "Accessibility", "Components"]
    },
    {
        title: "Caninclude",
        description: "Easily check parent-child relationships in elements.",
        url: "https://caninclude.glitch.me/",
        tags: ["Frontend", "Accessibility", "Tools"]
    },
    {
        title: "Modern CSS Reset",
        description: "Use a default CSS reset for consistent styling.",
        url: "https://andy-bell.co.uk/a-modern-css-reset/",
        tags: ["Frontend", "CSS", "Reset"]
    },
    {
        title: "Cubic Bezier",
        description: "Visualize and create CSS animations with bezier curves.",
        url: "https://cubic-bezier.com/#.17,.67,.83,.67",
        tags: ["Frontend", "CSS", "Animation"]
    },
    {
        title: "Coolors",
        description: "Generate color gradients and check contrast.",
        url: "https://coolors.co/",
        tags: ["Frontend", "CSS", "Color"]
    },
    {
        title: "Color Contrast Checker",
        description: "Ensure color accessibility with contrast checking.",
        url: "https://userway.org/contrast/?fg=ffffff&bg=a2d2ff",
        tags: ["Frontend", "CSS", "Color"]
    },
    {
        title: "Color Palettes Generater",
        description: "Effortlessly generate color palettes.",
        url: "https://mycolor.space/?hex=%23AF8763&sub=1",
        tags: ["Frontend", "CSS", "Color"]
    },
    {
        title: "Web Manifest File",
        description: "Create a web manifest file easily.",
        url: "https://developer.mozilla.org/en-US/docs/Web/Manifest",
        tags: ["Frontend", "Documentation"]
    },
    {
        title: "Favicon Generator",
        description: "Quickly generate favicon images.",
        url: "https://favicon.io/",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Font Awesome",
        description: "Find icons for your projects.",
        url: "https://fontawesome.com/icons/calendar-days?f=classic&s=regular",
        tags: ["Frontend", "Icons"]
    },
    {
        title: "Uuid",
        description: "Generate unique ids easily.",
        url: "https://github.com/uuidjs/uuid#cdn-builds",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Github Profile Badges",
        description: "Find perfect badges for your readme.",
        url: "https://home.aveek.io/GitHub-Profile-Badges/",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Iconpacks",
        description: "Find and download icons easily.",
        url: "https://www.iconpacks.net/",
        tags: ["Frontend", "Icons"]
    },
    {
        title: "React Icons",
        description: "Discover free React icons.",
        url: "https://react-icons.github.io/react-icons/",
        tags: ["Frontend", "React", "Icons"]
    },
    {
        title: "Uigradients",
        description: "Create custom color gradients easily.",
        url: "https://uigradients.com/",
        tags: ["Frontend", "CSS", "Color"]
    },
    {
        title: "Asynchronous JavaScript",
        description: "Quick guide on asynchronous JavaScript.",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
        tags: ["Frontend", "JavaScript", "Documentation"]
    },
    {
        title: "Mirage JS",
        description: "Backend tool for frontend developers.",
        url: "https://miragejs.com/",
        tags: ["Frontend", "JavaScript", "Backend"]
    },
    {
        title: "Form Spree",
        description: "Handle form submission easily.",
        url: "https://formspree.io/",
        tags: ["Frontend", "JavaScript"]
    },
    {
        title: "What The Font",
        description: "Find custom fonts easily.",
        url: "https://www.myfonts.com/pages/whatthefont",
        tags: ["Frontend", "CSS", "Fonts"]
    },
    {
        title: "Simulate Mobile Devices",
        description: "Learn to simulate mobile devices on desktop.",
        url: "https://developer.chrome.com/docs/devtools/device-mode/",
        tags: ["Frontend", "CSS", "Tools"]
    },
    {
        title: "Responsive Design Mode",
        description: "Quick guide on using Responsive Design Mode.",
        url: "https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/",
        tags: ["Frontend", "CSS", "Documentation"]
    },
    {
        title: "Media Queries",
        description: "Detailed guide on using Media queries.",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
        tags: ["Frontend", "CSS", "Documentation"]
    },
    {
        title: "Avatartion",
        description: "Create custom avatar illustrations.",
        url: "https://www.avatartion.com/",
        tags: ["Frontend", "CSS", "Illustration"]
    },
    {
        title: "Notioly",
        description: "Find perfect illustrations for your project.",
        url: "https://notioly.com/",
        tags: ["Frontend", "CSS", "Illustration"]
    },
    {
        title: "Open Peeps",
        description: "Create custom illustrations easily.",
        url: "https://www.openpeeps.com/",
        tags: ["Frontend", "CSS", "Illustration"]
    },
    {
        title: "Gif Finder",
        description: "Find useful gif videos easily.",
        url: "https://giphy.com/",
        tags: ["Frontend", "CSS", "Illustration"]
    },
    {
        title: "Rest API Tutorial",
        description: "Learn about REST APIs easily.",
        url: "https://restfulapi.net/",
        tags: ["Frontend", "APIs", "Documentation"]
    },
    {
        title: "Zapier",
        description: "Introduction to APIs.",
        url: "https://zapier.com/resources/guides/apis",
        tags: ["Frontend", "APIs", "Documentation"]
    },
    {
        title: "The Color API",
        description: "Free-to-use color API for your projects.",
        url: "https://www.thecolorapi.com/docs#schemes",
        tags: ["Frontend", "APIs"]
    },
    {
        title: "OMDb API",
        description: "Free-to-use API for your projects.",
        url: "https://www.omdbapi.com/",
        tags: ["Frontend", "APIs"]
    },
    {
        title: "Public APIs",
        description: "Collection of free public APIs.",
        url: "https://github.com/public-apis/public-apis",
        tags: ["Frontend", "APIs"]
    },
    {
        title: "Rapid API",
        description: "Collection of free public APIs.",
        url: "https://rapidapi.com/hub",
        tags: ["Frontend", "APIs"]
    },
    {
        title: "30 Seconds of Interviews",
        description: "Quick guide to practice interview questions.",
        url: "https://30secondsofinterviews.org/",
        tags: ["Frontend", "Interview"]
    },
    {
        title: "Code Wars",
        description: "Practice problem-solving easily.",
        url: "https://www.codewars.com/",
        tags: ["Frontend", "Interview"]
    },
    {
        title: "Decorate Github Readme",
        description: "Guide to create a beautiful Github profile readme.",
        url: "https://sarah-hart-landolt.medium.com/6-easy-steps-to-create-a-beautiful-github-profile-readme-edc7840b2c7",
        tags: ["Frontend", "Documentation"]
    },
    {
        title: "File Converter",
        description: "Convert all files easily.",
        url: "https://cloudconvert.com/",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Da Font",
        description: "Find custom fonts easily.",
        url: "https://www.dafont.com/",
        tags: ["Frontend", "CSS", "Fonts"]
    },
    {
        title: "Stark",
        description: "Enhance web accessibility with Stark.",
        url: "https://www.getstark.co/",
        tags: ["Frontend", "Figma", "Accessibility"]
    },
    {
        title: "Px to Rem Converter",
        description: "Convert px to rem easily.",
        url: "https://nekocalc.com/px-to-rem-converter",
        tags: ["Frontend", "CSS", "Tools"]
    },
    {
        title: "React-toastify",
        description: "Toast notification library.",
        url: "https://fkhadra.github.io/react-toastify/introduction/",
        tags: ["Frontend", "React", "Components"]
    },
    {
        title: "Fake Store API",
        description: "Free-to-use API for your project.",
        url: "https://fakestoreapi.com/docs",
        tags: ["Frontend", "APIs"]
    },
    {
        title: "Blob Maker",
        description: "Create blob images easily.",
        url: "https://www.blobmaker.app/",
        tags: ["Frontend", "Tools", "Illustration"]
    },
    {
        title: "Wave Generator",
        description: "Create wave images easily.",
        url: "https://getwaves.io/",
        tags: ["Frontend", "Tools", "Illustration"]
    },
    {
        title: "Color Converter",
        description: "Convert hex color to Tailwind CSS classes.",
        url: "https://divmagic.com/tools/color-converter",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Lapa",
        description: "Best website examples for inspiration.",
        url: "https://www.lapa.ninja/",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Refero",
        description: "Explore real-world designs from the best products.",
        url: "https://refero.design/",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Page collective",
        description: "Collection of websites and web apps.",
        url: "https://pagecollective.com/",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Dark mode design",
        description: "Collection of websites and web apps.",
        url: "https://www.darkmodedesign.com/?2bf851fe_page=10",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Image resizer",
        description: "Resize images easily.",
        url: "https://imageresizer.com/",
        tags: ["Frontend", "Tools"]
    },
    {
        title: "Pinterest",
        description: "Another place to find inspiration.",
        url: "https://in.pinterest.com/",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Dribbble",
        description: "Another place to find inspiration.",
        url: "https://dribbble.com/",
        tags: ["Frontend", "Inspiration"]
    },
    {
        title: "Unsplash",
        description: "Find images easily.",
        url: "https://unsplash.com/",
        tags: ["Frontend", "CSS", "Images"]
    },
    {
        title: "Pexels",
        description: "Another place to find images.",
        url: "https://www.pexels.com/",
        tags: ["Frontend", "CSS", "Images"]
    },
    {
        title: "Google Fonts",
        description: "Another place to find fonts.",
        url: "https://fonts.google.com/",
        tags: ["Frontend", "CSS", "Fonts"]
    },
    {
        title: "Tiny png",
        description: "Resize images easily.",
        url: "https://tinypng.com/",
        tags: ["Frontend", "CSS", "Tools"]
    }
];

export default resources;
