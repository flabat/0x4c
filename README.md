# Docusaurus Demo Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Sample Content

This repository includes sample content to help you get started with Docusaurus:

- **Blog Posts**: Check out the [Getting Started with Docusaurus](/blog/getting-started-with-docusaurus) blog post to learn about key features.
- **Documentation**: Explore the [Advanced Features](/docs/advanced-features) documentation to learn about custom React components, versioned documentation, internationalization, and more.
- **Custom Components**: The site includes a custom `FeaturedContent` component that showcases content on the homepage.

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server, making your development process smooth and efficient.

### Build

```bash
$ yarn build
```

This command generates static content into the [`build`](./build) directory and can be served using any static content hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using [GitHub Pages](https://pages.github.com/) for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
