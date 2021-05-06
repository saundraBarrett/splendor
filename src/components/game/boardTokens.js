import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid/Grid';
import TokenStack from '../token/tokenStack';

// get game variables from redux store
const mapStateToProps = (state) => {
    return { gameTokens: state.game.tokens }
}  

function BoardTokens(props) {
    // dispatch functionality from redux store
    const dispatch = useDispatch()
    const [chips, setChips] = useState([]);

    const updateChipCount = e => {
        setChips(
            chips => [...chips, e]
        )
    };
    // add tokens to players hand
    useEffect(() => {
        if (chips.length === 3 ) {
            dispatch({type:'REMOVE_TOKEN_FROM_BOARD', chips})
            dispatch({type: 'END_PLAYER_TURN' })
            setChips([])
        }
      });

    return (
        <Grid container direction="column">
            { props.gameTokens.map((token, i) => {
                return (<TokenStack token={token} i={i} onClickFunction={updateChipCount} selectedChips={chips}/>)
            })}
        </Grid>
    )
}

export default connect(mapStateToProps)(BoardTokens);