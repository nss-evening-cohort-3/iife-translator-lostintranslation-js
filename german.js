var Translator = (function(original){

  var lexicon = {
    merry: "frohe",
    christmas: "weihnachten",
    and: "uhn",
    happy: "gutes",
    new: "neues",
    year: "jahr"
  }

    original.transGerman = function() {

    var userInput = document.getElementById("input").value;
    var inputToArray = userInput.split(" ");
    var output = "";
    inputToArray.forEach(function(string){ //string refers to the indexed strings in the input array
      output += lexicon[string]
    });
    
    document.getElementById("translatedText").innerHTML = output;
  }


return original;
})(Translator||{});