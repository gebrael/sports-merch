// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        openSideBar: {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        SideBarItems: {
          "0% ": { transform: " translateX(-100px)" },
          "100%": { transform: " translateX(5px)" },
        },
        SideBarlinks: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        openSideBar: "openSideBar 0.3s ease-in-out",
        SideBarItems: "SideBarItems 0.7s ease-in-out",
        SideBarlinks: "SideBarlinks 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
