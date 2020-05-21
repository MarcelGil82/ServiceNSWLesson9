// JSON changes an object i.e. person to a string
let person = {
    firstName: "Marcel",
    lastName: "Gil",
    age: 38,
}

// console.log(JSON.stringify(person));

// this turns the JSON to js
let jsonPerson = "{\"firstName\":\"Marcel\",\"lastName\":\"Gil\",\"age\":23}";

console.log(JSON.parse(jsonPerson));