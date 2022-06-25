// Load data
var request = new XMLHttpRequest();
request.open("GET", "./tarot-img_onl.json", false);
request.send(null);
var jsonData = JSON.parse(request.responseText);
var tarot = jsonData.tarot_interpretations; // Main



function title_case(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    };
    return str.join(" ");
}


function sort_by_key(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };

    return array;
}


function is_reversed() {
    // light: normal
    // shadow: reversed
    var num = Math.floor((Math.random() * 100) + 1);
    if (num < 80) {
        return "";
    } else {
        document.getElementById("tcard").classList.add("reverse");
        return " (Reversed)";
    };
}


function get_card() {
    temp = shuffle(tarot)[0]; // Card deck

    document.getElementById("main_text").innerHTML = "Card: " + title_case(temp.name) + is_reversed();
    document.getElementById("sup_text").innerHTML = "<strong>Meanings:</strong></br> - " + temp.meanings.light.join("</br> - ") + "</br></br>Reversed:</br> - " + temp.meanings.shadow.join("</br> - ");
    document.getElementById("tcard").src = temp.img

    // Make button disappear
    document.getElementById("disappear").style.display="none"; 
}
// get_card();