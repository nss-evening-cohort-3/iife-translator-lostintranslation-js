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
    console.log(userInput);
  }
return original;
})(Translator||{});