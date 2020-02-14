//Exercise 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

let shortNames = names.filter((name) => name.length <= 3)

names.forEach((n) => console.log(n))

shortNames.forEach((n) => console.log(n))

//Exercise 2
let upperCase = names.map((name) => name.toUpperCase())

upperCase.forEach((n) => console.log(n))

//Exercise 3 
var names1 = ["Lars", "Peter", "Jan", "Ian"]

function makeHtmlUl(arr) {
    return "<ul><li>" + arr.join("</li><li>") + "</li></ul>"
}

console.log(makeHtmlUl(names));

//Exercise 4
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

let carsNewerThan1999 = cars.filter((car) => car.year > 1999)
carsNewerThan1999.forEach((car) => console.log(car))

let onlyVolvos = cars.filter((car) => car.make === 'Volvo')
onlyVolvos.forEach((car) => console.log(car))

let carsPriceBelow5000 = cars.filter((car) => car.price < 5000)
carsPriceBelow5000.forEach((car) => console.log(car))

//Exercise 4a - Yellow
function makeSql(arr) {
    let result, obj, keys, values;
    for (obj of arr) {
        keys = Object.keys(obj)
        values = Object.values(obj)
        result += "INSERT INTO cars (" + keys.join() + ") VALUES ( "
                + values.join(", ") + " );"
    }
    return result;
}

console.log(makeSql(cars))