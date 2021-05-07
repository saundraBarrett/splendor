import { Box, Grid } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import GemImage from '../../common/gemImage';
import _ from 'lodash';
import React from 'react';
import CardDialog from './cardDialog';

// get active player
const mapStateToProps = (state) => {
    return { activePlayer: _.find(state.game.players, { active: true }) }
}
// Display card
// Setting up as a grid item from @material-ui
function Card(props) {
    return (
        <Grid item xs={2} style={{margin: '1em'}} className={"card-container " + props.card.gem + props.card.level}>
            <CardDialog card={props.card} activePlayer={props.activePlayer}/>
        </Grid >
    )
}

export default connect(mapStateToProps)(Card)