document.oncontextmenu = function () {
    window.alert("no click!!");
    play()
    window.location.href = "https://raise-tech.net/instructors";
    return false;
}

var music = new Audio();
music.preload = "auto";
music.src = "nc41828.wav";
music.load();

music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
}, false);

function play() {
    music.loop = true;
    music.play();
}