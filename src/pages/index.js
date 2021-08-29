import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"


const Chart = '../assets/media/chart.jpg'
const Service1 = '../assets/media/services_1.jpg'

const IndexPage = ({location, data}) => {
  const page = data.markdownRemark
  console.log('location.pathname',location.pathname);

  return (
    <Layout>
      <Seo
        title={'Homepage'}
        pathname={location.pathname}
      />
      <section className="section main-bg">
        <div className="container">
          <h1 className="home-title">design and technology in service of innovators.</h1>
        </div>
      </section>
      <section className="section ">
        <div className="container">
          {/*<StaticImage placeholder="blurred"  src={Chart} alt="services chart" />*/}
          {/*<ContactForm />*/}
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <p>Gurus are a network of digital branding and marketing experts based in UAE, USA, Germany and the Netherlands, serving clients worldwide. Our team focuses on building successful digital strategies for our clients, and growing revenue by increasing qualified leads, traffic and conversions.</p>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <p>With services ranging from SEO to PPC and retargeted ads; copywriting to online marketing; designing, developing, and analyzing an online presence and strategy, we have you covered. The Gurus are passionate about our work and dedicated to increasing your revenue and growth.</p>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <h3 className="title">Everything we do is driven by customer growth: revenue, network expansion, and rich big data.</h3>
            </div>
            <div className="column"></div>
          </div>
          {/*<StaticImage placeholder="blurred"  src={Chart} alt="services chart" />*/}
          {/*<ContactForm />*/}
          {/*<div className="content" dangerouslySetInnerHTML={{ __html: page.html }} />*/}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "services"}}) {
      html
    }
  }
`

export default IndexPage
