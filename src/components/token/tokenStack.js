import React from 'react';
import { Grid } from '@material-ui/core';
import Token from './token';

function TokenStack(props) {

    let tokens = []
    // update to prop.token.qty when you want a stack of chips
    for (let i = 0; i < 1; i++) {
        tokens.push(<Token token={props.token} onClickFunction={props.onClickFunction} />)
    }

    return (
        <Grid item className="token-stack">
            {tokens}
        </Grid>

    )
}

export default TokenStack;