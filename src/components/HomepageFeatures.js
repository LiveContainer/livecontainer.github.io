import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: translate({id: 'home.feature.noJailbreak.title', message: 'No Jailbreak Required'}),
    description: (
      <Translate id="home.feature.noJailbreak.description">
        Run iOS apps in a secure sandbox environment without needing to jailbreak your device.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.multipleContainers.title', message: 'Multiple Containers'}),
    description: (
      <Translate id="home.feature.multipleContainers.description">
        Create multiple isolated containers for the same app with different data.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.jit.title', message: 'JIT Support'}),
    description: (
      <Translate id="home.feature.jit.description">
        Optional JIT mode for better performance and compatibility with more apps.
      </Translate>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
