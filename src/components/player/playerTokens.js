/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import _ from 'lodash';
import CardBadge from '../common/cardBadge';
import Token from '../token/token';

// display player tokens and gems
function PlayerTokens(props) {
    return (
        <Grid container direction="row">
            { props.tokens.map((token, i) => {
                let gem = _.find(props.gems, function(g) { return g.id === token.id})
                return (
                <Grid item xs={2} container direction="row" className={'player-count ' + token.gem} key={'token_' + token.id} >
                    <Grid item xs={6}><CardBadge gem={gem.gem} qty={gem.qty}/></Grid>
                    <Grid item xs={6}><Token token={token}/></Grid>
                </Grid>);
            })}
        </Grid>
    )
}

export default PlayerTokens;