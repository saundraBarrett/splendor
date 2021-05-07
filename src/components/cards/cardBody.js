import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import GemImage from '../../common/gemImage';
import _ from 'lodash';

const CardBody = (props) => {
    return (
        <Grid item alignSelf="flex-end" className="cost-container">
                    {_.map(props.card.cost, function (g) {
                        return <div key={"cost_"+g.gem} className={"cost cost_" + g.gem}>
                            <span className="quantity">{g.qty}</span>
                        </div>
                    })}
            </Grid>
    )

}

export default CardBody;