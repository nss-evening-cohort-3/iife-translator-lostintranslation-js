//TRANSLATE FUNCTION
document.getElementById("transbtn").addEventListener("click", translate);

function translate(){
  if(document.getElementById("french").checked){
    Translator.transFrench();
  }
  else if(document.getElementById("italian").checked){
    Translator.transItalian();

  }
  else if(document.getElementById("spanish").checked){
  Translator.transSpanish();
  }
  else {
    Translator.transGerman(); 
  }
}

//CLEAR FUNCTION
document.getElementById("clr").addEventListener("click", clear);

function clear(){
  //to clear the input value
  document.getElementById("input").value="";

  //to clear the radio button value
  var ele=document.getElementsByName("lang");
  for (i=0;i<ele.length;i++){
    ele[i].checked = false;

  //to clear the output
  document.getElementById("translatedText").innerHTML = "";
  }
}