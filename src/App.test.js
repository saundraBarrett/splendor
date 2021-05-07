import React from 'react';
import App from './App';
import {getRandomInt } from './helpers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { render , fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PlayerSetup from '../src/components/setup/playerSetup';
import { mount } from 'enzyme';

// Unit test
test('random integer need to pass back number', () => {
  expect(typeof getRandomInt(4) === "number").toBeTruthy();
  expect(typeof getRandomInt(undefined) == "number").toBeTruthy();
  expect(typeof getRandomInt("string") == "number").toBeTruthy();
  expect(typeof getRandomInt("0") == "number").toBeTruthy();
});

// Integration Test
// TODO: Write tests for checking global afford and reserve functions
test('player name not blank', () => {
  function doneUpdatingPlayer() {
    console.log('Done Updating Player')
  };
  const utils = render(<PlayerSetup i={1} doneUpdatingPlayer={doneUpdatingPlayer}/>)
  const input = utils.getByLabelText('Player Name:')
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBeEmpty()
})