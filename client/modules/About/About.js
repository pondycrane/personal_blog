import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAbout } from './AboutReducer';
import { getPosts } from '../Post/PostReducer';
import { fetchAbout } from './AboutActions';
import { fetchPosts } from '../Post/PostActions';
import AboutDisplay from './components/AboutDisplay';

class About extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAbout());
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div className="aboutView">
        <AboutDisplay
          about={this.props.about}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    about: getAbout(state),
    posts: getPosts(state),
  };
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  about: PropTypes.shape({
    biography: PropTypes.string,
  }).isRequired,
  posts: PropTypes.array.isRequired,
};

About.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(About);
