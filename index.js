function dwarfRollCall(dwarves) {
  let NumDwarves = ''
  for (let i=0; i < dwarves.length; i++){
    NumDwarves += `${i+1}. ${dwarves[i]} `
  }
  return(NumDwarves)
}
function summonCaptainPlanet(planeteerCalls){
let calls = []
// for (var = i; i < planeteerCalls.length; i++)
planeteerCalls.forEach(function(element){
element = element.toUpperCase() +"!"
// calls.push(planeteerCalls[i] + "!")
calls.push(element)
})
return calls
}

function longPlaneteerCalls(words) {
  let hasLongwords = false
  // you can also use
  // for (var i = 0; i < words.length; i++) {
  //if (words[i].length > 4) {
  words.forEach(function(word) {
    if(word.length > 4){
    hasLongwords = true
  }
})
return hasLongwords
}

function findTheCheese (foods) {
  let cheese = ["camembert", "cheddar", "gouda"]
  for (let i = 0; i < foods.length; i++) {
    // for (var j = 0; j < cheeses.lengthl j++) {
    let cheeseIdx = cheese.indexOf(foods [i])
    if (cheeseIdx !== -1){
      // if (cheeses[j] === foods[i]) {
      return foods[i]
      }
    }
    return "no cheese!"
}
