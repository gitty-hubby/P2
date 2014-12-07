var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
	var newNamesList = [];
	var arrayLength = names.length;
	for (var i = 0; i < arrayLength; i++) {
        var fname = names[i].split(/[ ]+/).shift();
		var lname = names[i].split(/[ ]+/).pop();
        newNamesList.push(lname + ", " + fname);
    }

	return newNamesList.sort(function(a, b){
		var nameA = a.toLowerCase();
		var nameB = b.toLowerCase();
		if (nameA < nameB) { 
            return -1; 
		}
		
        if (nameA > nameB) {
            return 1;
		} else {
            return 0;
        }    
    });
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));