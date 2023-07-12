function tournamentWinner(competitions, results) {
    let teamScore = {};
  
    for (let i = 0; i < competitions.length; i++) {
      let winner;
      if (results[i] === 0) {
        winner = competitions[i][1];
      } else {
        winner = competitions[i][0];
      }
  
      if (winner in teamScore) {
        teamScore[winner] += 3;
      } else {
        teamScore[winner] = 3;
      }
    }
  
    let maxKey = null;
    let maxValue = Number.NEGATIVE_INFINITY;
  
    for (let key in teamScore) {
      if (teamScore.hasOwnProperty(key)) {
        if (teamScore[key] > maxValue) {
          maxValue = teamScore[key];
          maxKey = key;
        }
      }
    }
  
    return console.log(maxKey);
  }
  
  let competitions = [
    ["HTML", "C#"],    // C#
    ["C#", "Python"],  // Python
    ["Python", "HTML"] // Python
  ];
  
  let results = [0, 0, 1];
  
  tournamentWinner(competitions, results);
  