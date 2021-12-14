'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No Selection';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = `${guess > secretNumber ? 'Too High' : 'Too Loo'}`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You Lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   // if (score > 1) {
  //   //   message.textContent = 'Too Loo';
  //   //   score--;
  //   //   document.querySelector('.score').textContent = score;
  //   // } else {
  //   //   message.textContent = 'You Lost';
  //   //   document.querySelector('.score').textContent = 0;
  //   // }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message.textContent = 'Start guessing....';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
