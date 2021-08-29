import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';

// markup
const About = ({location, data}) => {

  const { excerpt , html } = data.markdownRemark
  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        title={'About'}
        description={excerpt}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query{
    markdownRemark(frontmatter: {title: {eq: "about"}}) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }`


export default About
