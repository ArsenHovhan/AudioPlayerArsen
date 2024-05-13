let data = {
        title: ["Hit the Road Jack",
                "Lose Control"],
        song: ["music/Ray Charles Hit The Road Jack.mp3",
                "music/Missy Elliott, Ciara, Fatman Scoop  Lose Control.mp3"],
        poster: ["https://www.noviscore.com/sleeve255-hit-the-road-jack-ray-charles.jpg",
                "https://i1.sndcdn.com/artworks-ycpcO77e5r7x5zwN-3zUn0w-t500x500.jpg"]
}

let song = new Audio()

window.onload = function () {
        playSong()
}

let currentSong = 0
function playSong() {
        song.src = data.song[currentSong]
        let songTitle = document.getElementById("songTitle")
        songTitle.textContent = data.title[currentSong]
        let img = document.getElementsByClassName("row1")
        img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
        let main = document.getElementsByClassName("main")
        main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
        song.play()
}

function PlayOrPauseSong() {
        let play = document.getElementById("play")

        if (song.paused) {
                song.play()
                play.src = "images/pause.png"
        } else {
                song.pause()
                play.src = "images/play-button-arrowhead.png"
        }
}

song.addEventListener("timeupdate", function () {
        let position = song.currentTime / song.duration
        let fill = document.getElementsByClassName("fill")
        fill[0].style.marginLeft = position * 99 + "%"

})
