module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: "all",
    content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  theme: {
    container: {},
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
