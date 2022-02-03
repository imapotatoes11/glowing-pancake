let anchor = document.createElement("a")
let text = document.createTextNode("Link to view more information")
anchor.appendChild(text)
let counter = 0;

//animals = ["google", "https://www.google.com/", "youtube", "https://www.youtube.com/"]
animals = ["ok", "https://en.wikipedia.org/wiki/2", "ok alex", "https://en.wikipedia.org/wiki/4"]

function run(count) {

  if (count == animals.length) {

    return 0

  }
  if (count % 2 == 0) {
    document.getElementById("hello").innerHTML += animals[count] + " "
  } else if (count % 2 != 0) {
    anchor.href = animals[count]
    document.getElementById('hello').appendChild(anchor)
    document.getElementById('hello').innerHTML += "<br>"
  }
    run(count+1)

}

function counting() {

  counter++
  if (counter == 1) {

    run(0)

  } else if (counter != 1) {

    document.getElementById('hello') = " "
    run(0)

  }

}