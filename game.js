const btn = document.getElementById('button')


btn.addEventListener("click", () => {
    console.log("clicked")
    btn.disabled = true;
})