/* Pull all of the player components together in a material ui (https://material-ui.com/) grid */
/* Player has tokens, reserved cards and owned cards */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import PlayerTokens from './playerTokens';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';

// find active player - because everyone is local right now, this is ok
// TODO: when bots and remote players integrated - local will mean player on this session only
const mapStateToProps = (state) => {
    return { activePlayer: _.find(state.game.players, {active : true}) }
}

// Render active player's space
function PlayerSpace(props) {
    const dispatch = useDispatch()
    return (
        <Grid container direction="row">
            <h2>{props.activePlayer.name}</h2>
            <PlayerTokens tokens={props.activePlayer.tokens} />
            <button className="end-turn" onClick={() => dispatch({type: 'END_PLAYER_TURN'})}>End Turn</button>
        </Grid>
    )
}

export default connect(mapStateToProps)(PlayerSpace)