const btn = document.getElementById('button')
const log = document.getElementById('log')

var buttonDelay = 10;
count = 0;

function printMessage(message){
    console.log(message)
    var new_div = document.createElement("div")
    new_div.className = ('log-text')
    const text = document.createTextNode(message + "\n")
    new_div.appendChild(text)
    log.appendChild(new_div)
}

function clearHidden(){
    var logs = document.getElementsByClassName('log-text')
    console.log(logs)
    if (logs.length > 20){
        for (var i = 20; i < logs.length; i++){
            logs[i].remove()
        }
    }

}
btn.addEventListener("click", () => {

    btn.disabled = true
    setTimeout(function() {
        btn.disabled = false
    }, buttonDelay);
    printMessage("You place a log in the fireplace.")
    clearHidden()

})