import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
  description: string;
  lang: string;
  title: string;
};

const SEO = ({ description, lang, title }: SEOProps): JSX.Element => (
  <Helmet htmlAttributes={{ lang }}>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export { SEO };
