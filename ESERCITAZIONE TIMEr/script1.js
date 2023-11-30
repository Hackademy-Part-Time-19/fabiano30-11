let countdown;
let intervalloTimer;



window.onload = function () {

    countdown = 6;

            intervalloTimer = setInterval(function () {

                countdown--;

                document.getElementById("countdown").innerHTML = countdown;
                if (countdown == 0) {
                    clearInterval(intervalloTimer);
                    document.getElementById("box").classList.remove("box");
                    document.getElementById("box").classList.add("box-scale");
                        }

            }, 1000);

}
