var Translator = (function(originalTranslator){

  var pair = {
  HAVE: "avere",
  A: "un",
  MERRY: "allegro",
  CHRISTMAS: "natale",
  AND: "e",
  HAPPY: "contento",
  NEW: "nuovo",
  YEAR:"anno"
  }

    originalTranslator.transItalian = function(){
    var capValue= document.getElementById("input").value.toUpperCase(); //capture input value, and converts into all UPPERCASE
    var transArray = capValue.split(" "); //convert input string into array

    var result = "";
    for(i=0; i<transArray.length; i++) {
    result += (pair[transArray[i]]|| transArray[i])+ " ";
    }

    
    document.getElementById("translatedText").innerHTML =result;
    }
  
  return originalTranslator;  
})(Translator||{});