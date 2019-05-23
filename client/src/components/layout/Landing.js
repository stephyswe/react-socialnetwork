import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = props => {
  return (
    <Fragment>
      <div className="ui inverted vertical masthead center aligned segment landing">
        <div className="ui text container">
          <h1 className="ui inverted header">DevConnector</h1>
          <h2 className="ui teal">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h2>
          <Link to="/register" className="ui huge primary button">
            Get Started <i className="right arrow icon" />
          </Link>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">We Help Students and Coders</h3>
              <p>
                With a worldwide shortage of coders, affordability and
                availability of training services is more important than ever.
                That’s why this website is here: to help you use these newer
                coding training services to their full potential.
              </p>
              <h3 className="ui header">What is Coding?</h3>
              <p>
                First things first – get the background information before you
                start. Learn all about coding – how it works, the benefits of
                learning it, and what today’s common coding languages are. We’ll
                also introduce you to some popular forms of coding: web design,
                web development and app development. You’ll find out what skills
                are required for each, and what training you’ll need. Once you
                take in the preliminary info, you’ll be ready to learn coding!
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                alt="header-img"
                src="https://2.bp.blogspot.com/-SLB_y1u7V38/XL_JEmkjsGI/AAAAAAAAItk/j29dZ6vs6b4eNUIz6BRUckzOVqkXRuhfgCLcBGAs/s1600/image3.gif"
                className="ui large bordered rounded image"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <div className="ui huge button">Check Them Out</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">
              <h3>I Love Bugs 3000</h3>
              <img
                alt="fun"
                src="http://devhumor.com/content/uploads/images/May2019/end-game.png"
              />
            </div>
            <div className="column">
              <h3>
                "Measuring programming progress by lines of code is like
                measuring aircraft building progress by weight"
              </h3>
              <p>
                <img
                  alt="avatar"
                  src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
                  className="ui avatar image"
                />
                <b>Bill Gates</b> Chief Fun Officer
              </p>
              <h3>
                "Programming today is a race between software engineers striving
                to build bigger and better idiot-proof programs, and the
                universe trying to produce bigger and better idiots. So far, the
                universe is winning."
              </h3>
              <p>
                <img
                  alt="avatar"
                  src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                  className="ui avatar image"
                />
                <b>Rick Cook</b> The Wizardry Compiled
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
          <p>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <div className="ui large button">Read More</div>
          <h4 className="ui horizontal header divider">
            <div href="#">Case Studies</div>
          </h4>
          <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
          <p>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but its really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <div className="ui large button">I'm Still Quite Interested</div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
