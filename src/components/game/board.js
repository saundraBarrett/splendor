/* Pull all of the board game pieces together in a material ui (https://material-ui.com/) grid */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import BoardTokens from './boardTokens';
import GamePlayers from './gamePlayers';
import BoardCards from './boardCards';
import GameDetails from './gameDetails';

// Set up playing board with the game players, cards and tokens
function Board() {
    return (
        <Grid container>
            <GameDetails/>
            <Grid item xs={1}>
                <GamePlayers/>
            </Grid>
            <Grid item xs={10}>
                <BoardCards/>
            </Grid>
            <Grid item xs={1}>
                <BoardTokens />
            </Grid>
        </Grid>
    );

}

export default Board;