import React from 'react';
import App from './App';
import {getRandomInt } from './helpers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// set up render function to test with Redux 
const render = (ui, initialStore = {}, options = {}) => {
  const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));
  const Providers = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Providers, ...options });
};


// Unit tests
test('getRandomInt', () => {
  expect(typeof getRandomInt(4) === "number").toBeTruthy();
});

it("game should start", () => {
  const { getByText, queryByText } = render(<App/>);
  expect(queryByText(/Save that fact/)).not.toBeInTheDocument();
  fireEvent.click(getByText(/Start Game/));
});


describe('validation', () => {
  describe('can buy card', () => {
    const f = require('app/validates').canBuyCard;
    it('should return true if player can buy a card', () => {
      assert.equal(f(player, cardCanAfford1), true);
      assert.equal(f(player, cardCanAfford2), true);
    });

    it('should return false if player cannot buy a card', () => {
      assert.equal(f(player, cardCantAfford), false);
    });
  });
});