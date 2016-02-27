var Translator = (function(originalTranslator) {
  var commentPair = {
  	HAVE: "tener",
  	A: "un",
    MERRY: "Alegre",
  	CHRISTMAS: "Navidad",
  	AND: "y",
  	A: "un",
  	HAPPY: "Contento",
  	NEW: "nuevo",
  	YEAR: "ano"
  }

  originalTranslator.transSpanish = function() {
    var caps= document.getElementById("input").value.toUpperCase(); 
    var translation = caps.split(" "); 
    var answer = "";

     for(i=0; i<translation.length; i++) {
     answer += commentPair[translation[i]]+ " ";
    }

    document.getElementById("translatedText").innerHTML = answer;
    }
  
  return originalTranslator;  
})(Translator||{});
