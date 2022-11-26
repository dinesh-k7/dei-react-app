import React, { Fragment, ReactElement, useEffect, useState } from 'react';

import Markdown from 'markdown-to-jsx';

import HeroContainer from './container/hero/hero-container';
import './privacy-page.scss';

const PrivacyPage: React.FC = (): ReactElement => {
  const filename = 'privacy.md';
  const [privacy, setPrivacy] = useState('');

  useEffect(() => {
    import(`../../markdown/${filename}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPrivacy(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return (
    <Fragment>
      <HeroContainer />
      <section className="privacy-section">
        <Markdown>{privacy}</Markdown>
      </section>
    </Fragment>
  );
};

export default PrivacyPage;
