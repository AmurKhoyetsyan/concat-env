# Concat ENV

### install

    npm i concat-env

### Call

    var env = rqeuire('concat-env');

#### Run

    env.load();

#### Example

    .env

        USER_LOGIN=example
        USER_PASSWORD=example

    index.js

        let env = require("concat-env");

        env.load();

        console.log(process.env.USER_LOGIN);
        console.log(process.env.USER_PASSWORD);

##### package json

    {
        .....
        .....
        "scripts": {
            .....
            .....
            "test": "node index --name=$name"
        },
        .....
        .....
    }

##### Terminal

    in terminal run command

        npm run test --name Anun

    index.js

        let variables = env.getVariables();

        console.log("Terminal ::: ", variables);

        env.addVariables();

        console.log(process.env.name);

##### Add custom env

    ./ex/.env.dev

        #test
        USER_TEST=test

        USER_EXP=exp

    index.js

        env.loadCustom('./ex/.env.dev');

        console.log(".env.dev -> USER_TEST ::: ", process.env.USER_TEST);
        console.log(".env.dev -> USER_EXP ::: ", process.env.USER_EXP);