import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import { Typography } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import classnames from 'classnames';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 250,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class ProjectDisplay extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={this.props.data.name}
            subheader={this.props.data.year}
          />
          <CardMedia
            className={classes.media}
            image={this.props.data.image}
          />
          <CardContent>
            <Typography component="p">
              {this.props.data.description.concat(' ')}
              <a href={this.props.data.url} target="_blank">[Link]</a>
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
            <CardContent>
              {
                this.props.data.detail.map((dt, dInd) => {
                  return (
                    <div key={dInd}>
                      <Typography component="p">
                        {dt}
                      </Typography>
                      <br />
                    </div>
                  );
                })
              }
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ProjectDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
};

export default withStyles(styles)(ProjectDisplay);
