# Concat ENV

### install

    npm i concat-env

### Call

    var ENV = rqeuire('concat-env');

#### Run

    ENV.load();


#### Example

    .env

        USER_LOGIN=example
        USER_PASSWORD=example

    index.js

        let ENV = require("concat-env");

        ENV.load();

        console.log(process.env.USER_LOGIN);
        console.log(process.env.USER_PASSWORD);