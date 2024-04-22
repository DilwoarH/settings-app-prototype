const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-pt-aqua",
    "bg-pt-blue",
    "bg-pt-red",
    "bg-pt-yellow",
    "bg-pt-green",
    "bg-pt-green-light",
    "bg-pt-green-dark",
    "bg-pt-limeGreen",
    "bg-pt-gray",
    "bg-pt-gray-dark",
    "bg-pt-gray-dark2",
    "bg-pt-orange",
    "bg-pt-purple",
    "bg-pt-pink",

    "text-pt-aqua",
    "text-pt-blue",
    "text-pt-red",
    "text-pt-yellow",
    "text-pt-green",
    "text-pt-green-light",
    "text-pt-green-dark",
    "text-pt-limeGreen",
    "text-pt-gray",
    "text-pt-gray-dark",
    "text-pt-gray-dark2",
    "text-pt-orange",
    "text-pt-purple",
    "text-pt-pink",

    "sm:grid-cols-2",
    "sm:grid-cols-3",
    "sm:grid-cols-4",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "340px",
        // => @media (min-width: 640px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        pt: {
          whitesmoke: {
            DEFAULT: "#f5f5f5",
          },
          primary: {
            DEFAULT: "#28866F",
          },
          primarydark: {
            DEFAULT: "#1D6251",
          },
          aqua: {
            DEFAULT: "#17a2b8",
          },
          blue: {
            DEFAULT: "#1C84C6",
            dark: "#111827",
          },
          red: {
            DEFAULT: "#ed5565",
          },
          yellow: {
            DEFAULT: "#fdcb6e",
          },
          orange: {
            DEFAULT: "#fd7e14",
          },
          green: {
            DEFAULT: "#19b394",
            dark: "#15866f",
            light: "#1ab394",
          },
          limeGreen: {
            DEFAULT: "#5ab328",
          },
          grey: {
            DEFAULT: "#f4f6f9",
            dark: "#d6d8db",
            dark2: "#2F4050",
            dark3: "#6B7280",
          },
          pink: {
            DEFAULT: "#db2777",
          },
          purple: {
            DEFAULT: "#4f46e5",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
