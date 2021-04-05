const team = {
  _players: [
    {
      firstName: 'Mason',
      lastName: 'Edwards',
      age: 4
    },
    {
      firstName: 'Logan',
      lastName: 'Edwards',
      age: 29
    },
    {
      firstName: 'April',
      lastName: 'Merryman',
      age: 28
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Rams',
      teamPoints: 23,
      opponentPoints: 21
    },
    {
      opponent: 'Bulls',
      teamPoints: 202,
      opponentPoints: 184
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', '28');
team.addPlayer('Lisa', 'Leslie', '44');
team.addPlayer('Bugs', 'Bunny', '76');

team.addGame('Trex', 24, 144);

console.log(team.games);
