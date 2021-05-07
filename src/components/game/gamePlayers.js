/* Display Player Tokens */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';
import { Badge, Tab, Tabs } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import PlayerTokens from '../player/playerTokens';

const mapStateToProps = (state) => {
    return { players: state.game.players }
}

function GamePlayers(props) {
    return (
        <Grid container direction="column">
            {props.players.map((player, i) => {
                return (
                    <div style={{ marginTop: '1em' }}>
                        <Badge badgeContent={player.victoryPoints} color="secondary">
                            <Accordion disabled={player.active ? true : false}>
                                <AccordionSummary>{player.name}</AccordionSummary>
                                <AccordionDetails>
                                    <Grid container direction="row">
                                        <h3>Points: {player.victoryPoints}</h3>
                                        <PlayerTokens tokens={player.tokens} gems={player.gems} />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Badge>
                    </div>
                )
            })}

        </Grid>
    )
}

export default connect(mapStateToProps)(GamePlayers)
