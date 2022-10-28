const colors = require("tailwindcss/colors");
const {
  toRGB,
  withOpacityValue,
} = require("@left4code/tw-starter/dist/js/tailwind-config-helper");

module.exports = {
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js",
    // ".//*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rgb: toRGB({
          inherit: colors.inherit,
          current: colors.current,
          transparent: colors.transparent,
          black: colors.black,
          white: colors.white,
          slate: colors.slate,
          gray: colors.gray,
          zinc: colors.zinc,
          neutral: colors.neutral,
          stone: colors.stone,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          sky: colors.sky,
          stone: colors.stone,
          neutral: colors.neutral,
          gray: colors.gray,
          slate: colors.slate,
        }),
        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),
        success: withOpacityValue("--color-success"),
        info: withOpacityValue("--color-info"),
        warning: withOpacityValue("--color-warning"),
        pending: withOpacityValue("--color-pending"),
        danger: withOpacityValue("--color-danger"),
        light: withOpacityValue("--color-light"),
        dark: withOpacityValue("--color-dark"),
        slate: {
          50: withOpacityValue("--color-slate-50"),
          100: withOpacityValue("--color-slate-100"),
          200: withOpacityValue("--color-slate-200"),
          300: withOpacityValue("--color-slate-300"),
          400: withOpacityValue("--color-slate-400"),
          500: withOpacityValue("--color-slate-500"),
          600: withOpacityValue("--color-slate-600"),
          700: withOpacityValue("--color-slate-700"),
          800: withOpacityValue("--color-slate-800"),
          900: withOpacityValue("--color-slate-900"),
        },
        darkmode: {
          50: withOpacityValue("--color-darkmode-50"),
          100: withOpacityValue("--color-darkmode-100"),
          200: withOpacityValue("--color-darkmode-200"),
          300: withOpacityValue("--color-darkmode-300"),
          400: withOpacityValue("--color-darkmode-400"),
          500: withOpacityValue("--color-darkmode-500"),
          600: withOpacityValue("--color-darkmode-600"),
          700: withOpacityValue("--color-darkmode-700"),
          800: withOpacityValue("--color-darkmode-800"),
          900: withOpacityValue("--color-darkmode-900"),
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      container: {
        center: true,
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
      },
      //내가 원하는 animation-설정 지정
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "wiggle-once": "wiggle 0.4s ease-in-out 1",
        "blink-green": "blink-green 0.4s ease-in-out 1",
        "blink-red": "blink-red 0.4s ease-in-out 1",
        "blink-text-green": "blink-text-green 0.4s ease-in-out 1",
        "blink-text-red": "blink-text-red 0.4s ease-in-out 1",
        "blink-ba-green": "blink-ba-green 0.6s ease-in-out 1",
        "blink-ba-red": "blink-ba-red 0.6s ease-in-out 1",
      },

      // 내가 원하는 animation-keyframes 지정
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "blink-green": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#15803d", transform: "rotate(3deg)" },
        },
        "blink-red": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#B22222", transform: "rotate(3deg)" },
        },

        "blink-bar-green": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#15803d" },
        },
        "blink-bar-red": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#b91c1c" },
        },

        "blink-text-green": {
          "0%, 100%": { color: "white", transform: "scale(1)" },
          "50%": { color: "#15803d", transform: "scale(1.2)" },
        },
        "blink-text-red": {
          "0%, 100%": { color: "white", transform: "scale(1)" },
          "50%": { color: "#B22222", transform: "scale(1.2)" },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
