let anchor = document.createElement("a")
let text = document.createTextNode("Link to view more information")
anchor.appendChild(text)
anchor.setAttribute("target","_blank")
let counter = 0;

animals = [['Sei whale', 'Blue whale', 'North atlantic right whale', 'North pacific right whale', 'Wolverine', 'Vancouver island marmot', 'Fin whale', 'Wood bison', 'Sea otter', 'Haida ermine', 'Whooping crane', 'Eskimo curlew', 'Sprague\'s pipit', 'Marbled murrelet', 'Short tailed albatross', 'Pink-footed shearwater', 'Spotted turtle', 'Blue racer', 'Leatherback sea turtle', 'Blanding\'s turtle', 'Oregon spotted frog', 'Atlantic whitefish', 'Shortnose cisco', 'Copper redhorse', 'Atlantic salmon', 'Northern wolffish', 'Lake lamprey', 'Rusty patched bumblebee', 'Hungerford\'s crawling water beetle', 'Northern barrens tiger beetle', 'Mottled duskywing', 'Hine\'s emerald', 'Dakota skipper', 'Poweshiek skipperling', 'Tubercled blossom', 'Snuffbox mussel', 'Pinto abalone', 'Round hickorynut', 'Banff springs snail', 'Salamander mussel', 'Rayed bean'],
['Caribou', 'Gray bat', 'Hawaiian hoary bat', 'North Atlantic right whale', 'Sei whale', 'Whooping crane', 'Atlantic bluefin tuna', 'Loggerhead sea turtle', 'Red wolf', 'California condor', 'Bog turtle', 'American burying beetle', 'Alabama beach mouse', 'Amargosa vole', 'Black-footed ferret', 'Anastasia island mouse', 'Florida bonneted bat', 'Florida panther', 'Florida salt marsh vole', 'Florida man', 'Fresno kangaroo rat', 'Giant kangaroo rat', 'Gray bat', 'Gulf Coast jaguarundi', 'Key deer', 'Key largo cotton mouse', 'Key largo wooden rat'],
["Disambiguation", "Mexique", "Maracas", "Bob", "Joe"]]
countries = ["Canada", "USA", "Mexico","Bob"]

let copy = []
function generate(country) {

    let array = []
    for (let i = 0; i < 5; i++) {

        array.push(Math.floor((Math.random() * animals[country].length)))

    }
    let t = 0
    for (let i = 0; i < array.length; i++) {  
        for (let j = i+1; j < array.length; j++) {  
            if (array[i] == array[j])
                t = 1
        }
    }
   
    if (t == 1 || array.length == 0) {
       
        generate(country)
       
    } else if (t == 0 && array.length != 0) {
       
        copy = array
       
    }
}

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

function run(num, bob) {

  if (bob == 0) {  
   
  generate(num);
  for (let i=0;i<copy.length;i++) {
    document.getElementById('hello').innerHTML += animals[num][copy[i]] + " "
    anchor.href = wikipedia(animals[num][copy[i]])
    document.getElementById('hello').appendChild(anchor)
    document.getElementById('hello').innerHTML += "<br>"
  }
  } else if (bob == 1) {
 
    for (let i = 0; i < animals[num].length; i++) {
   
    document.getElementById('hello').innerHTML += animals[num][i] + " "
    anchor.href = wikipedia(animals[num][i])
    document.getElementById('hello').appendChild(anchor)
    document.getElementById('hello').innerHTML += "<br>"
   
    }
   
  }

}

function counting(a) {

 let number = 0
 let country = document.getElementById("countries").value
 for (let i = 0; i < countries.length; i++) {
   
    if (country == countries[i]) {
     
      number = i
     
      }
    }
 counter++
  if (counter == 1) {
 
    run(number, a)

  } else if (counter != 1) {

    document.getElementById('hello').innerHTML = " "
    run(number, a)

  }

}
