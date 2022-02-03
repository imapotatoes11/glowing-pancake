let anchor = document.createElement("a")
let text = document.createTextNode("Link to view more information")
anchor.appendChild(text)
let counter = 0;

animals = [['Acadian Redfish', 'Acadian Whitefish', 'American Bison  ', 'American Burying Beetle', 'Atlantic Cod', 'Atlantic Halibut', 'Bachman\'s Wood Warbler', 'Barndoor Winter Skate', 'Basking Shark', 'Beluga', 'Bendire\'s Thrasher', 'Bicknell\'s Thrush', 'Black-footed Albatross', 'Black-footed Ferret  ', 'Black-tailed Godwit', 'Bloater', 'Bocaccio Rockfish', 'Boreal Felt Lichen', 'Buff-breasted Sandpiper', 'Buller\'s Shearwater', 'Cape Shark', 'Cascades Frog', 'Cassin\'s Finch', 'Cerulean Warbler', 'Copper Redhorse', 'Cougar  ', 'Dakota Skipper', 'Doronomyrmex pocahontas', 'Dwarf Wedgemussel', 'Eastern Sand Darter', 'Emperor Goose', 'Eskimo Curlew', 'Eurasian Curlew', 'Formicoxenus quebecensis', 'Formicoxenus provancheri', 'Furbish Lousewort', 'Golden-winged Warbler', 'Great White Shark', 'Greater Prairie-chicken', 'Greater Sage-grouse', 'Green Sturgeon', 'Greenland Shark', 'Gulf Sturgeon', 'Haddock', 'Harpagoxenus canadensis', 'Heermann\'s Gull', 'Henslow\'s Sparrow', 'Hogfish', 'Hooded Seal', 'Hungerford\'s Crawling Water Beetle', 'Ivory Gull', 'Kanab Amber Snail', 'Karner Blue Butterfly  ', 'Killer Whale  ', 'Kirtland\'s Wood Warbler', 'Kittlitz\'s Murrelet', 'Kiyi', 'Laysan Albatross', 'Least Tern', 'Leptothorax faberi', 'Lined Seahorse', 'Liver-oil Shark', 'Marbled Murrelet', 'Mckay\'s Bunting', 'Mottled Petrel', 'Mountain Plover', 'Myrmica quebecensis', 'Myrmica lampra', 'Narwhal  ', 'North Atlantic Right Whale', 'North Pacific Right Whale', 'Northern Abalone', 'Northern Fur Seal', 'Northern Swift Fox  ', 'Oregon Spotted Frog', 'Pink-footed Shearwater', 'Piping Plover', 'Platanthera praeclara', 'Polar Bear', 'Portuguese Dogfish', 'Red-headed Woodpecker', 'Red-legged Kittiwake', 'Rocky Mountain Capshell', 'Saltmarsh Sharp-tailed Sparrow', 'Salvelinus confluentus', 'Sea Otter', 'Short-tailed Albatross', 'Shortjaw Cisco', 'Shortnose Cisco', 'Shortnose Sturgeon', 'Shortspine Thornyhead', 'Southern Bluefin Tuna', 'Spoon-billed Sandpiper  ', 'Spotted Owl', 'Spotted Turtle', 'Sprague\'s Pipit', 'Starlet Sea Anemone', 'Steller Sea-lion  ', 'Tubercled Blossom Pearlymussel', 'Vancouver Island Marmot', 'Wandering Salamander', 'Western Toad', 'White Sturgeon', 'Whitebark Pine', 'Whooping Crane', 'Wolverine', 'Wood Turtle', 'Xantus\'s Murrelet', 'Yellow Lampmussel', 'Yellowtail Flounder '],
 ["Wolf", "Tiger"],
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