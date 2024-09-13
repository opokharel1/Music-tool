console.log("Welcome to DivinePlay")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Kara Agree Basate Laxmi-Vakratunda Mahakaya-Kara Charana Kritam.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let song = Array.from(document.getElementsByClassName('song'));

let songArrray = [
    {songName: "Morning mantra ", filePath:"songs/Kara Agree Basate Laxmi-Vakratunda Mahakaya-Kara Charana Kritam.mp3", coverPath:"cover/ganesha.png"},
    {songName: "Ganesha Pancharatnam ", filePath:"songs/Ganesha Pancharatnam.mp3", coverPath:"cover/ganpati.jpg"},
    {songName: "Shiva_tandava_stotram__all_18_slokas", filePath:"songs/Shiva_tandava_stotram__all_18_slokas.mp3", coverPath:"cover/shiv.jpg"},
    {songName: "Rama Nama Tarakam ", filePath:"songs/Rama Rama.mp3", coverPath:"cover/rama.jpg"},
    {songName: "Aigiri Nandini ", filePath:"songs/Aigiri Nandini.mp3", coverPath:"cover/aigiri nandani.jpg"},
    {songName: "MADHURASHTAKAM ", filePath:"songs/MADHURASHTAKAM.mp3", coverPath:"cover/krishna.jpg"},
    {songName: "Shiv Tandav Stotram Sooryagayathri ", filePath:"songs/Shiv Tandav Stotram Sooryagayathri.mp3", coverPath:"cover/shiva.png"},
    {songName: "Hare Rama Hare Krishna Chanting", filePath:"songs/Hare Rama.mp3", coverPath:"cover/rama-krishna.jpg"},
    {songName: "Kalabhairavashtakam ", filePath:"songs/Kalabhairavashtakam.mp3", coverPath:"cover/rama-krishna.jpg"},
    {songName: "Durga_chalisa", filePath:"songs/Durga_chalisa.mp3", coverPath:"cover/durga.png"},
    {songName: "Namaskarartha Shiv Mantra ", filePath:"songs/Namaskarartha.mp3", coverPath:"cover/shivaa.png"},
    {songName: "Vedic Chanting", filePath:"songs/Vedic Chanting.mp3", coverPath:"cover/om.jpg"}
]

song.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songArrray[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songArrray[i].songName; 
});

// Handle play/ pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    const progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songDirectPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}

Array.from(document.getElementsByClassName('songDirectPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        actualSongName =e.target.id;
        
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${actualSongName}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

let currentSongIndex = 0;
// previous.addEventListener('click', ()=>{
//     currentSongIndex = (currentSongIndex - 1 + songArrray.length) % songArrray.length;
//     audio.src = songArrray[currentSongIndex].src;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// });

next.addEventListener('click', ()=>{
    currentSongIndex = (currentSongIndex + 1 ) % songArrray.length;
    audioElement.src = songArrray[currentSongIndex].src;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



