"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Loading theme"
        className="h-10 w-10 rounded-xl border border-border"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl border border-border
        bg-card text-foreground
        transition-all duration-300
        hover:bg-accent hover:text-accent-foreground
        hover:scale-105 active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-violet-500
      "
    >
      {isDark ? (
        <Sun size={20} className="text-amber-500" />
      ) : (
        <Moon size={20} className="text-violet-600" />
      )}
    </button>
  );
}