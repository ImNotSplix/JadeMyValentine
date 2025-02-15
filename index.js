const answerYes = document.querySelector('input[value="Yes"]');
const answerNo  = document.querySelector('input[value="No"]');
const please    = document.getElementById("please-p"); 

function increaseFontSize(element, increment) {

    const currentFontSize = window.getComputedStyle(element).fontSize;
    const newFontSize = parseFloat(currentFontSize) + increment; 
    element.style.fontSize = newFontSize + 'px';
    
}

answerYes.onclick = function(){
    please.textContent = "Thank you :)";
    please.scrollIntoView({behavior: 'smooth'});
    answerNo.remove();
    answerYes.remove();
}

answerNo.onclick = function(){
    please.textContent = "Please :(";
    please.scrollIntoView({behavior: 'smooth'});
    increaseFontSize(please, 5);
}