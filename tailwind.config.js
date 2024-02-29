module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
      doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "", 
    logs: true,
    themeRoot: ":root",
  },
  plugins: [require("daisyui")],
}
