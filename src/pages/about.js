import { Link, graphql } from 'gatsby';
import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About this site"
      description="More information about this site"
    >
      <GatsbyImage image={getImage(data.file)} alt="a cocktail" />
      <h1>About this site</h1>
      <Link to="/">Frontpage</Link>
    </Layout>
  );
}
