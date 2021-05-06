import { Grid } from '@material-ui/core';
import React from 'react';
import CardBadge from '../common/cardBadge';
import _ from 'lodash';

// Display noble card
function Noble(props) {
    return (
        <Grid item xs container className="noble-container" style={{margin: '1em'}}>
            <Grid item container xs={3} sm={2} className="overlay" direction="column" justify="flex-end">
                {_.map(props.noble.cost, function (cost) {
                    return <CardBadge gem={cost.gem} qty={cost.qty} />
                })}
            </Grid>
            <Grid item xs={6} sm={8}></Grid>
            <Grid item container className="overlay " xs={3} sm={2} direction="column" justify="flex-end" alignContent="flex-end">
                <span style={{fontSize: '2em', color: 'white'}}>{props.noble.victoryPoints}</span>
            </Grid>
        </Grid>
    )
}

export default Noble;