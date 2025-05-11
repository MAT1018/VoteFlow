/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"blue",
        secondary: "red",
      },

      backgroundImage: {
        'bg-auth-bg-img': "url('.src/assets/images/auth-img.png')",
        'profile-bg--img': "url('.src/assets/images/profile-bg.png')",
      }


    },
  },
  plugins: [],
} 