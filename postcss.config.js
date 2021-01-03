const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const tailwindCSS = require('tailwindcss')
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
    plugins: [
        autoprefixer,
        postcssNested,
        postcssImport,
        tailwindCSS(),
        production && cssnano({
            preset: [
                'default',
                {discardComments: {removeAll: true}},
            ],
        }),
        production && purgecss
    ].filter(Boolean)
}