module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{astro,js,jsx}",
  ],
  content: [
    "./src/**/*.{astro,js,jsx}",
    "../../libs/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
