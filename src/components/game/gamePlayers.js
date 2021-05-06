/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { players: state.game.players }
}

function GamePlayers(props) {
    return (
        <Grid container direction="column">
            { props.players.map((player, i) => {
                return <div className={"player-card_"+i} active={player.active ? "true": "false"} key={"player-card_"+i}>
                    <div className="points">{player.victoryPoints}</div>
                </div>
            })}
        </Grid>
    )
}

export default connect(mapStateToProps)(GamePlayers)
