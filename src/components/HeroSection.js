"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Link from "next/link";
import { useTheme } from "next-themes";

export function HeroHighlightDemo() {
   const {theme} = useTheme()
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-foreground bg-background max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
         I&apos;m {" "} <Highlight className="text-black dark:text-white">
         React.js developer
        </Highlight>  who builds fast, scalable, and interactive web applications. I love crafting clean UIs and writing efficient frontend code.

       

        
        
      </motion.h1>
     <div className="flex justify-center text-foreground bg-background">
     <Link
      href="/projects"
      // className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
      className=" px-4 mb-4 py-2 font-bold rounded-full flex items-center justify-between max-w-fit mx-auto mt-6 shadow-md border border-gray-700 "
    >
      View My Projects
    </Link>
     </div>
    </HeroHighlight>
  );
}
