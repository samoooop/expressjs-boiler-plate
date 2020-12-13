# Expressjs boiler plate
React boilder plate using typescript and parcel-bundler.
## Usage 
1. Run `npm install` to install dependencies.
2. Run in the server watch mode with `npm run dev-watch` (auto restart on file changes).
## Production
1. Run `npm install` to install dependencies.
2. Run `npm run build` to compile scripts.
3. Run `npm run production` to start the server in production mode. 

**Note** the production mode fork process equal to number of your cpu thread.
## Enable linting
ESLint configuration is included and extended `eslint-config-airbnb-typescript-prettier`. To enable linting in `vscode` please install **ESLint** and **Prettier** plugins in extenstion tab. After installation ESLint will ask for permission to run from `node_modules`. Press **allow** to finish the setup.
## Debugging (VSCode only)
1. `Ctrl + Shift + P` then switch `Debug: toggle auto attach` to on.
2. Start server by `npm run dev` or `npm run dev-watch` (debugging is not enable in production mode).
3. Add some breakpoints.
4. Debugger will auto attached to node process.
5. Enjoy debugging!