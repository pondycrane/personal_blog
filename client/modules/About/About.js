import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getAbout } from './AboutReducer';
import { fetchAbout } from './AboutActions';
import AboutDisplay from './components/AboutDisplay';

class About extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAbout());
  }

  render() {
    return (
      <div className="aboutView">
        <AboutDisplay about={this.props.about} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    about: getAbout(state),
  };
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  about: PropTypes.shape({
    biography: PropTypes.string,
  }).isRequired,
};

About.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(About);
