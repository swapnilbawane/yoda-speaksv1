var textInput = document.querySelector("#textarea-input");
var textOutput = document.querySelector("#textarea-output");
var btnTranslate = document.querySelector("#btn-translate"); 

var sourceURL = "https://api.funtranslations.com/translate/yoda.json"; 

function getURL(text) { 
    var newURL = sourceURL + "?" + "text="+ text; 
    
    return newURL; 
}

function errorHandler(error) { 
    console.log("error occured",error);
    alert("something wrong with server! try again after some time."); 
}

function runOutput() {
    var userInput = textInput.value; 
   
    var sendURL = getURL(userInput); 
    
    fetch(sendURL)
    .then(response => response.json())
    .then(json => 
        {
            var translatedText = json.contents.translated; 
            textOutput.innerText = translatedText; 
        } 
        )
    .catch(errorHandler); 
}


btnTranslate.addEventListener("click",runOutput);


