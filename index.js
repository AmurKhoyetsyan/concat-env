let ENV = require("concat-env");

ENV.load();

console.log(process.env.USER_LOGIN);
console.log(process.env.USER_PASSWORD);