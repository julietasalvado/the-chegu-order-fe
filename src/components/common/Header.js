import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

//stateless component
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="activeHome">Home</IndexLink>
      {" | "}
    </nav>
  );
};

export default Header;
