let data = {
        title: ["Hit the Road Jack",
                "Lose Control",
                "I Need a Dollar",
                "Sofia",
                "Staying Alive",
                "Quintessence",
                "My Funny Valentine",
                "In the wee small hours of the morning",
                "Theme from New York, New york",
                "Too Sweet",
                "Idea 10",
                " Moves like jagger",
                "Le Monde"],
        song: ["music/Ray Charles Hit The Road Jack.mp3",
                "music/Missy Elliott, Ciara, Fatman Scoop  Lose Control.mp3",
                "music/Allen Block - I Need a Dollar.mp3",
                "music/Alvaro Soler - Sofia (Alien Cut Remix.mp3",
                "music/Bee Gees - Stayin' Alive (From Saturday Night Fever Soundtrack).mp3",
                "music/Benjamin Clementine - Quintessence.mp3",
                "music/Chet Baker - My Funny Valentine.mp3",
                "music/Frank Sinatra - In The Wee Small Hourse Of The Morning.mp3",
                "music/Frank Sinatra (Фрэнк Синатра) - Theme From New York, New York.mp3",
                "music/Hozier - Too Sweet.mp3",
                "music/idea-10-gibran-alcocer.mp3",
                "music/Jger - Moves Like Jagger.mp3",
                "music/Richard Carter - Le Monde.mp3"],
        poster: ["https://i.pinimg.com/originals/b4/9c/4f/b49c4fa087955725a77d38c7ad4fe0eb.gif",
                "https://i1.sndcdn.com/artworks-ycpcO77e5r7x5zwN-3zUn0w-t500x500.jpg",
                "https://i1.sndcdn.com/artworks-000075266329-de57sj-t500x500.jpg",
                "https://i1.sndcdn.com/artworks-000186794435-w38x6a-t500x500.jpg",
                "https://www.forumtheatre.org/wp-content/uploads/2023/07/wm-bee_gees.jpg",
                "https://img.buzzfeed.com/buzzfeed-static/complex/szupfd3tywd3gjxaj5yw.jpg.jpg?output-format=jpg&output-quality=auto",
                "https://i.ytimg.com/vi/Are-c0BLyIg/maxresdefault.jpg",
                "https://upload.wikimedia.org/wikipedia/en/1/12/Wee_small_hours_album_cover_high_definition.jpg",
                "https://i.scdn.co/image/ab67616d0000b27398a6c897be7c828f3649ca12",
                "https://i.scdn.co/image/ab67616d00001e023e1b212546dac35443735241",
                "https://i.ytimg.com/vi/Z4S_XnQux70/maxresdefault.jpg",
                "https://i.scdn.co/image/ab67616d0000b273b1f5bd9af9febce7efcf6916",
                "https://i.scdn.co/image/ab67616d0000b2730fa556975ca8ec4bc9747157"]
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
        convertTime(Math.round(song.currentTime))
        if (song.ended) {
                next()
        }

})

function convertTime(seconds) {
        let currentTime = document.getElementsByClassName("currentTime")
        let min = Math.round(seconds / 60)
        let sec = Math.floor(seconds % 60)

        min = (min < 10) ? "0" + min : min
        sec = (sec < 10) ? "0" + sec : sec

        currentTime[0].textContent = min + ":" + sec

        totalTime(Math.round(song.duration))
}

function totalTime(seconds) {
        let currentTime = document.getElementsByClassName("currentTime")
        let min = Math.round(seconds / 60)
        let sec = Math.floor(seconds % 60)

        min = (min < 10) ? "0" + min : min
        sec = (sec < 10) ? "0" + sec : sec

        currentTime[0].textContent += "/" + min + ":" + sec


}

function prev() {
        currentSong--
        let play = document.getElementById("play")
        if (currentSong < 0) {
                currentSong = data.song.length - 1
        }

        playSong()
        play.src = "images/pause.png"
}

function next() {
        currentSong++

        let play = document.getElementById("play")
        if (currentSong == data.song.length) {
                currentSong =0
        }

        playSong()
        play.src = "images/pause.png"
}

function mute(){
        let mute = document.getElementById("mute")
        if(song.muted){
                song.muted = false
                mute.src = "images/volume.png"
        }else {
                song.muted = true
                mute.src = "images/volume-mute.png"
        }
}

function decrease(){
        let mute = document.getElementById("mute")
        song.volume -= 0.2
        if(song.volume < 0.2){
                mute.src = "images/volume-mute.png"
        }
}

function increase(){
        let mute = document.getElementById("mute")
        song.volume += 0.2
        if(song.volume >= 0.2){
                mute.src = "images/volume.png"
        }
}