import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started with Docusaurus',
    description: (
      <>
        Learn the basics of Docusaurus and how to get your documentation site up and running quickly.
      </>
    ),
    link: '/blog/getting-started-with-docusaurus',
    type: 'Blog Post',
  },
  {
    title: 'Advanced Features',
    description: (
      <>
        Discover advanced features like versioning, i18n, search integration, and custom React components.
      </>
    ),
    link: '/docs/advanced-features',
    type: 'Documentation',
  },
  {
    title: 'Tutorial Intro',
    description: (
      <>
        Follow our step-by-step tutorial to create your first Docusaurus site from scratch.
      </>
    ),
    link: '/docs/intro',
    type: 'Documentation',
  },
];

function Feature({title, description, link, type}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureType}>{type}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuredTitle}>Featured Content</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}