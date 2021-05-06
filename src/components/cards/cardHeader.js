import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import GemImage from '../../common/gemImage';

const CardHeader = (props) => {
    console.log(props)
    return (
        < Box
            className={'card card-' + props.card.gem}
            display="flex"
            p={1}
            m={2}
            bgcolor="background.paper" >
            { props.card.victoryPoints !== 0 ? <Box className="victory-points"> {props.card.victoryPoints} </Box> : null}
            < Box flexGrow={1} textAlign="right" className="gem-container" justifyContent="flex-end" >
                <GemImage gem={props.card.gem} />
            </Box >
        </Box >
    )

}

export default CardHeader;