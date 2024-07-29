import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist', // output directory
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'src/index.html',
                login: 'src/pages/login.html',
                tnc: 'src/pages/tnc.html', 
                privacyPolicy: 'src/pages/privacy.html', 
            }
        }
    },
    // other configurations...
});
