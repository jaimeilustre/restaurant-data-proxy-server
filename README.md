# Coding Assignment: Displaying Restaurant Data (Backend)

- Platform: Web application
- Language: Javascript
- Framework: Express/Node.js
- Code editor: Visual Studio Code

## Link to the Frontend
https://github.com/jaimeilustre/restaurant-data

## Steps to build and compile the server

1. Navigate to the directory you want to save your app.
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
4. Open the app with your editor and create an 'app.js' file in the root folder and run this code:
    ``` bash
    // app.js
    //...

    const express = require('express')
    const axios = require('axios')
    const cors = require("cors")
    const app = express()
    ```
5. Create the first route to test your server. An example could be:
    ``` bash
    // app.js
    //...
    
    app.get("/", (req, res) => {
        res.send("Hello world!")
    })
    ```
6. Start the server with your port of choice:
    ``` bash
    // app.js
    //...
    
    app.listen(5005, () => console.log("Server is listening on port 5005!"))
    ```
7. Once everything is working, proceed with the app with all the requirements you need to satisfy. In this case, we need to bypass the CORS restrictions from the public API.

8. Create a .env file in the root folder add the following environment variables:
    ``` bash
    // .env
    // ...

    PORT=5005
    ORIGIN=http://localhost:5173
    ```

9. Once this .env file is created, to access these environment variables, run the following code:
    ``` bash
    // app.js
    //...
    
    const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173"
    const PORT = process.env.PORT || 5005
    ```
    This does the following:
    - Using `process.env` allows access to these variables
    - Using the `||` logical operator, it allows us to set a default value if there is an issue accessing the environment variables

10. This next step is IMPORTANT. By default, a .gitignore file is not created when setting up this Express server. This .gitignore allows us to tell Git which files to ignore when committing. In our case, we need to ignore the 'node_modules' and the '.env'. This can be done by creating a .gitignore file in the root folder with the following code:
    ``` bash
    // .gitignore
    // ...

    # Dependency directories
    node_modules/

    # Debug log from npm
    npm-debug.log

    # Environment Variables should NEVER be published
    .env

    # macOS
    .DS_Store
    .AppleDouble
    .LSOverride

    # Windows
    Thumbs.db
    Thumbs.db:encryptable
    ehthumbs.db
    *.lnk


    # VS Code
    .vscode/*
    ```

11. To set up CORS, run the following code:
    ``` bash
    // app.js
    //...
    
    app.use(
    cors({
        origin: [FRONTEND_URL]
    })
    )
    ```
    This does the following:
    - This specifies the requests from specific origins, which in this case would be our `FRONTEND_URL` variable that we created in the previous steps. This means that only the application hosted at this `FRONTEND_URL` is allowed access.
    - Alternatively, by leaving CORS blank, this would mean that any frontend domain can have access, which is not ideal for security reasons.

12. Create a GET route to handle requests to the path "/restaurants/:postcode" with postcode as a URL parameter. This can be done like this:
    ``` bash
    // app.js
    //...
    
    app.get('/restaurants/:postcode', (req, res) => {
        const {postcode} = req.params
        const apiUrl = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/"

        axios.get(`${apiUrl}${postcode}`)
        .then(response => 
            res.json(response.data))
        .catch(err => {
            console.log("Error getting postcode", err)
            res.status(500).json({message: "Error getting postcode"})
        })
    })
    ```
    The following is achieved with this piece of code:
    - Using `req.params`, the postcode is extracted from the URL parameters.
    - The API URL is then constructed to query restaurant data based on the postcode using the Just Eat API
    - Using axios, it then makes a GET request. If successful, the client then receives a JSON response from the API. If not susccessful, it logs the error and sends a 500 status with a JSON response indicating an error.

## Steps to run the app locally
1. Fork this repo and clone it.
2. Navigate to this directory and run the following code:
    ``` bash
    npm install
    code .
    ```
3. Create a .env file in the root folder add the following environment variables:
    ``` bash
    // .env
    // ...
    
    PORT=5005
    ORIGIN=http://localhost:5173
    ```
4. Once done, run the app locally with the following code:
    ``` bash
    npm run dev
    ```

## Improvements for future development
- Add a custom error handling middleware to tailor error responses based on the specific needs of the app.
