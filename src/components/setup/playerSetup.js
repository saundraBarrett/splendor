import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Grid, FormGroup } from '@material-ui/core';
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
        <FormGroup>
        <FormControl key={`player-type-${props.i}`} name={`player-type-${props.i}`} >
            <InputLabel id="label">Player Type:</InputLabel>
            <select id={props.i} value={0} onChange={(e) => props.onChangePlayerType(e)}>
                {_.map(playerTypes, function (playerType) {
                    return <option key={props.i + playerType.id} value={playerType.id}>{playerType.type}</option>
                })}
            </select>
        </FormControl>
        
        <FormControl key={`player-name-${props.i}`} name={`player-name-${props.i}`}>
            <InputLabel>Player Name:</InputLabel>
            <Input onChange={(e) => updatePlayerName(e)}></Input>
        </FormControl>
        </FormGroup>
    )
}

export default PlayerSetup;