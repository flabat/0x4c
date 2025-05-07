# Docusaurus Demo Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator that makes it easy to build, deploy, and maintain open source project websites.

## Sample Content

This repository includes sample content to help you get started with Docusaurus:

- **Blog Posts**: Check out the [Getting Started with Docusaurus](./blog/2025-05-07-getting-started-with-docusaurus.md) blog post to learn about key features.
- **Documentation**: Explore the [Advanced Features](./docs/advanced-features.md) documentation to learn about custom React components, versioned documentation, internationalization, and more.
- **Custom Components**: The site includes a custom [`FeaturedContent`](./src/components/FeaturedContent/index.js) component that showcases content on the homepage.

## Project Structure

```
my-website
├── blog                      # Blog posts
│   ├── 2025-05-07-getting-started-with-docusaurus.md
│   ├── authors.yml           # Blog authors
│   └── tags.yml              # Blog tags
├── docs                      # Documentation pages
│   ├── intro.md              # Getting started page
│   └── advanced-features.md  # Advanced features page
├── src
│   ├── components            # Custom React components
│   │   └── FeaturedContent   # Featured content component
│   ├── css                   # Global CSS
│   └── pages                 # Custom pages
│       └── index.js          # Homepage
├── static                    # Static files (images, etc.)
├── docusaurus.config.ts      # Site configuration
├── sidebars.ts               # Sidebar configuration
└── package.json              # NPM dependencies
```

## Installation

```bash
$ yarn
```

## Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server, making your development process smooth and efficient.

## Build

```bash
$ yarn build
```

This command generates static content into the [`build`](./build) directory and can be served using any static content hosting service.

## Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using [GitHub Pages](https://pages.github.com/) for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
