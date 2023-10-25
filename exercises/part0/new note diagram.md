## Create a diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.

1. First user writes something into the text field and clicks the "Save" button.
2. Browser sends an HTTP POST request to https://studies.cs.helsinki.fi/exampleapp/new_note .
3. Server responds with an HTTP status code 302 (redirect).
4. Browser receives the redirect response and issues an HTTP GET request to the new location, https://studies.cs.helsinki.fi/exampleapp/notes
5. The server processes the POST request. Data submitted with the form is accessible in req.body on the server. The server creates a new note object.
   The new note object has two fields: content and date. The server responds to the GET request with the updated Notes page.
6. Browser sends a GET request to https://studies.cs.helsinki.fi/exampleapp/main.css and fetches the main.css from the server.
7. Browser sends a GET request to https://studies.cs.helsinki.fi/exampleapp/main.js and fetches the main.js from the server.
8. Browser sends a GET request to https://studies.cs.helsinki.fi/exampleapp/data.json and fetches the data.json from the server.

```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL redirect
    deactivate server

    Note right of browser: The server responds with HTTP status code 302


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Server responds with updated Notes page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the javascript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Aloha", "date": "2023-10-25T08:25:35.190Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
