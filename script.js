document.getElementById("playButton1").addEventListener("click", function () {
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");

    if (video2.paused === false) {
        video2.pause();
        document.getElementById("playButton2").innerText = "Play Video 2";
    }

    if (video1.paused) {
        video1.play();
        this.innerText = "Pause Video 1";
    } else {
        video1.pause();
        this.innerText = "Play Video 1";
    }
});

document.getElementById("playButton2").addEventListener("click", function () {
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");

    if (video1.paused === false) {
        video1.pause();
        document.getElementById("playButton1").innerText = "Play Video 1";
    }

    if (video2.paused) {
        video2.play();
        this.innerText = "Pause Video 2";
    } else {
        video2.pause();
        this.innerText = "Play Video 2";
    }
});

