module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      // Note: This is @notapatch and not the docs
      //       I think what it is trying to say is that if you define
      //       a custom font here you are also removing the default
      //       font families sans, serif and mono.
      //
      display: ["Noto Sans Thai", "sans-serif"],
      body: ['"Open Sans"', "serif"],
    },
    extend: {
      colors: {
        primary: "#067C3D",
        secondary1: "#3C9C54",
        secondary2: "#569242",
        secondary3: "#D8F0C8",
        yellow: "#F7E630",
        "yellow-grad": "#FEFFDC",
        red: "#A92020",
        body: "#777070",
      },
    },
  },
  plugins: [],
};
