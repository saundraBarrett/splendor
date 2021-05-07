import React, { useEffect, useState } from 'react';
import { FormControl, Input, InputLabel, Grid, FormGroup, Select, TextField } from '@material-ui/core';
import _ from 'lodash';
import playerTypes from '../../common/playerTypes';

// player dropdown seletion for type imported from common goodies
const PlayerSetup = (props) => {
    const [player, updatePlayer] = useState({
        id: props.i,
        type: props.type,
        name: props.name
    })

    const updatePlayerName = e => {
        let newPlayer = player;
        newPlayer.name = e.target.value
        updatePlayer(newPlayer)
        props.doneUpdatingPlayer(player)
    }

    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={6} >
                <FormControl style={{ minWidth: '240px' }} variant="outlined" key={`player-type-${props.i}`} name={`player-type-${props.i}`} >
                    <InputLabel id="player-type">Player Type</InputLabel>
                    <Select native labelId="player-type" id={props.i} value={0} onChange={(e) => props.onChangePlayerType(e)}>
                        {_.map(playerTypes, function (playerType) {
                            return <option key={props.i + playerType.id} value={playerType.id}>{playerType.type}</option>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl key={`fc-player-name-${props.i}`}>
                    <TextField
                        required
                        id={`player-name-${props.i}`} 
                        label="Player Name"
                        defaultValue={props.name}
                        variant="filled"
                        onChange={(e) => updatePlayerName(e)}
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default PlayerSetup;