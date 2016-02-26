var Translator = (function(originalTranslator) {
  var lexicon = {
    merry: "help",
    christmas: "",
    happy: "",
    holidays: "",
    super: "",
    baby: "",
    jesus: "",
    day: ""
  };
  
  originalTranslator.getLexicon = function() {
    return lexicon;
  };
  return originalTranslator;
} (Translator || {}));