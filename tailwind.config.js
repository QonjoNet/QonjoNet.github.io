// tailwind.config.js
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        },
        colors: {
          'primary': '#007bff', // Or your chosen blue
          'secondary': '#6c757d',
          'accent': '#28a745',
          'light-gray': '#f8f9fa',
          'dark-gray': '#343a40',
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-out forwards', // Define custom animations
          'fade-up': 'fadeUp 0.7s ease-out forwards',
          'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
          'slide-in-right': 'slideInRight 0.7s ease-out forwards',
          'zoom-in': 'zoomIn 0.5s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(50px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          slideInLeft: {
            '0%': { opacity: 0, transform: 'translateX(-50px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: 0, transform: 'translateX(50px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          zoomIn: {
            '0%': { opacity: 0, transform: 'scale(0.8)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
          },
        },
         animationDelay: { // Tailwind doesn't have built-in delay utilities, so we extend
                  200: '200ms',
                  400: '400ms',
                  500: '500ms',
                  1000: '1000ms',
              },
      },
    },
     plugins: [
          function ({ addUtilities, theme, variants }) {
              const animationDelayVariants = variants('animationDelay', ['responsive', 'hover', 'focus']);
              const animationDelayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
                  return {
                      [`.animate-delay-${key}`]: {
                          'animation-delay': value,
                      },
                  };
              });
  
              addUtilities(animationDelayUtilities, animationDelayVariants);
          },
      ],
  }