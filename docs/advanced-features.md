---
sidebar_position: 4
---

# Advanced Features

Discover the advanced features of Docusaurus that can help you create a more powerful and customized documentation site.

## Custom React Components

Docusaurus allows you to use custom React components in your Markdown files using MDX. This enables you to create interactive and dynamic content within your documentation.

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```js
    function helloWorld() {
      console.log('Hello, world!');
    }
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```py
    def hello_world():
      print("Hello, world!")
    ```
  </TabItem>
  <TabItem value="java" label="Java">
    ```java
    class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, world!");
      }
    }
    ```
  </TabItem>
</Tabs>
```

## Versioned Documentation

Docusaurus makes it easy to maintain multiple versions of your documentation. This is particularly useful when you have breaking changes between versions of your software.

To create a versioned copy of your documentation:

```bash
npm run docusaurus docs:version 1.0.0
```

This command will create a snapshot of your current docs and make them available under the 1.0.0 version.

## Internationalization (i18n)

Docusaurus has built-in support for translating your content into multiple languages.

To add a new locale:

1. Configure the supported locales in `docusaurus.config.js`:

```js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
  },
};
```

2. Translate your content by creating locale-specific directories:

```
website
├── i18n
│   ├── fr
│   │   ├── docusaurus-plugin-content-docs
│   │   └── docusaurus-plugin-content-blog
│   └── es
│       ├── docusaurus-plugin-content-docs
│       └── docusaurus-plugin-content-blog
```

## Search Integration

Docusaurus comes with built-in support for [Algolia DocSearch](https://docsearch.algolia.com/), which provides a powerful search experience for your documentation.

To enable search, add the following to your `docusaurus.config.js`:

```js
module.exports = {
  // ...
  themeConfig: {
    // ...
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },
  },
};
```

## Deployment

Docusaurus can be deployed to various platforms, including:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

For GitHub Pages, you can use the built-in deployment command:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

## Conclusion

These advanced features make Docusaurus a powerful tool for creating comprehensive documentation sites. By leveraging these capabilities, you can create a documentation experience that is both user-friendly and maintainer-friendly.

For more information, refer to the [official Docusaurus documentation](https://docusaurus.io/docs).