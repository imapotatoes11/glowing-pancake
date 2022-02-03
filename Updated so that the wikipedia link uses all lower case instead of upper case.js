unction wikipedia(animal) {

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
