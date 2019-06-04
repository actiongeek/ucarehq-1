import React, { Component } from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import UcareIcons from './Icons/ucare';
import UcareExpandIcon from './Icons/ucareexpand';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "transparent",
      isTop: true,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10;
      this.setState({ isTop });
      if (!isTop) {
        document.querySelector('.nav-features').style.color = "#323a46";
        document.querySelector('.nav-pricing').style.color = "#323a46";
        document.querySelector('.support').style.color = "#323a46";
        document.querySelector('.nav-blog').style.color = "#323a46";
        document.querySelector('.sign-in').style.color = "#323a46";
      } else {
        document.querySelector('.nav-features').style.color = "hsla(0,0%,100%,.9)";
        document.querySelector('.nav-pricing').style.color = "hsla(0,0%,100%,.9)";
        document.querySelector('.support').style.color = "hsla(0,0%,100%,.9)";
        document.querySelector('.nav-blog').style.color = "hsla(0,0%,100%,.9)";
        document.querySelector('.sign-in').style.color = "hsla(0,0%,100%,.9)";
      }
    })
  }
  render() { 
    return ( 
      <Navbar
        collapseOnSelect 
        expand="lg"
        bg={ this.state.isTop ? 'transparent': 'light' }
        variant="transparent" 
        fixed="top"
        className="navbar nav-inverse"
        style={{
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >
        <Navbar.Brand href="/">
          { this.state.isTop ? <UcareExpandIcon /> : <UcareIcons />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/features" className="item nav-features">features</Nav.Link>
            <Nav.Link href="/" className="item nav-pricing">pricing</Nav.Link>
            <Nav.Link href="https://ucare.zendesk.com/hc/en-us" className="item support">support</Nav.Link>
            <Nav.Link href="/blog" className="item nav-blog">blog</Nav.Link>
            <Nav.Link 
              href="https://connect.ucareapp.com/signin?_ga=2.13867701.365518745.1558216565-1288942489.1557477004"
              className="item sign-in"
            >
              sign in
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <Link className="trials-free-btn" to="/sign-up">
                free 30-day trial&nbsp;&nbsp;
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
