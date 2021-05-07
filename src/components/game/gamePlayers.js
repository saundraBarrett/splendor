/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';
import { Badge } from '@material-ui/core';

const mapStateToProps = (state) => {
    return { players: state.game.players }
}

function GamePlayers(props) {
    return (
        <Grid container direction="column" style={{marginTop: '2em'}}>
            { props.players.map((player, i) => {
                return (
                <Badge color="primary" badgeContent={0}>
                    <div style={{height: '10vh', backgroundColor: 'red', width: '100%', marginBottom: '1em', borderRadius: '0 10px 10px 0'}}>{player.name}</div>
                </Badge>
                )
            })}
        </Grid>
    )
}

export default connect(mapStateToProps)(GamePlayers)
