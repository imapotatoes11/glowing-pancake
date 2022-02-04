let anchor = document.createElement("a")
let text = document.createTextNode("Link to view more information")
anchor.appendChild(text)
let counter = 0;

animals = [['Sei whale', 'Blue whale', 'North atlantic right whale', 'North pacific right whale', 'Wolverine', 'Vancouver island marmot', 'Caribou ', 'Caribou have four stomachs', 'Fin whale', 'Wood bison', 'Sea otter', 'Haida ermine', 'Whooping crane', 'Eskimo curlew', 'Sprague\'s pipit', 'Marbled murrelet', 'Short tailed albatross', 'Pink-footed shearwater', 'Spotted turtle', 'Blue racer', 'Leatherback sea turtle', 'Blanding\'s turtle', 'Oregon spotted frog', 'Atlantic whitefish', 'Shortnose cisco', 'Copper redhorse', 'Atlantic salmon', 'Northern wolffish', 'Lake lamprey', 'Rusty patched bumblebee', 'Hungerford\'s crawling water beetle', 'Northern barrens tiger beetle', 'Mottled duskywing', 'Hine\'s emerald', 'Dakota skipper', 'Poweshiek skipperling', 'Tubercled blossom', 'Snuffbox mussel', 'Pinto abalone', 'Round hickorynut', 'Banff springs snail', 'Salamander mussel', 'Rayed bean'],
['Caribou', 'Gray bat', 'Hawaiian hoary bat', 'North Atlantic right whale', 'Sei whale', 'Whooping crane', 'Atlantic bluefin tuna', 'Loggerhead sea turtle', 'Red wolf', 'California condor', 'Bog turtle', 'American burying beetle', 'Alabama beach mouse', 'Amargosa vole', 'Black-footed ferret', 'Anastasia island mouse', 'Florida bonneted bat', 'Florida panther', 'Florida salt marsh vole', 'Florida man', 'Fresno kangaroo rat', 'Giant kangaroo rat', 'Gray bat', 'Gulf Coast jaguarundi', 'Key deer', 'Key largo cotton mouse', 'Key largo wooden rat'],
  ["Disambiguation", "Mexique", "Maracas"],
   ["Bob", "Alabama", "Lioglyphostoma aguadillanum"]]
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