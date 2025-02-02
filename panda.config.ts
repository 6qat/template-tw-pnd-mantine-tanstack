import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  strictTokens: true,
  strictPropertyValues: true,

  layers: {
    reset: "pnd_reset",
    base: "pnd_base",
    tokens: "pnd_tokens",
    recipes: "pnd_recipes",
    utilities: "pnd_utilities",
  },
  prefix: "pnd",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles: {
        heading1: {
          description: {},
          value: {},
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
