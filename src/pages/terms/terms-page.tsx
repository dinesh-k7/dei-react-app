import React, { Fragment, ReactElement, useEffect, useState } from 'react';

import Markdown from 'markdown-to-jsx';

import HeroContainer from './container/hero/hero-container';
import './terms-page.scss';

const TermsPage: React.FC = (): ReactElement => {
  const filename = 'terms.md';
  const [terms, setTerms] = useState('');

  useEffect(() => {
    import(`../../markdown/${filename}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setTerms(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return (
    <Fragment>
      <HeroContainer />
      <section className="terms-section">
        <Markdown>{terms}</Markdown>
      </section>
    </Fragment>
  );
};

export default TermsPage;
