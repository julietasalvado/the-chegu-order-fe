import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';

//stateless component
/*const Header = () => {
  return (
    {
  /!*<nav>
   <IndexLink to="/" activeClassName="activeHome">Home</IndexLink>
   {" | "}
   </nav>*!/
}
  );
};*/

const Header = () => (
  <AppBar
    title="The Chegu Order"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Header;
