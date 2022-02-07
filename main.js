let keys = document.querySelectorAll('.key')

function playNote(event) {

    let keyCode = getKeyCode(event)
    
    const isKeyExist = document.querySelector(`[data-key = "${keyCode}"]`)

    if(!isKeyExist){
        return
    }else {
        PlayAudio(keyCode)
    }

}

function getKeyCode(event) {
    let keyCode

    if(event.type === 'keydown') {
        keyCode = event.keyCode
    }else {
        keyCode = event.target.dataset.key
    }

    return keyCode
} 

function PlayAudio(keyCode) {
    const audio =  document.querySelector(`audio[data-key = "${keyCode}"]`)
    audio.currentTime = 0
    audio.play()
}


window.addEventListener('keydown', playNote)


keys.forEach(key => {
    key.addEventListener('click', playNote)
})