# Coding Assignment: Displaying Restaurant Data (Backend)

- Platform: Web application
- Language: Javascript
- Framework: Express/Node.js
- Code editor: Visual Studio Code

## Steps to build and compile

1. Navigate to the directory you want to save your app
2. Initialize NPM with the following code:
    ``` bash
    npm init --y
    ```
3. Install the relevant dependencies. In this case it would be:
    ``` bash
    npm install express
    npm install cors
    npm install axios
    ```
4. Open the app with your editor and run this code:
    ``` bash
    const express = require("express")
    cont app = express()
    ```
5. Create the first route to test your server. An example could be:
    ``` bash
    app.get("/", (req, res, next) => {
        res.send("Hello world!")
    })
    ```
6. Start the server with your port of choice:
    ``` bash
    app.listen(5005, () => console.log("Server is listening on port 5005!"))
    ```
7. Once everything is working, proceed with the app with all the requirements you need to satisfy

## Steps to run the app locally
1. Fork this repo and clone it
2. Navigate to this directory and run the following code:
    ``` bash
    npm install
    code .
    ```
3. Create a .env file in the root folder add the following environment variables:
    ``` bash
    PORT=5005
    ORIGIN=http://localhost:5173
    ```
4. Once done, run the app locally with the following code:
    ``` bash
    npm run dev
    ```

## Improvements for future development
