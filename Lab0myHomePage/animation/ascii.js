function startAnimation() {
    let animation = document.getElementById("animation").value;
    document.getElementById("txtArea").textContent = ANIMATIONS[animation];
    document.getElementById("animation").disabled = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    StartTimer = setTimeout(function () {
        playAnimation(animation, 01)
    }, 250);
}


function stopAnimation(){
    document.getElementById("animation").disabled = false;
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    clearTimeout(StartTimer);
}

let playAnimation = function (animation, cont) {
    let animationFrames = ANIMATIONS[animation].split("=====\n");
    document.getElementById("txtArea").textContent = animationFrames[cont];
    let counter = (document.getElementById("turbo").checked) ? 50 : 250;
    cont = (cont + 1) %  animationFrames.length;
    StartTimer = setTimeout(function () {
        playAnimation(animation, cont)
    }, counter);
};


function changeFontSize() {
    document.getElementById("txtArea").style.fontSize = document.getElementById("size").value;
}
