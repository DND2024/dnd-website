"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return <FiMoon onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <FiSun onClick={() => setTheme("dark")} />;
  }
}

export default ThemeSwitcher;
