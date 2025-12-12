
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#475569",
        accent: "#2563EB",
        muted: "#F8FAFC"
      }
    }
  },
  plugins: [],
};
export default config;
