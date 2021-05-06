import { Grid } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Noble from './noble';

const mapStateToProps = (state) => {
    return { nobles: state.game.nobles }
}

function NobleRow(props) {
    return (
        <Grid container>{_.map(props.nobles, function (noble) {
            return (<Noble noble={noble} />)
        })}
        </Grid>
    )

}

export default connect(mapStateToProps)(NobleRow);