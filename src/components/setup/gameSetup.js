import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Grid, Button, TextField } from '@material-ui/core';
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
        { id: 0, type: localPlayer.id, name: "Player 0" },
        { id: 1, type: localPlayer.id, name: "Player 1" }
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
                ...players, { type: localPlayer.id, name: `Player ${playerCount}` }
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
            <PlayerSetup key={"player-setup_" + i} i={i} type={localPlayer.id} name={players[i].name} onChangePlayerType={onChangePlayerType} doneUpdatingPlayer={doneUpdatingPlayer} />
        )
    }

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'white', width: '50%', padding: '1em' }} >
                <Grid item>
                    <FormControl fullWidth={true} style={{marginBottom: '1em'}}>
                        <TextField
                            id="number-of-players"
                            label="Number of Players"
                            type="number"
                            defaultValue={2}
                            inputProps={{
                                min: "2", max: "4"
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => updatePlayerCount(e.target.value)} 
                        />
                        
                    </FormControl>
                </Grid>
                <Grid item>
                    {playerInputs}
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" color="secondary" onClick={() => dispatch({ type: 'START_GAME', players: players })} >Start Game</Button>
                </Grid>
            </div>
        </Grid >

    )
}

export default GameSetup;