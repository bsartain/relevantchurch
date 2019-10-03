import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
      <div className="footer">
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6} md={6}>
                    <div className="text-widget">
                        <h3>Relevant Church</h3>
                        <div>
                            <div>
                                Worship<br/>
                                Sundays @ 10:30am<br/>
                                Csd YMCA Aquatic Center<br/>
                            </div>
                        </div>
                        <div>
                            5485 Charlotte Highway<br/>
                            Lake Wylie, SC 29710<br/>
                        </div>
                        <div>
                            *Nursery and kids programs are available during worship times.  Be sure to come a little early to get your child(ren) checked in at our KidCheck station.
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <div className="text-widget">
                        <div>
                            <h5>Mailing Address</h5>
                            Relevant Church<br/>
                            PO Box 5411<br/>
                            Lake Wylie, SC. 29710
                        </div>
                        <div>
                            <h5>Office Address</h5>
                            4371 Charlotte Highway<br/>
                            Suite 11<br/>
                            Lake Wylie, SC. 29710
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
      </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);