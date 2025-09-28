import React from "react";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  Gemini,
  homeSmile,
  instagram,
  java,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  reactLogo,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  tailwindcss,
  telegram,
  twitter,
  vite,
  yourlogo,
} from "../assets";
import { HiOutlineDocumentText, HiOutlineUpload, HiOutlineSparkles } from "react-icons/hi";
import g1 from "../assets/gallery/g-1.jpg";
import g2 from "../assets/gallery/g-2.jpg";
import g3 from "../assets/gallery/g-3.jpg";
import g4 from "../assets/gallery/g-4.jpg";
import g5 from "../assets/gallery/g-5.jpg";
import g6 from "../assets/gallery/g-6.jpg";
import g7 from "../assets/gallery/g-7.jpg";
import g8 from "../assets/gallery/g-8.jpg";
import g9 from "../assets/gallery/g-9.jpg";
import g10 from "../assets/gallery/g-10.jpg";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: "2",
    title: "Our Team",
    url: "#team",
  },
  {
    id: "3",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [reactLogo, java, Gemini, tailwindcss, vite];

export const brainwaveServices = [
  "Structure & Summarize",
  "Visualize Key Concepts",
  "Enhance Readability",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "For everyday learning and personal study.",
    price: "0",
    features: [
      "up to 15 high-quality infographic generations from your notes every month.",
      "Easily upload PDF documents from lectures or paste raw text from online articles to get started.",
      "Shareable Links for all your guides",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "4.99",
    features: [
      "Unlimited AI generations",
      "Access to AI Quizzes & Text-to-Audio",
      "Priority support to resolve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Support Us",
    description: "Love NoteFlow? Help us grow.",
    price: null,
    features: [
      "Make a one-time contribution by buying us a chai, or become a monthly member.",
      "Unlock Unlimited Access (Members)",
      "Directly Fund Development",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Versatile Inputs",
    text: " Upload PDFs, paste text, or just enter a topic. Our AI handles any format",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Instant Infographic Generation",
    text: " Let our AI instantly build structured, visual infographics from your notes.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Visual Learning",
    text: " We turn text into clear summaries, key points, and infographics for better recall.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Easy Sharing",
    text: "Get a unique link for any guide. Share it instantly with anyone, anywhere.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Listen & Learn",
    text: "Turn any study guide into an audiobook for learning on the go.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Real-Time Collaboration",
    text: "Invite friends to view and edit your study guides together in real-time.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const dashboardUserData = {
  name: "Gaurav",
  initials: "G",
};

export const dashboardStats = {
  infographicsCreated: 12,
  filesUploaded: 28,
  mostActiveDay: "Wednesday",
  topTopic: "AI in Education",
};

export const dashboardRecentActivity = [
  { id: 1, text: "Created an infographic on 'AI in Education'", time: "2 days ago", icon: HiOutlineSparkles },
  { id: 2, text: "Viewed a summary of 'Cloud Computing Basics'", time: "yesterday", icon: HiOutlineDocumentText },
  { id: 3, text: "Uploaded 'Machine_Learning_Notes.pdf'", time: "3 days ago", icon: HiOutlineUpload },
];
export const dashboardRecommendations = [
    "Since you uploaded about Cloud Computing, you might like 'The Future of Serverless'.",
    "Explore 'Advanced Python Techniques' to complement your programming notes."
];

export const galleryImages = [
  {
    src: g1,
    alt: 'A holographic AI brain with glowing neural networks'
  },
  {
    src: g2,
    alt: 'A futuristic flowchart explaining blockchain technology with glassmorphic blocks'
  },
  {
    src: g3,
    alt: 'A stunning visualization of a bioluminescent DNA double helix'
  },
  {
    src: g4,
    alt: 'A 3D project management dashboard with holographic Gantt charts'
  },
  {
    src: g5,
    alt: 'An elegant infographic of the solar system with luminous orbital rings'
  },
  {
    src: g6,
    alt: 'A dynamic illustration of cloud computing architecture with pulsating light'
  },
  {
    src: g7,
    alt: 'A sophisticated 3D data visualization of financial market charts'
  },
  {
    src: g8,
    alt: 'An abstract infographic visualizing the creative process as a stream of liquid light'
  },
  {
    src: g9,
    alt: 'A futuristic cybersecurity shield deflecting digital threats'
  },
  {
    src: g10,
    alt: 'A stunning data visualization of the Earth with glowing data connections'
  }
];