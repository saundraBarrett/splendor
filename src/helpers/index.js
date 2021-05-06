import _ from 'lodash';

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  export function shuffleCards(list) {
      return _.shuffle(list)
  }


export function checkCanAfford(card, player) {
    console.log(player)
    console.log(card)
    console.log('checking if I can afford it')
    let cost = card.cost;
    for (let i = 0; i < cost.length; i++) {
        // if players tokens + cards with matching gem is less than the cost of the card, dont process
        let activePlayerGemCount = _.find(player.tokens, { "gem": cost[i].gem }).qty + _.find(player.tokens, { "gem": cost[i].gem }).qty
        console.log(activePlayerGemCount)
        if (activePlayerGemCount < cost[i].qty) {
                return false;
        }
    }
    return true;
}