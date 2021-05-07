import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';
import CardRow from '../cards/cardRow';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return { cards: state.game.cards }
}

// Set up cards on the board
function BoardCards(props) {
    return (
        <Grid container direction="column">
            <CardRow key={"card-row_"+3} rowCards={_.filter(props.cards, {"level" : 3})} />
            <CardRow key={"card-row_"+2} rowCards={_.filter(props.cards, {"level" : 2})} />
            <CardRow key={"card-row_"+1} rowCards={_.filter(props.cards, {"level" : 1})} />
        </Grid>
    )
}

export default connect(mapStateToProps)(BoardCards)
