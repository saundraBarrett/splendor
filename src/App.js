import React from 'react';
import {connect, useDispatch} from 'react-redux'
import GameSetup from './components/setup/gameSetup';
import Board from './components/game/board';
import PlayerSpace from './components/player/playerSpace';
import './App.scss';

const mapStateToProps = (state) => {
  return { gameState: state.game.gameState }
}

function App(props) {
  const dispatch = useDispatch()
  return (
    <div className="App">
          {props.gameState !== 'started' ? 
          <GameSetup/>
          : 
          <React.Fragment>
            <Board/>
            <PlayerSpace/>
          </React.Fragment>}
    </div>
  );
}

export default connect(mapStateToProps)(App)
