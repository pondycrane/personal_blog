import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCalendar } from './CalendarActions';
import { getSchedule } from './CalendarReducer';

import Card, { CardHeader, CardMedia } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { Grid } from 'material-ui';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';

const styles = () => ({
  gridItem: {
    height: '300px',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '100%',
    overflow: 'hidden',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
  },
  cardHeader: {
  },
  pointed: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#D6EAF8',
    },
  },
  screenshot: {
    width: '100%',
    position: 'center',
  },
});

class Calendar extends Component {
  state = {
    screenshotOpen: false,
    screenshot: '',
  }

  componentDidMount() {
    this.props.dispatch(fetchCalendar());
  }

  openScreenshot(screenshot) {
    if (screenshot) {
      this.setState({ screenshotOpen: true, screenshot });
    }
  }

  handleClose() {
    this.setState({ screenshotOpen: false, screenshot: null });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="calendarView">
        <div className="scheduleView">
          <Grid container spacing={8} >
            {
              this.props.schedule.map((even, sInd) =>
                <Grid item xs={12} key={sInd} sm={4} className={classes.gridItem}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={even.Code.concat(' - ').concat(even.Event)}
                      subheader={even.Time}
                      avatar={<Avatar aria-label="Recipe" className="avatar" src={even.Logo} />}
                      onClick={() => (!even.Source ? null : window.open(even.Source, '_blank'))}
                      className={`${classes.cardHeader} ${!even.Source ? '' : classes.pointed}`}
                    />
                    <CardMedia
                      className={`${classes.cardMedia} ${!even.Screenshot ? '' : classes.pointed}`}
                      image={!even.Screenshot ? null : even.Screenshot}
                      onClick={() => this.openScreenshot(even.Screenshot)}
                    />
                  </Card>
                </Grid>
              )
            }
          </Grid>
          <Dialog
            onClose={() => this.handleClose()}
            open={this.state.screenshotOpen}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">Screenshot</DialogTitle>
            <DialogContent>
              <img src={this.state.screenshot} className={classes.screenshot} role="presentation" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: getSchedule(state),
  };
}

Calendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  schedule: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

Calendar.contextTypes = {
  router: React.PropTypes.object,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Calendar);
