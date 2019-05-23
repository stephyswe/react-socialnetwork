import React from 'react';

const Sidebar = props => {
  return (
    <div className="ui vertical inverted sidebar menu left">
      <a href="#!" className="active item">
        Home
      </a>
      <a href="#!" className="item">
        Work
      </a>
      <a href="#!" className="item">
        Company
      </a>
      §
      <a href="#!" className="item">
        Careers
      </a>
      <a href="#!" className="item">
        Login
      </a>
      <a href="#!" className="item">
        Signup
      </a>
    </div>
  );
};

export default Sidebar;
