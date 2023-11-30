let countdown;
let intervalloTimer;
let stato = document.getElementById("Stato");
let start = document.getElementById("start");

function startTimer(){
    document.getElementById("countdown").style.color = "white";
    stato.style.color = "#0CA10C";
    stato.innerHTML = "Hai iniziato il timer."
    stato.style.display = "block";
    setTimeout(function () {
        stato.style.display = "none";
    }, 2000)
    iniziaTimer();
}

function iniziaTimer() {

    stato.style.color = "white";
    stato.innerHTML = "Hai iniziato il timer."
    stato.style.display = "block";
    setTimeout(function () {
        stato.style.display = "none";
    }, 2000)
    document.getElementById("countdown").style.color = "white";

    if (!countdown) {

        if (!document.getElementById("inputTimer").value) {
            alert("Inserisci un valore nel timer!!");
            return;
        }
        countdown = parseInt(document.getElementById("inputTimer").value);
    }

    document.getElementById("countdown").innerHTML = countdown;

    intervalloTimer = setInterval(function () {

        countdown--;

        document.getElementById("countdown").innerHTML = countdown;
        

        if (countdown === 0) {
            clearInterval(intervalloTimer);

        }

    }, 1000);

}
function stoppaIntervallo() {
    clearInterval(intervalloTimer);
    stato.style.color = "#D61111";
    stato.innerHTML = "Hai fermato il timer."
    stato.style.display = "block";
    document.getElementById("countdown").style.color = "#D61111";
}

function resetTimer() {
    stato.style.color = "#9C0CA1";
    stato.innerHTML = "Hai resettato il timer."
    stato.style.display = "block";
    setTimeout(function () {
        stato.style.display = "none";
    }, 2000)
}

function resetIntervallo() {
    clearInterval(intervalloTimer);
    countdown = null;
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("inputTimer").value = "";
    setTimeout(resetTimer(),1000);
   
}