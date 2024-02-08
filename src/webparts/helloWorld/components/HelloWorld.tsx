import * as React from 'react';
import styles from './HelloWorld.module.scss';
import type { IHelloWorldProps } from './IHelloWorldProps';
import { escape, isEmpty } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description,
      testProp,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.helloWorld} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
          <div>
            <h3>Custom Area</h3>
            <div>Test Prop value: {!isEmpty(testProp) ? <strong>{escape(testProp)}</strong> : <i>(Not defined yet. Go to WebPart properties to define it)</i>}</div>
          </div>
        </div>
      </section >
    );
  }
}
