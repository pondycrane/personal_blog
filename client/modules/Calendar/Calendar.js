import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCalendar } from './CalendarActions';
import { getSchedule, getLoading } from './CalendarReducer';

import Card, { CardHeader, CardMedia } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { Grid } from 'material-ui';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import { CircularProgress } from 'material-ui/Progress';
import { green } from 'material-ui/colors';

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
  loading: {
    margin: '0 auto',
    width: '50%',
  },
  calendarView: {
    position: 'relative',
  },
});

class Calendar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCalendar());
  }

  openScreenshot(screenshot) {
    if (screenshot) {
      window.open(screenshot, '_blank');
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.calendarView}>
        <div className="search">
        </div>
        {
          !this.props.loading ?
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
                          image={!even.Screenshot ? 'https://www.xda-developers.com/files/2015/02/bJ120.png' : even.Screenshot}
                          onClick={() => this.openScreenshot(even.Screenshot)}
                        />
                      </Card>
                    </Grid>
                  )
                }
              </Grid>
            </div>
          :
            <div className={classes.loading}>
              <CircularProgress className={classes.progress} size={70} style={{ color: green[500] }} />
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: getSchedule(state),
    loading: getLoading(state),
  };
}

Calendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  schedule: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

Calendar.contextTypes = {
  router: React.PropTypes.object,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Calendar);
