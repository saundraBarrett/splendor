import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import CardBadge from '../common/cardBadge';
import _ from 'lodash';
import { getRandomInt } from '../../helpers';
import noble_cath from '../../assets/nobles/catherine_de_medici.jpeg'

// Make api call to get random noble from met API
const fetchData = async (props) => {
    /* if (props.nobleImages) {
        let randomImage = getRandomInt(props.nobleImages.total)
        let objectID = props.nobleImages.objectIDs[randomImage]
        const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
        const json = await res.json()
        return json.primaryImageSmall
    }
    else { */
        return noble_cath
    //}
    
}

// Display noble card
function Noble(props) {
    useEffect(() => {
        fetchData(props).then(image => {
            setNobleImage(image)
        })
      }, [])

    const [nobleImage, setNobleImage] = useState()
    
    return (
        <Grid key={"noble-container_"+props.id} item xs={7} container className="noble-container" style={{ margin: '1em', backgroundImage: `url(${nobleImage})` }}>
            <Grid item container xs={4} sm={4} className="overlay" direction="column" justify="flex-end">
                {_.map(props.noble.cost, function (cost) {
                    return <CardBadge key={'card-badge_'+cost.gem} gem={cost.gem} qty={cost.qty} />
                })}
            </Grid>
            <Grid item xs={5} sm={5}></Grid>
            <Grid item container className="overlay " xs={3} sm={3} direction="column" justify="flex-end" alignContent="flex-end">
                <span style={{ fontSize: '2em', color: 'white' }}>{props.noble.victoryPoints}</span>
            </Grid>
        </Grid>
    )
}

export default Noble;