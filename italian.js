var Translator = (function(originalTranslator){

  var pair = {
  MERRY: "allegro",
  CHRISTMAS: "natale",
  AND: "e",
  HAPPY: "contento",
  NEW: "nuovo"
  }

    originalTranslator.transItalian = function(){
    var capValue= document.getElementById("input").value.toUpperCase(); //capture input value, and converts into all UPPERCASE
    var transArray = capValue.split(" "); //convert input string into array

    var result = "";
    for(i=0; i<transArray.length; i++) {
    result += pair[transArray[i]]+ " ";
    }

    document.getElementById("translatedText").innerHTML =result;
    }
  
  return originalTranslator;  
})(Translator||{});