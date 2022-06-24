// Load data
var request = new XMLHttpRequest();
request.open("GET", "./tarot.json", false);
request.send(null);
var jsonData = JSON.parse(request.responseText);


function title_case(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
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
    }

    return array;
}


function get_card() {
    temp = shuffle(jsonData.tarot_interpretations)[0];

    document.getElementById("main_text").innerHTML = "Card: " + title_case(temp.name);
    document.getElementById("sup_text").innerHTML = "Meanings:</br> - " + temp.meanings.light.join("</br> - ") + ". " + temp.meanings.shadow.join("</br> - ");

    // Make button disappear
    document.getElementById("disappear").style.display="none"; 
}
// get_card();