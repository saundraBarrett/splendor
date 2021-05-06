import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';
import CardRow from '../cards/cardRow';
import _ from 'lodash';
import NobleRow from '../nobles/nobleRow';

const mapStateToProps = (state) => {
    return { cards: state.game.cards }
}

// Set up cards on the board
function BoardCards(props) {
    return (
        <Grid container direction="column">
            <NobleRow />
            <CardRow rowCards={_.filter(props.cards, {"level" : 3})} />
            <CardRow rowCards={_.filter(props.cards, {"level" : 2})} />
            <CardRow rowCards={_.filter(props.cards, {"level" : 1})} />
        </Grid>
    )
}

export default connect(mapStateToProps)(BoardCards)
