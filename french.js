var Translator = (function(originalTranslator) {

  var frenchLexicon = {
    merry: "Joyeux",
    christmas: "Noël",
    happy: "Bon",
    holidays: "vacances",
    super: "supérieur",
    baby: "bébé",
    jesus: "Jésus",
    day: "jour",
    and: "et",
    new: "Nouveau",
    year: "année",
  };
  
  originalTranslator.transFrench = function(){

    var originalText= document.getElementById("input").value.toLowerCase(); 
    var transArray = originalText.split(" ");
    var translatedGreeting = "";

    for(i=0; i<transArray.length; i++) {
        translatedGreeting += frenchLexicon[transArray[i]]+ " ";
      };

    document.getElementById("translatedText").innerHTML = translatedGreeting;
    }
  

  return originalTranslator;
} (Translator || {}));