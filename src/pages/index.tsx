import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ResotoLogo from '@site/static/img/resoto.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import TeamList from '../components/TeamList';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.clouds}>
        <div
          className={clsx(styles.cloud, styles.cloud1, styles.cloudForeground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud2, styles.cloudBackground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud3, styles.cloudForeground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud4, styles.cloudBackground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud1, styles.cloudForeground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud2, styles.cloudBackground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud4, styles.cloudBackground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud3, styles.cloudForeground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud2, styles.cloudBackground)}
        />
        <div
          className={clsx(styles.cloud, styles.cloud4, styles.cloudBackground)}
        />
      </div>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <img
          className={styles.heroLogo}
          src="/img/logo-lg.svg"
          alt="Some Engineering Inc. Logo"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <section className={clsx(styles.subtitle, styles.subtitleDark)}>
          <div className={styles.subtitleInner}>
            Our mission is to make cloud infrastructure{' '}
            <strong>searchable</strong> and <strong>accessible</strong>. We are
            pioneering a new category of software:{' '}
            <strong>infrastructure intelligence</strong>.
          </div>
        </section>
        <a
          href="https://resoto.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sectionLink"
        >
          <section className="section resoto shadow--md">
            <div className="flexContainer">
              <ResotoLogo className="sectionFeatureImage" />
              <div className="sectionFeatureText">
                <strong>Resoto</strong> empowers engineers and non-technical
                users alike to <strong>search</strong> their cloud
                infrastructure, <strong>collect</strong> information for any
                resource, and <strong>generate</strong> meaningful metrics.
                <span className="exploreLink">Explore Resoto</span>
              </div>
            </div>
          </section>
        </a>
        <TeamList isHomePage />
      </main>
    </Layout>
  );
}
