let env = require("concat-env");

env.load();

console.log(process.env.USER_LOGIN);
console.log(process.env.USER_PASSWORD);

let variables = env.getVariables();

console.log("Terminal ::: ", variables);

env.addVariables();

console.log(process.env.name);

env.loadCustom('./ex/.env.dev');

console.log(".env.dev -> USER_TEST ::: ", process.env.USER_TEST);
console.log(".env.dev -> USER_EXP ::: ", process.env.USER_EXP);