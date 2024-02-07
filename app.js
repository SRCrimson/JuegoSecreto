let tried = [];
let attempt = 0;
let target = randomNumberGenerator(10);

updateText('h1', 'The Guessing Game!');
updateText('.texto__parrafo', 'Choose a number from 1 to 10:');

function updateText(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

function randomNumberGenerator(limit) {
    let generated = Math.floor(Math.random()*limit)+1;
    
    if (tried.length === limit) {
        updateText(".texto__parrafo","you've guessed all the possible numbers. \n Refresh the page to play again!");
        document.getElementById("iniciar").setAttribute("disabled","true");
        document.getElementById("reiniciar").setAttribute("disabled","true");
    }
    else if (tried.includes(generated)) { 
        return randomNumberGenerator(limit);
    }
    
    tried.push(generated);
    // console.log(tried);
    return generated;
    }


function cleanUp(IdTag) {
    document.getElementById(IdTag).value = '';
}

function initialConditions() {
    updateText('h1', 'The Guessing Game!');
    updateText('.texto__parrafo', 'Choose a number from 1 to 10:');
    target = randomNumberGenerator(10);
    attempt = 0;
}

function restart() {
    cleanUp('numeroUsuario');
    initialConditions();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function intentoUsuario(){
    let givenNumberGetter = document.getElementById("numeroUsuario"); 
    let givenNumber = parseInt(givenNumberGetter.value); 
    attempt ++;
    
    if (givenNumber === target) {
        updateText('p', `You got it! It took you ${attempt} ${attempt == 1? "try":"tries"}`)
        document.getElementById("reiniciar").removeAttribute("disabled") 
    }
    else if (givenNumber < target) {
        updateText('p', "Try Higher!")
    }      
    else if (givenNumber > target) {
        updateText('p', "Try Lower!")
    }

    cleanUp('numeroUsuario')
}