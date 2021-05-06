/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect, useDispatch } from 'react-redux';
import CardRow from '../cards/cardRow';
import _ from 'lodash';
import NobleRow from '../../nobles/nobleRow';

const mapStateToProps = (state) => {
    return { cards: state.game.cards }
}

function BoardCards(props) {
    const dispatch = useDispatch();

    const playerTakeCard = card => {
        console.log(card)
    };

    return (
        <Grid container direction="column">
            <NobleRow />
            <CardRow rowCards={_.filter(props.cards, {"level" : 3})} onClickFunction={playerTakeCard} />
            <CardRow rowCards={_.filter(props.cards, {"level" : 2})} onClickFunction={playerTakeCard} />
            <CardRow rowCards={_.filter(props.cards, {"level" : 1})} onClickFunction={playerTakeCard} />
        </Grid>
    )
}

export default connect(mapStateToProps)(BoardCards)
