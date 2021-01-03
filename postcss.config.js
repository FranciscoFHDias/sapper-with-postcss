const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const tailwindCSS = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

const mode = process.env.NODE_ENV;
const production = mode === "production";

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
    postcssImport,
    tailwindCSS(),
    production &&
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
    production && purgecss,
  ].filter(Boolean),
};
