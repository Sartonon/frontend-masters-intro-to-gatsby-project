import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext;

  console.log(pageContext);
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
