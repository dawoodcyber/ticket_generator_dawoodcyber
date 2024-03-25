#! /usr/bin/env node
import inquirer from "inquirer";
let old = 500;
let adult = 420;
let teenage = 350;
let kid = 200;
const input = await inquirer.prompt([
    {
        message: "Where do you want to go?",
        name: "place",
        type: "list",
        choices: ["Fun Play", "Circus", "Horror Place", "Kindergarten"],
    },
    {
        message: "Enter your age:",
        type: "number",
        name: "age",
    }
]);
if (input.age > 50) {
    console.log(`Your ticket price is ${old}`);
}
else if (input.age > 34) {
    console.log(`Your ticket price is ${adult}`);
}
else if (input.age > 17) {
    console.log(`Your ticket price is ${teenage}`);
}
else if (input.age < 18) {
    console.log(`Your ticket price is ${kid}`);
}
else {
    console.log("Invalid Age");
}
