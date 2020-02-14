//Exercise a
var names = ["Lars", "Peter", "Jan", "Ian"]

function makeHtmlUl(arr) {
    if(Array.isArray(arr)) {
        return "<ul><li>" + arr.join("</li><li>") + "</li></ul>"
    }
}

let div = document.getElementById("namediv")
div.innerHTML = makeHtmlUl(names)

//Exercise b
let input = document.getElementById("input")
document.getElementById("add").onclick = addName

function addName(evt) {
    evt.preventDefault()
    names.unshift(input.value)
    div.innerHTML = makeHtmlUl(names)
}

//Exercise c - rm first and last
document.getElementById("rmFirst").onclick = rmFirst

function rmFirst(evt) {
    evt.preventDefault()
    names.shift(input.value)
    div.innerHTML = makeHtmlUl(names)
}

document.getElementById("rmLast").onclick = rmLast

function rmLast(evt) {
    evt.preventDefault()
    names.pop(input.value)
    div.innerHTML = makeHtmlUl(names)
}