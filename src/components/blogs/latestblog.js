import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const LatestBlog = () => (
  <StaticQuery
    query={ graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date]}
          limit: 3
          filter: { frontmatter: { type: {eq: "post"}}}
        ) {
            edges {
              node {
                frontmatter {
                url
                title
                date(formatString: "D MMMM YYYY"),
                categories,
                featured_image {
                  publicURL
                }
              }
                excerpt(pruneLength: 240)
                fields {
                  slug
                }
              }
            } 
          }
      }
    `}
    render={ data => {
      const { edges } = data.allMarkdownRemark;
      return (
        <div className="container-fluid text-center latestblog">
          <div className="container latest-blog-wrapper">
            <h1>Latest From the Blog</h1>
              {
                edges.map((item, key) => {
                  const { slug } = item.node.fields;
                  const { publicURL } = item.node.frontmatter.featured_image;
                  const {
                    frontmatter: {
                      title,
                      date,
                      categories,
                    },
                    excerpt,
                  } = item.node;
                  return (
                    <div className="col-md-4 p-2 align-top blog-out" key={ key }>
                      <div className="p-0 blogs text-left">
                        <a href={ slug } className="latest-blog">
                          <div className="thumb">
                            <img
                              src={ publicURL } alt={ title }
                              style={ {
                                width: '100%', height: 'auto'
                              }}
                            />
                            <span className="cat">
                              { categories.split(",")[0] }
                            </span>
                          </div>
                          <h3 className="ml-4">{ title }</h3>
                          <div className="blog-excerpt">
                            <h6 className="text-left">{ date }</h6>
                            { excerpt }
                          </div>
                          <div className="readmore-link">
                            <span className="read-more ml-4">
                              Read More&nbsp;&nbsp;
                              <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
      )
    } }
  />
)
export default LatestBlog;