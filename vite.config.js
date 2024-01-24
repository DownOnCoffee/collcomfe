import { defineConfig } from 'vite';
const glob = require('glob');

// Function to get all HTML files as entry points
function getAllHtmlEntrypoints() {
  const pattern = './*.html'; // Adjust the path to where your HTML files are located
  return glob.sync(pattern).reduce((entries, file) => {
    const name = file.split('/').pop().replace(/\.html$/, '');
    entries[name] = file;
    return entries;
  }, {});
}

// Vite configuration
export default defineConfig({
  build: {
    rollupOptions: {
      input: getAllHtmlEntrypoints(),
    },
  },
});
