# 💼 JobTrack

**JobTrack** is a modern web application designed to help users track their job applications efficiently. Featuring user authentication, personalized dashboards, job filtering, and application status tracking, JobTrack simplifies your job search journey.

🔗 **Live Demo:** [https://job-track-53365.web.app/](https://job-track-53365.web.app/)  
📂 **GitHub Repo:** [https://github.com/Black-Catt/JobTrack](https://github.com/Black-Catt/JobTrack](https://github.com/mdmhrz/job-track?tab=readme-ov-file))

---


## 🚀 Features

- ✅ User Authentication (Login & Registration) with Firebase  
- 🔐 Secure login via Email/Password and Google OAuth  
- 📄 Company details and job listings  
- 🔍 Filter and sort jobs by type, status, and other criteria  
- 🎨 Smooth UI animations with Framer Motion  
- ⚡ Responsive design powered by Tailwind CSS  
- 🌐 SEO-friendly via React Helmet Async  
- 🔔 Real-time feedback with React Toastify notifications  

---

## 🛠️ Tech Stack

| Technology                                                              | Description                      |
|-------------------------------------------------------------------------|--------------------------------|
| ![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)               | Frontend UI Library             |
| ![Firebase](https://img.shields.io/badge/Firebase-11.9.1-yellow?logo=firebase)     | Authentication Backend Service |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.18.1-pink)          | UI Animation Framework          |
| ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-teal?logo=tailwindcss)    | Utility-first CSS Framework     |
| ![React Router](https://img.shields.io/badge/React_Router-6.12.1-blue?logo=reactrouter) | Client-side Routing             |
| ![React Toastify](https://img.shields.io/badge/React_Toastify-11.0.5-green)         | Toast Notifications            |
| ![React Helmet Async](https://img.shields.io/badge/React_Helmet_Async-2.0.5-lightgrey)  | SEO Head Management            |
| ![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-purple)              | Icon Library                   |
| ![React Intersection Observer](https://img.shields.io/badge/React_Intersection_Observer-9.16.0-orange) | Scroll-triggered Animations    |
| ![React Scroll](https://img.shields.io/badge/React_Scroll-1.9.3-red)                | Smooth Scrolling               |
| ![React CountUp](https://img.shields.io/badge/React_CountUp-6.5.3-cyan)             | Animated Number Counters       |

---

## 📁 Folder Structure

```bash
job-track/
├── client/                     # Frontend React application
│   ├── public/                 # Static files
│   └── src/
│       ├── assets/             # Images, icons, styles
│       ├── components/         # Reusable UI components (Navbar, Forms, Cards, etc.)
│       ├── hooks/              # Custom React hooks (optional)
│       ├── pages/              # Route-based page components (Login, Register, Dashboard, etc.)
│       ├── provider/           # React Context Providers (AuthProvider, etc.)
│       ├── routes/             # Route definitions & protected routes
│       ├── firebase.config.js  # Firebase setup and initialization
│       ├── App.jsx             # Main app component and routing
│       └── index.jsx           # ReactDOM render entry point
├── .env                        # Environment variables (Firebase config, etc.)
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
