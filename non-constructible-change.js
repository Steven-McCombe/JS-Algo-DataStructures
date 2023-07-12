function nonConstructibleChange(coins) {
    // Write your code here.
    let minChange = 0
    coins.sort(function(a, b) {return a - b;});
      if (coins[0] != 1){
       return minChange += 1
      }
  console.log(coins)
    for (let i = 0; i < coins.length; i++) {
      
      if (coins[i] > minChange + 1) {
          return console.log(minChange + 1)
      } else {
        minChange += coins[i]
      }
    }
    
    return console.log(minChange + 1) ;
  }
  
  
let coins = [5, 6, 1, 1, 2, 3, 4, 9] // 32

nonConstructibleChange(coins)