import _ from 'lodash';

export function getRandomInt(max) {
    if (max instanceof Number) {
        return Math.floor(Math.random() * max);
    }
    else {
        return 0;
    }
    
  }

  export function shuffleCards(list) {
      return _.shuffle(list)
  }

// global function to check if player can afford card
export function checkCanAfford(card, player) {
    let cost = card.cost;
    for (let i = 0; i < cost.length; i++) {
        // if players tokens + cards with matching gem is less than the cost of the card, dont process
        let activePlayerGemCount = _.find(player.tokens, { "gem": cost[i].gem }).qty + _.find(player.tokens, { "gem": cost[i].gem }).qty
        if (activePlayerGemCount < cost[i].qty) {
                return false;
        }
    }
    return true;
}

// global function to check if player can reserve more cards
export function checkCanReserve(player) {
    if (player.reserved.length !== 3) {
        return true
    }
    else {
        return false;
    }
}