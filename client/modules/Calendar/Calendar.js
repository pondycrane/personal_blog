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
});

class Calendar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCalendar());
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
                    <CardMedia className={classes.cardMedia} image={!even.Screenshot ? null : even.Screenshot} />
                  </Card>
                </Grid>
              )
            }
          </Grid>
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
