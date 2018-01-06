import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
  table: {
  },
  cell: {
    padding: 10,
  },
});

const cols = ['name', 'year', 'specialty'];

function SkillDisplay(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
        {
          cols.map((col, id) => { return <TableCell key={id} className={classes.cell} >{col}</TableCell>; })
        }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.language.map((lang, lid) => {
            return (
              <TableRow key={lid}>
                {
                  cols.map((col, id) => { return <TableCell key={id} className={classes.cell} >{lang[col]}</TableCell>; })
                }
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

SkillDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.array.isRequired,
};

export default withStyles(styles)(SkillDisplay);
