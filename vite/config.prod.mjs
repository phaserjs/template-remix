import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

// This is the subfolder where the app will be deployed, if you want to change it, you can do it here like this: const subfolder = '/my-subfolder-name/';
const subfolder = '/';

export default defineConfig({
    base: subfolder,
    plugins: [
        remix({
            ssr: false,
            basename: subfolder,
            
            buildEnd: () => {
                const line = "---------------------------------------------------------";
                const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
                process.stdout.write(`${line}\n${msg}\n${line}\n`);
                process.stdout.write(`✨ Done ✨\n`);
            }
        }),
        tsconfigPaths(),
    ],
    logLevel: 'warning',
    server: {
        port: 8080
    }
});
