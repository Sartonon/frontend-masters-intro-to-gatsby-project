import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout
      title="About this site"
      description="More information about this site"
    >
      <h1>About this site</h1>
      <Link to="/">Frontpage</Link>
    </Layout>
  );
}
