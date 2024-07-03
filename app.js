document.querySelectorAll(".keys p").forEach(key => {
    key.addEventListener('click',()=>{
        const soundId = key.getAttribute('data-sound');
        const audioPlayer = document.getElementById("audioPlayer");
        const sourceElement = document.getElementById("soundId");

        if(sourceElement){
            audioPlayer.src = sourceElement.src;
            audioPlayer.play();

        }
    });
});
