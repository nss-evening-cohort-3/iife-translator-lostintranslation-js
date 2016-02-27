var Translator = (function(originalTranslator) {

  var frenchLexicon = {
    merry: "Joyeux",
    christmas: "Noël",
    happy: "Bon",
    holidays: "Vacances",
    super: "Supérieur",
    baby: "Bébé",
    jesus: "Jésus",
    day: "Jour",
    and: "et",
    new: "Nouveau",
    year: "Année",
    tree: "Arbre",
    mistletoe: "le Gui",
    meet: "rencontrer",
    me: "moi",
    under: "sous"
  };
  
  originalTranslator.transFrench = function(){

    var originalText= document.getElementById("input").value.toLowerCase(); 
    var transArray = originalText.split(" ");
    var translatedGreeting = "";
    
    transArray.forEach(function(engWord) {
      translatedGreeting += (frenchLexicon[engWord] || engWord) + " ";
    });

    var newTransArray = translatedGreeting.split(" "); newTransArray.pop()
    var newTransGreeting = "";

    newTransArray.forEach(function(word){
      newTransGreeting += word.charAt(0).toUpperCase()+word.slice(1) + " ";
    });

    document.getElementById("translatedText").innerHTML = newTransGreeting;
    }
  

  return originalTranslator;
} (Translator || {}));