var Translator = (function(original){

  var lexicon = {
    merry: "frohe",
    christmas: "weihnachten",
    and: "uhn",
    happy: "gutes",
    new: "neues",
    year: "jahr",
    wish: "wunsch",
    wishes: "wünscht sich",
    bright: "hell",
    day: "tag",
    peace: "frieden",
    peaceful: "friedlich",
    earth: "erde",
    holiday: "freier",
    holidays: "freier tag",
    may: "kann",
    you: "du",
    your: "ihre",
    jesus: "jesus",
    satan: "der Satan",
    santa: "Weihnachtsmann",
    holly: "Stechpalme",
    jolly: "lustig",
    have: "haben",
    a: "ein"
  }

    original.transGerman = function() {

    var userInput = document.getElementById("input").value;
    var inputToArray = userInput.split(" ");
    var output = "";
    inputToArray.forEach(function(string){ //string refers to the indexed strings in the input array
      output += (lexicon[string] || string) + " ";
    });
    var outputArray = output.split(" "); outputArray.pop()
    var newOutput = "";
    outputArray.forEach(function(word){
      newOutput += word.charAt(0).toUpperCase()+word.slice(1) + " ";
    });
    
    
    // reduceArray = outputArray.reduce(function())

    document.getElementById("translatedText").innerHTML = newOutput;
  }


return original;
})(Translator||{});