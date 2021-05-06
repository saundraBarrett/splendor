/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Token from '../token/token';
import EmptyToken from '../token/emptyToken';
import _ from 'lodash';

// display player tokens
function PlayerTokens(props) {
console.log(props)
    return (
        <Grid container direction="row">
            { props.tokens.map((token, i) => {
                if (token.qty === 0)
                    return (<Grid item key={'empty_token_' + i}><EmptyToken token={token}/></Grid>);
                else
                    return (<Grid item key={'token_' + token.id} style={{ marginLeft: 30 }}><Token token={token} /></Grid>);
            })}
        </Grid>
    )
}

export default PlayerTokens;