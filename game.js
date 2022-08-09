const btn = document.getElementById('button')
const log = document.getElementById('log')

var buttonDelay = 4000;
count = 0;

function printMessage(message){
    console.log(message)
    var new_div = document.createElement("div")
    new_div.className = ('log-text')
    const text = document.createTextNode(message + "\n")
    new_div.appendChild(text)
    log.appendChild(new_div)
}
btn.addEventListener("click", () => {

    btn.disabled = true
    setTimeout(function() {
        btn.disabled = false
    }, buttonDelay);
    printMessage("You place a log in the fireplace.")

})