import React from 'react';
import Card from './card';
import _ from 'lodash';
import { Grid } from '@material-ui/core';

// Iterate through all cards in row and return card
function CardRow(props) {
    let cardsPerRow = 4;

    // Get and show only cards per row
    var cards = props.rowCards.slice(0, cardsPerRow).map(card => {
        return <Card card={card}/>
    })

    return (
        <Grid container>
            {cards}
        </Grid>
    )
}

export default CardRow;