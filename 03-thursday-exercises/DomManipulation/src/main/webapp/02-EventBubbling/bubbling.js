//Exercise a
document.getElementById("div1").onclick = sayHiConsole
document.getElementById("div2").onclick = sayHiConsole

function sayHiConsole() {
    console.log("Hi from " + this.id);
}

//Exercise b
document.getElementById("outer").onclick = sayHiConsoleOuter;

function sayHiConsoleOuter(evt) {
    console.log("Hi from " + this.id);
    console.log("Hi from " + evt.target.id);
}

//Exercise c
document.getElementById("div1").onclick = sayHiOutput
document.getElementById("div2").onclick = sayHiOutput

function sayHiOutput() {
    document.getElementById("output").innerText = "Hi from " + this.id
}

document.getElementById("outer").onclick = sayHiOutputOuter;

function sayHiOutputOuter(evt) {
    document.getElementById("output").innerText =  "Hi from " + this.id 
            + "\n" + "Hi from " + evt.target.id;
}

