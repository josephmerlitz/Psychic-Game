var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomAlphabet = randomAlphabetSelector();

document.onkeyup = function (event) {

    for (var i = 0; i < alphabets.length; i++) {

        if (event.key == alphabets[i]) {

            var selectionsValue = document.getElementById("selections").textContent;
            document.getElementById("selections").textContent = selectionsValue + " " + event.key;
            document.getElementById("count").textContent++;

            if (event.key === randomAlphabet) {
                document.getElementById("wins").textContent++;
                document.getElementById("result").textContent = "New Game!";
                document.getElementById("selections").textContent = "";
                document.getElementById("left").textContent = 9;
                document.getElementById("count").textContent = 0;
                randomAlphabet = randomAlphabetSelector();
            }
            else {
                document.getElementById("left").textContent--;
                document.getElementById("result").textContent = "Wrong letter.";
                if (document.getElementById("left").textContent == 0) {
                    randomAlphabet = randomAlphabetSelector();
                    document.getElementById("losses").textContent++;
                    document.getElementById("left").textContent = 9;
                    document.getElementById("count").textContent = 0;
                    document.getElementById("selections").textContent = "";
                    document.getElementById("result").textContent = "New Game!";
                }
            }
        }

    }

};

function randomAlphabetSelector() {
    var randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    return randomAlphabet;
}

console.log(randomAlphabet)