var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let table = document.getElementById("tablediv")

function createTable(arr) {
    let result, obj, keys, values;
    keys = Object.keys(arr[0])
    result = "<table><tr><th>" + keys.join("</th><th>") + "</th></tr>"
    for (obj of arr) {
        values = Object.values(obj)
        result += "<tr><td>" + values.join("</td><td>") + "</td></tr>"
    }
    result += "</table>"
    return result
}

table.innerHTML = createTable(cars);
  
document.getElementById("btn").onclick = priceLessThan;
  
function priceLessThan(evt){
    evt.preventDefault();
    let price = document.getElementById("input");
    let lessThanCars = cars.filter((car) => car.price < price.value);
    table.innerHTML = createTable(lessThanCars);
}