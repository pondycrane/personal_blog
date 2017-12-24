import React, { PropTypes } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
		marginTop: theme.spacing.unit,
	},
	table: {
		minWidth: 80,
	},
});

const cols = ['name', 'year', 'specialty'];

function SkillDisplay(props) {
	const { classes } = props;

	return (
			<Table className={ classes.table }>
				<TableHead>
					<TableRow>
					{
						cols.map((col, id) => { return <TableCell key={ id }>{ col }</TableCell>})
					}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.language.map((lang, lid) => {
							return <TableRow key={ lid }>
								{
									cols.map((col, id) => { return <TableCell key={ id }>{ lang[col] }</TableCell>})
								}
							</TableRow>
						})
					}
				</TableBody>
			</Table>
	);
}

export default withStyles(styles)(SkillDisplay);
