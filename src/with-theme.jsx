import React, { Component, PropTypes } from 'react';
import colors from './style/colors';

function withTheme(ChildComponent, color) {
  class Theme extends Component {
    static childContextTypes = {
      color: PropTypes.string.isRequired
    }

    getChildContext() {
      return {
        color: color || colors.theme
      };
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return Theme;
}

export default withTheme;