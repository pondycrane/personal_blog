import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import Card, { CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SkillDisplay from './SkillDisplay';
import ProjectDisplay from './ProjectDisplay';
import { Link } from 'react-router';
import crane from './crane.jpeg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
  },
  section: {
    marginTop: 30,
  },
  gridItem: {
    padding: 10,
  },
});

function AboutDisplay(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8} >
        <Grid item xs={12} sm={12} md={4} className={classes.gridItem}>
          <Card>
            <CardMedia
              className={classes.media}
              image={crane}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.gridItem}>
          <Typography type="headline" component="h2">Biography</Typography>
          <Typography component="p">{props.about.biography}<br /></Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.gridItem}>
          <Typography type="headline" component="h2"> Blog Posts</Typography>
          {
            props.posts.map((post, pid) => {
              return <div key={pid}><Link to={`/posts/${post.slug}-${post.cuid}`}>{post.title}</Link><br /></div>;
            })
          }
        </Grid>
      </Grid>

      <Grid container spacing={8} className={classes.section}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography type="headline" component="h2">
            Programming Languages
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={8} >
        <Grid item xs={12} className={classes.gridItem}>
          <SkillDisplay language={props.about.language} />
        </Grid>
      </Grid>

      <Grid container spacing={8} className={classes.section}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography type="headline" component="h2">
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={8} >
      {
        props.about.projects.map((project, id) => {
          return (
            <Grid item xs={12} key={id} sm={12} md={4} className={classes.gridItem}>
              <ProjectDisplay
                data={project}
              />
            </Grid>
          );
        })
      }
      </Grid>
    </div>
  );
}

AboutDisplay.propTypes = {
  about: PropTypes.shape({
    biography: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    language: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
  }).isRequired,
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutDisplay);
