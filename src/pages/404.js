import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import '../components/blogs/latestblog';
import SEO from "../components/seo"
import LatestBlog from "../components/blogs/latestblog";

const NotFoundPage = (props) => {
  typeof window !== `undefined` && (window.document.title = "404 | UCare");
  return (
    <Layout>
      <SEO title="404 | UCare" />
      <div className="container-fluid p-0 page-404" style={ {
        background: `linear-gradient( rgba(50,58,70,.5), rgba(50,58,70,.5) ), url(${props.data.file.publicURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `cover`,
        backgroundPosition: `50%`,
      }}>
        <h1 className="text-white text-center">FOUR, OH FOUR.</h1>
      </div>
      <div className="not-exist">
        <p className="text-center">Sorry, but the page you were trying to view does not exist.</p>
      </div>
      <LatestBlog />
    </Layout>
  )
}

export default NotFoundPage;

export const get404ImageQuery = graphql`
  query get404ImageQuery{
    file(relativePath: { eq: "404.jpg" }) {
      publicURL
    }
  }
`
