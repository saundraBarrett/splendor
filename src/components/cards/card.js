import { Box, Grid, Paper } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import GemImage from '../../common/gemImage';
import _ from 'lodash';
import React from 'react';

// get active player
const mapStateToProps = (state) => {
    return { activePlayer: _.find(state.game.players, {active : true}) }
}  
// Display card
// Setting up as a grid item from @material-ui
function Card(props) {

    const dispatch = useDispatch()

    function takeCard(props) {
        // check if active player has enough to take the card
        // if they do, take it
        // if they don't - offer to reserve it?
        console.log(props.activePlayer)
        console.log(props.card.cost)
        let card = props.card
        let canAfford = true;
        for (let i = 0; i < props.card.cost.length; i++) {
            console.log(props.card.cost[i])
            console.log(props.card.cost[i].gem)
            // if players tokens + cards with matching gem is less than the cost of the card, dont process
            let activePlayerGemCount = _.find(props.activePlayer.tokens, {"gem": props.card.cost[i].gem}).qty + _.find(props.activePlayer.tokens, {"gem": props.card.cost[i].gem}).qty
           if (activePlayerGemCount < props.card.cost[i].qty) {
               if (window.confirm('You can not afford this card. Would you like to reserve it? Note: this will end your turn')) {
                console.log('reserve') 
                canAfford = false;
                // disoatch reserver card
                //confirm("You dont have enought to buy this card. Do you want to reserve it? ")
                dispatch({type:'PLAYER_RESERVE_CARD', card})
               }
               else {
                   canAfford = false
                   console.log("d nothingggggg")
               }
               break;
            }
        }
        if (canAfford) {
            
            dispatch({type:'PLAYER_TAKE_CARD', card})
        }
    }
    
    return (
        <Grid item xs className="card-container" onClick={() => takeCard(props)}>
            <Box
                className={'card card-' + props.card.gem}
                display="flex"
                p={2}
                m={2}
                bgcolor="background.paper" >
                {props.card.victoryPoints !== 0 ? <Box className="victory-points"> {props.card.victoryPoints} </Box> : null}
                <Box flexGrow={1} textAlign="right" className="gem-container"  justifyContent="flex-end" >
                    <GemImage gem={props.card.gem} />   
                </Box>
            </Box>
            <Box>
            <Box alignSelf="flex-end" className="cost-container">
                {_.map(props.card.cost, function (g) {
                    return <div className={"cost cost-" + g.gem}>
                        <span className="quantity">{g.qty}</span>
                    </div>
                })}
            </Box>
            </Box>
        </Grid >

    )
}

export default connect(mapStateToProps)(Card)