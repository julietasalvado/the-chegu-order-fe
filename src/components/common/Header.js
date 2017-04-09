import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

//stateless component
const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="activeHome">Home</IndexLink>
      {" | "}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propsTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
