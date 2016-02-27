var Translator = (function(original){

  var lexicon = {
    MERRY: "frohe",
    CHRISTMAS: "weihnachten",
    AND: "uhn",
    HAPPY: "gutes",
    NEW: "neues",
    YEAR: "jahr"
  }

    original.transGerman = function() {

    var userInput = document.getElementById("input").value.toUpperCase();
    var inputToArray = userInput.split(" ");
    var output = "";
    inputToArray.forEach(function(string){ //string refers to the indexed strings in the input array
      output += (lexicon[string] || string) + " "
    });
      document.getElementById("translatedText").innerHTML = output;
  }


return original;
})(Translator||{});