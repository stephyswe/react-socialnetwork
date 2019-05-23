import React from 'react';

const Footer = props => {
  return (
    <footer className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height grid">
          <div className="left ten wide column">
            <h4 className="ui inverted header">About</h4>
            <p>
              <span>
                DevConnector.com is an initiative to help the upcoming
                programmers with the code.<br />
                We focuses on providing the most efficient code or snippets as
                the code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </span>
            </p>
          </div>

          <div className="three wide column">
            <h4 className="ui inverted header">Categories</h4>
            <div className="ui inverted link list">
              <a href="#!" className="item">
                C
              </a>
              <a href="#!" className="item">
                UI Design
              </a>
              <a href="#!" className="item">
                PHP
              </a>
              <a href="#!" className="item">
                Java
              </a>
              <a href="#!" className="item">
                Android
              </a>
              <a href="#!" className="item">
                Templates
              </a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Quick Links</h4>
            <div className="ui inverted link list">
              <a href="##!" className="item">
                About Us
              </a>
              <a href="#!" className="item">
                Contact Us
              </a>
              <a href="#!" className="item">
                Contribute
              </a>
              <a href="#!" className="item">
                Privacy Policy
              </a>
              <a href="#!" className="item">
                Sitemap
              </a>
            </div>
          </div>
        </div>
        <div className="ui inverted section divider" />
        <div className="ui aligned grid">
          <div className="left floated aligned six wide column">
            <div className="ui ">
              Copyright © 2019 All Rights Reserved by DevConnector.
            </div>
          </div>
          <div className="right floated right aligned six wide column">
            <div className="ui medium">
              <i className="large facebook icon" />
              <i className="large twitter icon" />
              <i className="large github icon" />
              <i className="large linkedin icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
