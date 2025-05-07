---
slug: getting-started-with-docusaurus
title: Getting Started with Docusaurus
authors: [flabat]
tags: [docusaurus, tutorial, beginners]
---

# Getting Started with Docusaurus

Docusaurus is a powerful static site generator that makes it easy to build, deploy, and maintain open-source project websites. In this post, we'll explore some of the key features that make Docusaurus a great choice for your next documentation project.

<!-- truncate -->

## Why Choose Docusaurus?

Docusaurus offers several advantages that make it stand out from other static site generators:

1. **React-based**: Built on React, allowing for dynamic and interactive components
2. **Markdown Support**: Write content in Markdown for easy formatting
3. **Versioned Documentation**: Maintain multiple versions of your documentation
4. **Internationalization**: Support for multiple languages
5. **Search Integration**: Built-in search functionality
6. **Dark Mode**: Automatic dark mode support

## Getting Started

Setting up a new Docusaurus site is straightforward. You can create a new site using the following command:

```bash
npx create-docusaurus@latest my-website classic
```

This command creates a new Docusaurus site with the classic template, which includes:

- A homepage
- A blog
- Documentation pages

## Customizing Your Site

Docusaurus is highly customizable. You can modify the site configuration in the `docusaurus.config.js` file:

```javascript
module.exports = {
  title: 'My Site',
  tagline: 'A website for my project',
  url: 'https://mywebsite.com',
  baseUrl: '/',
  // ... other configuration options
};
```

## Adding Content

### Documentation

Documentation pages are written in Markdown and stored in the `docs` directory. Each Markdown file becomes a page in your documentation.

### Blog Posts

Blog posts are also written in Markdown and stored in the `blog` directory. The filename format `YYYY-MM-DD-title.md` is used to determine the publication date.

## Conclusion

Docusaurus makes it easy to create beautiful documentation websites with minimal effort. Its features and flexibility make it a great choice for projects of all sizes.

Ready to get started? Check out the [official Docusaurus documentation](https://docusaurus.io/docs) for more detailed information.