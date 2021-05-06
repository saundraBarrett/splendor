import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import PlayerSetup from './playerSetup';
import playerTypes from '../../common/playerTypes';

// Set up game by getting number of players, 4 max
function GameSetup(props) {
    // find local player type from player types
    const localPlayer = _.find(playerTypes, { 'type': 'Local' });

    // setting default players (2) to local type
    const defaultPlayers = [
        { id: 0, type: localPlayer.id },
        { id: 1, type: localPlayer.id }
    ]

    const dispatch = useDispatch()
    const [players, updatePlayers] = useState(defaultPlayers);

    const onChangePlayerType = e => {
        // Change player type to local
        if (e.target.value !== localPlayer.id) {
            alert('Only local players allowed now!')
        }
    };

    // when updating player data, save state variable
    const doneUpdatingPlayer = player => {
        let playerindex = _.findIndex(players, function (p) {
            return p.id == player.id
        })
        let playersCopy = [...players];
        playersCopy[playerindex] = player;
        updatePlayers(playersCopy)
    }

    const updatePlayerCount = playerCount => {
        // Add player and set as local player
        if (playerCount > players.length) {
            updatePlayers([
                ...players, { type: localPlayer.id }
            ])
        }
        // Remove player
        else if (playerCount < players.length) {
            // intiial function from lodash removes last item from array
            let tempPlayers = _.initial(players)
            updatePlayers(tempPlayers)
        }
    }

    // set up player select list, rendered as playerInputs
    const playerInputs = [];
    for (let i = 0; i < players.length; i++) {
        playerInputs.push(
            <PlayerSetup i={i} type={localPlayer.id} onChangePlayerType={onChangePlayerType} doneUpdatingPlayer={doneUpdatingPlayer} />
        )
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'white', width: '50%' }} >
                <Grid item>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="number-of-players" >Number of Players</InputLabel>
                        <Input id="number-of-players" defaultValue="2" type="number" inputProps={{ min: "2", max: "4" }} onChange={(e) => updatePlayerCount(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item>
                    {playerInputs}
                </Grid>
                <Grid item>
                    <button onClick={() => dispatch({ type: 'START_GAME', players: players })} >Start Game</button>
                </Grid>
            </div>
        </Grid >

    )
}

export default GameSetup;