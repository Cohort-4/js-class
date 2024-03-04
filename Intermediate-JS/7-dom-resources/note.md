### Browser Object Model
This is like a set of tools provided by the browser itself. It's not part of the official DOM specification, but it's specific to web browsers. 
The BOM provides JavaScript access to browser-specific things like the browser's history, location, and browser window itself.

- Window Object
  The window Object serves as a global object in the browser, representing the browser window and is the top-level object in JavaScript when we're working in a web browser. You can access it by typing window in the browser console:
  
`console.log(window);` // prints the Window object this can be done on the browser console

  - `window.location.href` gives you the URL of the current web page.
  - alert()
  - prompt()
  - confirm()

### Document Object Model
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page, allowing interaction with its elements using programming languages like JavaScript.
The DOM contains the document object, which represents the DOM structure of the current web page and has properties and methods that allow you to manipulate the DOM.

  - `console.log(document);` // prints the DOM object

`document` object can be use to access and manipulate different parts of the HTML document. Elements within the DOM can be accessed using properties and methods of this object.

Examples includes
  - Accessing the `body` or `title` element
  - Retrieving HTML content (`innerHTML`)
  - Accessing text content (`innerText`) and changing styles.
  
The DOM can be used to interact with web pages dynamically. This allows JavaScript to access, modify, and manipulate the content, structure, and style of a web document in response to user actions or other events.

Exercise
---------

Create a div with a class of container that has two children: a paragraph with id, and a button with id.
Add an event listener to change to change the text of the paragraph on click button. 