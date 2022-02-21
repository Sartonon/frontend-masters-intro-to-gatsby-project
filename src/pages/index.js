import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <main>
        <h1>Hello frontend Masters</h1>
        <Link to="/about">About us</Link>
      </main>
    </Layout>
  );
}
