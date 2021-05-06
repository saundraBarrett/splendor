// import actions from actions file
import { START_GAME, REMOVE_TOKEN_FROM_BOARD, ADD_TOKEN_TO_BOARD, PLAYER_TAKE_CARD, PLAYER_RESERVE_CARD, END_PLAYER_TURN } from '../actions';
import tokens from '../../common/tokens';
import cards from '../../common/cards';
import nobles from '../../common/nobles';
import constants from '../../common/constants';
import { getRandomInt, shuffleCards } from '../../helpers';
import _ from 'lodash';

// set initial game state with game tokens, setting quantity tokens(tokenQty, goldQty)
// game token quantity is based on number of players, players always start with 0
const initialState = {
  tokens: tokens(7, 5),
  gameState: 'initializing'
}

// Use the initialState as a default value
export default function game(state = initialState, action) {
  switch (action.type) {
    // To start game: add players to state and set default values, set player first turn, shuffle cards and nobles
    case (START_GAME): {
      let firstTurn = getRandomInt(action.players.length);
      let players = _.map(action.players, function (player, i) {
        return _.assign(player, {
          id: i,
          name: player.name,
          type: player.type,
          active: firstTurn === i,
          tokens: tokens(0, 0),
          gems: tokens(0, 0),
          reserved: [],
          points: 0
        });
      })

      return {
        ...state, gameState: 'started', players, cards: shuffleCards(cards), nobles: shuffleCards(nobles).slice(0, 4)
      }
    }

    // Find index of removed token from state; Remove token to board tokens and add to player tokens
    case (REMOVE_TOKEN_FROM_BOARD): {
      return {
        ...state,
        tokens: state.tokens.map((token, i) => action.chips.includes(token.id) ? { ...token, qty: token.qty - 1 } : token),
        players: state.players.map((player, i) => player.active ?
          {
            ...player,
            tokens: player.tokens.map((token, x) => action.chips.includes(token.id) ? { ...token, qty: token.qty + 1 } : token),
          }
          : player)
      }
    }
    // Find index of removed token from state; Remove token from player tokens and add to board tokens
    case (ADD_TOKEN_TO_BOARD): {
      let tokenIndex = _.findIndex(state.tokens, function (token) { return token.id === action.id })
      return {
        ...state,
        tokens: state.tokens.map((token, i) => i === tokenIndex ? { ...token, qty: token.qty + 1 } : token),
        players: state.players.map((player, i) => player.active ?
          {
            ...player,
            tokens: player.tokens.map((token, x) => x === tokenIndex ? { ...token, qty: token.qty - 1 } : token),
          }
          : player)
      }
    }
    // Purchase card for player, remove card from board, give card to player
    case (PLAYER_TAKE_CARD): {
      console.log('player can afford the card')
      // take card from board by removing from card array
      console.log(action)
      // this should put a new card on the board - how do we preserve the location? 
      // add to players cards
      // 
      return state
    }
    // Player reserve card: remove gold token from board, add gold token to player
    // Add card to players reserved card and remove from deck
    case (PLAYER_RESERVE_CARD): {
      // gold token index
      let tokenIndex = _.findIndex(state.tokens, function (token) { return token.gem === "GOLD" })
      // set card level to get from state array, remove reserved card, find next card
      // TO DO: replace card with next card to avoid rearrangement
      let cardIndex = _.findIndex(state.cards, function (card) { return card.id === action.card.id })
      const cloneCards = [...state.cards]
      cloneCards.splice(cardIndex, 1)

      return {
        ...state,
        cards: cloneCards,
        tokens: state.tokens.map((token, i) => i === tokenIndex ? { ...token, qty: token.qty - 1 } : token),
        players: state.players.map((player, i) => player.active ?
          {
            ...player,
            reserved: [...player.reserved, action.card],
            tokens: player.tokens.map((token, x) => x === tokenIndex ? { ...token, qty: token.qty + 1 } : token),
          }
          : player)
      }
    }
    // Find current player and choose the next player based on the number of players
    case (END_PLAYER_TURN): {
      console.log('ending player turn')
      let currentPlayer = _.findIndex(state.players, function (player) { return player.active })
      let nextPlayerIndex = currentPlayer + 1;
      if (!state.players[nextPlayerIndex]) {
        nextPlayerIndex = 0;
      }
      console.log(nextPlayerIndex)
      return {
        ...state,
        players: state.players.map((player, i) => ({
          ...player,
          active: i === nextPlayerIndex
        }))
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}