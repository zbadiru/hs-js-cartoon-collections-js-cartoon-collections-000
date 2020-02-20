function dwarfRollCall(dwarves) {
  let NumDwarves = ''
  for (let i=0; i < dwarves.length; i++){
    NumDwarves += `${i+1}. ${dwarves[i]} `
  }
  return(NumDwarves)
}

function summonCaptainPlanet(planeteerCalls){
let result = []
planeteerCalls.forEach(function(element){
element = element.toUpperCase() +"!"
result.push(element)
})
return result
}

function longPlaneteerCalls(words) {
  let flag = false
  words.forEach(function(word) {
    if(word.length > 4){
    flag = true
  }
})
return flag
}
function findTheCheese (foods) {
  let cheese = ["camembert", "cheddar", "gouda"]
  for (let i = 0; i < foods.length; i++) {
    let cheeseIdx = cheese.indexOf(foods [i])
    if (cheeseIdx !== -1){
      return foods[i]
      }
    }
    return "no cheese!"
}
