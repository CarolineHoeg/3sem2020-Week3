//Exercise a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Exercise b
let all = boys.concat(girls)

//Exercise c
console.log(all.join())

console.log(all.join("-"))

//Exercise d
all.push("Lone", "Gitte")

//Exercise e
all.unshift("Hans", "Kurt")

//Exercise f
all.shift()

//Exercise g
all.pop()

//Exercise h
all.splice(3, 2)

//Exercise i
all.reverse()

//Exercise j
all.sort()

//Exercise k
all.sort((a, b) => a.localeCompare(b)) 

//Exercise l
let namesUpperCase = all.map((name) => name.toUpperCase())

//Exercise m
let namesWithL = all.filter((name) => name.toLowerCase().startsWith("l"));