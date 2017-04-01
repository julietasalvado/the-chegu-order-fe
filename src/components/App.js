/**
 * This component handles the App template used on every page.
 */
import React, {PropTypes} from  'react';
import Header from './common/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}

App.propsTypes = {
  children: PropTypes.object.isRequired
};

export default App;
