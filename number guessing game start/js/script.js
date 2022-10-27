'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowWrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
