import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function Header({ title }: { title: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-8">
      <h1 className="font-serif text-2xl text-foreground">{title}</h1>
      <button
        onClick={toggle}
        role="switch"
        aria-checked={dark}
        aria-label="Toggle dark mode"
        className="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Sun className="h-4 w-4" />
        <span className={`relative h-6 w-11 rounded-full border border-border transition-colors ${dark ? "bg-primary" : "bg-muted"}`}>
          <span className={`absolute top-0.5 h-4.5 w-4.5 rounded-full bg-card transition-all ${dark ? "left-[22px]" : "left-0.5"}`} style={{ width: 18, height: 18 }} />
        </span>
        <Moon className="h-4 w-4" />
      </button>
    </header>
  );
}
