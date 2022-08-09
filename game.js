const btn = document.getElementById('button')

var buttonDelay = 1000;
btn.addEventListener("click", () => {
    console.log("clicked")
    btn.disabled = true
    setTimeout(function() {
        btn.disabled = false
    }, buttonDelay);
})