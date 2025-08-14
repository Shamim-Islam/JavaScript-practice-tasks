// Problem-03 : FIFA Best Team Award

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 < team2) {
    return player1.name;
  } else if (team1 === team2) {
    return "Tie";
  } else {
    return player2.name;
  }
}

// TestCase - 1
const teams = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
); // Brazil

// TestCase - 2
const teams2 = bestTeam(
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
);

// TestCase - 3
const teams3 = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  { name: "France", foul: 10, cardY: 2, cardR: 1 }
);

// TestCase - 4
const teams4 = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  "France"
);

console.log(teams, teams2, teams3, teams4);
