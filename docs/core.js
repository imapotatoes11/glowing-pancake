let anchor = document.createElement("a")
let text = document.createTextNode("Link to view more information")
anchor.appendChild(text)
let counter = 0;

animals = [['Sei whale', 'Blue whale', 'North Atlantic right whale', 'North Pacific right whale', 'Wolverine', 'Vancouver island marmot', 'Caribou ', 'Fin whale', 'Wood bison', 'Sea otter', 'Haida ermine', 'Whooping crane', 'Eskimo curlew', 'Sprague’s pipit', 'Marbled murrelet', 'Short tailed albatross', 'Pink-footed shearwater', 'Spotted turtle', 'Blue racer ', 'Leatherback sea turtle', 'Blanding\'s turtle', 'Oregon spotted frog'],
 ['stuff','stuff'],
  ["Fox", "American Badger"],
   ["Bob", "Alabama", "Alabama"]]
countries = ["Canada", "USA", "Mexico","Bob"]

function wikipedia(animal) {

array = []

for (let i = 0; i < animal.length; i++) {
 
  array.push(animal[i])
 
  }
 
  for (let i = 0; i < array.length; i++) {
 
  if (array[i] == " ") {
   
    array[i] = "_"
   
    }
 
  }
 
  let link = "https://en.wikipedia.org/wiki/" + array.join("").toLowerCase()
 
return link

}

function run(count, num) {

  if (count == animals[num].length) {

    return 0

  }
  document.getElementById('hello').innerHTML += animals[num][count] + " "
    anchor.href = wikipedia(animals[num][count])
    document.getElementById('hello').appendChild(anchor)
    document.getElementById('hello').innerHTML += "<br>"
 
    run(count+1, num)

}

function counting() {

 let number = 0
 let country = document.getElementById("countries").value
 for (let i = 0; i < countries.length; i++) {
   
    if (country == countries[i]) {
     
      number = i
     
      }
    }
 counter++
  if (counter == 1) {
 
    run(0, number)

  } else if (counter != 1) {

    document.getElementById('hello').innerHTML = " "
    run(0,number)

  }

}