console.log('Rock, Paper and Scissors');

const computerPlay = () => {
  let randomValue = Math.floor(Math.random() * 100);
  let computerMove;

  if (randomValue <= 33) {
    computerMove = 'Rock';
  } else if (randomValue >= 66) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
  return computerMove;
};

const playerPlay = move => {
  return move.charAt(0).toUpperCase() + move.slice(1).toLowerCase();
};

const checkTie = (computerMove, playerMove) => {
  return computerMove === playerMove ? true : false;
};

const checkRockWin = computerMove => {
  if (computerMove === 'Paper') {
    return 'You Lose! Paper Beats Rock!';
  } else if (computerMove === 'Scissors') {
    return 'You Win! Rock Beats Scissors!';
  }
};

const checkPaperWin = computerMove => {
  if (computerMove === 'Scissors') {
    return 'You Lose! Scissors Beats Paper!';
  } else if (computerMove === 'Rock') {
    return 'You Win! Paper Beats Rock!';
  }
};

const checkScissorsWin = computerMove => {
  if (computerMove === 'Paper') {
    return 'You Win! Scissors Beats Paper!';
  } else if (computerMove === 'Rock') {
    return 'You Lose! Rock Beats Scissors!';
  }
};

const calculateWinner = (computerMove, playerMove) => {
  if (checkTie(computerMove, playerMove)) {
    return 'Draw!';
  }

  let result;

  if (playerMove === 'Rock') {
    result = checkRockWin(computerMove);
  } else if (playerMove === 'Paper') {
    result = checkPaperWin(computerMove);
  } else if (playerMove === 'Scissors') {
    result = checkScissorsWin(computerMove);
  } else {
    result = 'Move not allowed!';
  }

  return result;
};

const playRound = (computerMove, playerMove) => {
  console.log(`Player Move : ${playerMove} Computer Move : ${computerMove}`);
  return calculateWinner(computerMove, playerMove);
};

const awardPoints = (computerPoints, playerPoints, result) => {
  let keyword = result.split(' ');

  if (keyword[1] === 'Win!') {
    return [++playerPoints, computerPoints];
  } else if (keyword[1] === 'Lose!') {
    return [playerPoints, ++computerPoints];
  } else {
    return [playerPoints, computerPoints];
  }
};

const game = () => {
  let playerPoints = 0;
  let computerPoints = 0;
  let result;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    result = playRound(computerPlay(), playerPlay(prompt('Make Your Move')));
    console.log(result);
    [playerPoints, computerPoints] = awardPoints(
      computerPoints,
      playerPoints,
      result,
    );
    console.log(
      `Player Points : ${playerPoints} \nComputer Points : ${computerPoints}`,
    );
  }

  playerPoints === computerPoints
    ? console.log('Draw Match!')
    : playerPoints > computerPoints
    ? console.log('You Won!')
    : console.log('The Computer Won!');
};

game();
