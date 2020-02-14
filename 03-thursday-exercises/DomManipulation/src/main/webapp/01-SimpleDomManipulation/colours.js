addColour(document.getElementsByTagName("div"))

function addColour(arr) {
    for (var item of arr) {
        item.style.backgroundColor = "#000"
    }
}

document.getElementById("btn").onclick = changeColour

function changeColour() {
    document.getElementById("div1").style.backgroundColor = "#336699"
    document.getElementById("div2").style.backgroundColor = "#669933"
    document.getElementById("div3").style.backgroundColor = "#887744"
}




