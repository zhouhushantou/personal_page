


document.addEventListener('keyup', (e) => {
    var myElement = document.getElementById("left");
    var b = e.key
    myElement.innerHTML = b.toUpperCase()
    var myElement1 = document.getElementById("right");
    myElement1.innerHTML = "<img src='./src/" + e.key + ".jpg'>"
    var myElement2 = document.getElementById("sound");
    myElement2.src = "./sounds/" + e.key + ".mp3"
    myElement2.load()
    myElement2.play()

})

