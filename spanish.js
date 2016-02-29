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
  	YEAR: "ano",
    HOLY: "¡ santo",
    SHIT: "mierda",
    WHERE: "donde",
    IS: "es",
    THE: "el",
    TYLENOL: "tylenol",
  }

  originalTranslator.transSpanish = function() {
    var caps= document.getElementById("input").value.toUpperCase();
    console.log(caps)  
    var translation = caps.split(" "); 
    var answer = "";

     for(i=0; i<translation.length; i++) {
      if (commentPair[translation[i]] === undefined) {
        answer += translation[i].toLowerCase() + " ";    
        } else {
        answer += commentPair[translation[i]]+ " ";  
      }
     
    }

  

    

    document.getElementById("translatedText").innerHTML = answer;
    }


  
  return originalTranslator;  
})(Translator||{});
