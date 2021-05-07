/* Pull all of the board game pieces together in a material ui (https://material-ui.com/) grid */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import BoardTokens from './boardTokens';
import GamePlayers from './gamePlayers';
import BoardCards from './boardCards';
import GameDetails from './gameDetails';
import NobleRow from '../nobles/nobleRow';
import PlayerSpace from '../player/playerSpace';

// Set up playing board with the game players, cards and tokens
function Board() {
    return (
        <Grid container>
            <GameDetails/>
            <Grid item xs={2}>
                <GamePlayers/>
            </Grid>
            <Grid item xs={7}>
                <BoardCards/>
                <PlayerSpace />
            </Grid>
            <Grid item xs={2}>
                <NobleRow/>
            </Grid>
            <Grid item xs={1}>
                <BoardTokens />
            </Grid>
        </Grid>
    );

}

export default Board;