import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'No Jailbreak Required',
    description: (
      <>
        Run iOS apps in a secure sandbox environment without needing to jailbreak your device.
      </>
    ),
  },
  {
    title: 'Multiple Containers',
    description: (
      <>
        Create multiple isolated containers for the same app with different data.
      </>
    ),
  },
  {
    title: 'JIT Support',
    description: (
      <>
        Optional JIT mode for better performance and compatibility with more apps.
      </>
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
