import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './_blogpost.scss';

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  const { title, date } = post.frontmatter;
  const { featured_image } = post.frontmatter;
  console.log(featured_image);
  return (
    <Layout>
      {/* <div
        className="container-fluid text-center p-0 blog-post"
        style={ {
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${publicURL})`,
          backgroundColor: '#323a46',
          backgroundPosition: '50%',
          backgroundSize: 'cover'
        } }>
        <div className="centered">
          <h1>{ title }</h1>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;&nbsp;
            { moment(date).format("D MMMM YYYY") }
          </span>
        </div>
      </div> */}
      <div className="container" >
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        type
        date
        url
        featured_image {
          id
          name
          ext
          relativePath
          publicURL
        }
      }
    }
  }
`