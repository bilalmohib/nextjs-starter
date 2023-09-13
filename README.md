# Azure Static Web App Next.js Starter (Static Sites) 💻🚀

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Next.js](https://nextjs.org/) apps in minutes. Use this repository with the [Azure Static Web Apps Next.js tutorial](https://learn.microsoft.com/azure/static-web-apps/deploy-nextjs-static-export?tabs=github-actions) to build and customize a new static site.

## Getting Started 🛠️

### Prerequisites 📋

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) 🟢
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) ⚙️

### Next.js Version and Route Configuration 📦

This project uses the latest version of Next.js, which is currently **Stable release 13.4.12** as of **July 21, 2023**.

To enhance routing, this project uses the `app` directory for Next.js routes, allowing for a more organized and maintainable codebase.

### Running Locally 🏃‍♂️

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/staticwebdev/nextjs-starter.git
   ```

2. Navigate to the project directory:

   ```bash
    cd nextjs-starter
   ```

3. Install dependencies:
4. ```bash
   npm install
   ```
5. Run the project:
6. ```bash
   npm run dev
   ```
7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
8. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
9. To view the static site, run `npm run export` and then `npm run serve`.
10. For a richer local development experience, refer to [Set up local development for Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/local-development).

### Application configuration

The `next.config.js` file is set up to enforce trailing slashes on all page.

```javascript
module.exports = {
  trailingSlash: true,
};
```

### Build Scripts 🚀

The npm `build` script runs commands to not only build the application but also generate all the static files to the `out` folder.

```json
"scripts": {
  "dev": "next dev",
  "build": "next build && next export",
}
```

> Note: If you use the [Azure Static Web Apps CLI](https://learn.microsoft.com/en-us/azure/static-web-apps/local-development), copy the staticwebapp.config.json file to the out folder, and start the CLI from the out folder.
