import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: 'src/dist', // output directory
        rollupOptions: {
            input: {
                main: 'src/index.html',
                login: 'src/pages/login.html', // add your additional HTML files here
            }
        }
    },
    // other configurations...
});
