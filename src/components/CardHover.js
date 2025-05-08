"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
      ✨ Code Meets Creativity: React in Action
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Multi-Page App with React Router",
    description:
      "A blog or e-commerce site using `react-router-dom` for seamless page navigation like Home, About, Products, and Contact.",
    // link: "https://your-router-app-link.com",
  },
  {
    title: "API Data Fetching with Axios",
    description:
      "A movie or news app that fetches live data using `axios` and displays it with loading states and error handling.",
    // link: "https://your-axios-app-link.com",
  },

  {
    title: "Theme Toggle App ",
    description:
      "An app with dark/light theme support built using `React Context API` to manage global state across components.",
    // link: "https://your-theme-app-link.com",
  },
  {
    title: "UI Showcase with Aceternity UI",
    description:
      "A clean portfolio or landing page using pre-built `Aceternity UI` components for faster and consistent design.",
    // link: "https://your-ui-showcase-link.com",
  },
  {
    title: "Auth System with Firebase",
    description:
      "A login/signup app using `Firebase Authentication` with email/password and Google login integration.",
    // link: "https://your-firebase-auth-link.com",
  },
  {
    title: "Next.js Auth App with NextAuth",
    description:
      "A full-stack app using `NextAuth` for authentication with providers like GitHub and Google, including protected routes.",
    // link: "https://your-nextauth-app-link.com",
  }
];

