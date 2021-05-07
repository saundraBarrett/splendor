import { Grid } from '@material-ui/core';
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Noble from './noble';

const mapStateToProps = (state) => {
    return { nobles: state.game.nobles }
}

// Show all nobles on board
function NobleRow(props) {

    console.log(props)
    const [nobleImages, setNobleImages] = useState()

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=portrait&hasImages=true`)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setNobleImages(result)
            },
            (error) => {
              console.log(error)
            }
          )
      }, [])

    return (
        <Grid container>
            {_.map(props.nobles, function (noble) {
                return <Noble key={noble.id} noble={noble} nobleImages={nobleImages}/>
            })}
        </Grid>
    )

}

export default connect(mapStateToProps)(NobleRow);