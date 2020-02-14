//Exercise 1

//I assume it will print aaaaaaaaaa dddddddddd ffffffffff eeeeeeeeee bbbbbbbbbb

//Exercise 2
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//I was right