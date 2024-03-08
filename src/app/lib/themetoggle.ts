// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export function themeLoad() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Whenever the user explicitly chooses light mode
export function useLightMode() {
  localStorage.theme = "light";
  themeLoad();
}

export function useDarkMode() {
  localStorage.theme = "dark";
  themeLoad();
}

// Whenever the user explicitly chooses to respect the OS preference
export function useSystemDefault() {
  localStorage.removeItem("theme");
  themeLoad();
}
