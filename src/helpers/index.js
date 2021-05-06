import _ from 'lodash';

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  export function shuffleCards(list) {
      return _.shuffle(list)
  }