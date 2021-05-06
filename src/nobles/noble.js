import { Grid } from '@material-ui/core';
import React from 'react';
import GemImage from '../common/gemImage';
import _ from 'lodash';

// Display noble card
function Noble(props) {
    return (
    <Grid item xs>
        {props.noble.victoryPoints}
        {_.map(props.noble.cost, function(cost) {
            return <div><GemImage gem={cost.gem}/>{cost.qty}</div>
        })}
    </Grid>
    )
}

export default Noble;