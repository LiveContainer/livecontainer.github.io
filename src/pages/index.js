import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={`${siteConfig.baseUrl}img/logo.png`}
          alt={translate({id: 'home.logoAlt', message: 'LiveContainer Logo'})}
          className={styles.logo}
        />
        <h1 className="hero__title">
          {translate({id: 'home.heroTitle', message: siteConfig.title})}
        </h1>
        <p className="hero__subtitle">
          <Translate id="home.heroSubtitle">Run iOS apps in a sandbox without jailbreak</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="home.getStartedButton">Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({id: 'home.metaTitle', message: siteConfig.title})}
      description={translate({
        id: 'home.pageDescription',
        message: 'Run iOS apps in a sandbox without jailbreak',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
