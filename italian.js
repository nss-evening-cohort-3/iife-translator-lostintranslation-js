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

    //Capitalize the first letter function
    var resultArray = result.split(" ");
    
      //delete the last " " string
    resultArray.pop();

    var capFirstArray=[];
    for (i=0; i<resultArray.length; i++){
    capFirstArray.push(resultArray[i].charAt(0).toUpperCase()+ resultArray[i].slice(1).toLowerCase());
    }
      //join the array into string and add an "!" mark.
    var endResult=capFirstArray.join(" ")+"!";

    document.getElementById("translatedText").innerHTML = endResult;
    }
  
  return originalTranslator;  
})(Translator||{});