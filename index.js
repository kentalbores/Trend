
let verse = "This is me praying that this was the very first page \
not where the storyline ends \
my thoughts will echo your name \
until I see you again \
these are the words I held back \
as I was leaving too soon \
I was enchanted to meet you... \
Please don't be inlove with someone else";


let lyrics = verse.split(" ");
let intervals = [
    400,500,600,700,1100,400,400,400,600,400,700,400,400,400,
    900,700,400,400,400,600,600,900,400,400,400,400,800,
    400,400,400,400,400,500,600,400,400,400,400,400,700,
    400,500,700,400,900,2500,700,700,600,500,500,900,800,
    900,600,400,400,400,600,600,900,400,400,400,400,400
];

document.querySelector("#hell").onclick = pr
let lyric = document.querySelector(".lyrics")
let counter = 0;
let i = 0;

let terminate = false;
let music = document.querySelector("#myAudio");

async function pr(){
    terminate = !terminate;
    music.volume = 0.1;
    music.play();
    await sleep(600);
    
    for (let i = 0; counter<lyrics.length ; i++, counter++) {
        counter == 0? lyric.innerHTML = (lyrics[counter]) : lyric.innerHTML += " " + (lyrics[counter]);
        console.log(lyrics[counter] + " i: " + intervals[i] + " I: " + counter);
        await sleep(intervals[i]);
        if(counter==45){
            lyric.innerHTML += "<br>"
        }
        if(i>=intervals.length) i=0;
        if(!terminate){
            music.pause();
            break;
        }
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

