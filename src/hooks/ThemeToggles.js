"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun ,Moon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex px-3 py-2 items-center rounded bg-background  text-foreground cursor-pointer font-bold"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18}/>}
    </button>
  )
}