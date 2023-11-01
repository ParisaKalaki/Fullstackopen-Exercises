##### Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

1. User Opens SPA: The user, represented by the browser, initiates the interaction by sending a GET request to the server to access the single-page app (SPA) version of the notes app. The server responds by sending back the HTML, spa.js, main.css, and data.json to the browser.

2. JavaScript Execution: The note to the right of the browser indicates that the browser executes the spa.js JavaScript code. This code likely contains logic to handle user interactions and update the UI without reloading the entire page.

3. User Adds a New Note: The user, through the SPA interface, adds a new note. This is typically done through the execution of JavaScript code (spa.js) that handles the form submission. The server responds with a status code of 201 Created, indicating that the new note was successfully created on the server side. Importantly, there is no URL redirect (no further action that would result in a page reload).

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML, spa.js, main.css, data.json
    deactivate server

    Note right of browser: The browser executes spa.js


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: server responds with status code 201 created ((No redirect))
    deactivate server

```
