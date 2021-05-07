import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Grid, FormGroup, Select } from '@material-ui/core';
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
        let newPlayer = player; // copying the old datas array
        newPlayer.name = e.target.value
        updatePlayer(newPlayer)
        props.doneUpdatingPlayer(player)
    }

    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
                <FormControl style={{minWidth: '240px'}} variant="outlined" key={`player-type-${props.i}`} name={`player-type-${props.i}`} >
                <InputLabel id="player-type">Player Type</InputLabel>
                    <Select labelId="player-type" id={props.i} value={0} onChange={(e) => props.onChangePlayerType(e)}>
                        {_.map(playerTypes, function (playerType) {
                            return <option key={props.i + playerType.id} value={playerType.id}>{playerType.type}</option>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl key={`player-name-${props.i}`} name={`player-name-${props.i}`}>
                    <InputLabel>Player Name:</InputLabel>
                    <Input onChange={(e) => updatePlayerName(e)}></Input>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default PlayerSetup;