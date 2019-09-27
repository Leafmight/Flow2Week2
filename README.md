# Flow2Week2
Rækkefølgen er meget ligefrem - der ligger 3 opgaver i onsdagsmappen
- Week2Wed1 er opgaven der handler om jokes
- Week2Wed2 er til "4. Ajax with a full REST CRUD Endpoint and Error-handling"
- Week2Wed3 er til "Create a Single Page Application that uses our cool API :-)"


Mangler:
- Der er lidt mangler i onsdagsopgaven.
- Der mangler hele løsningen til torsdagsopgaven - der var simpelthen for mange opgaver.




## FREDAG: JavaScript, DOM, AJAX, CORS and SVG
## General part
Explain about the Object Model, and why it’s (very) relevant for modern Web-development

- The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

Explain (using an example of your own choice) about JavaScript events, and Event Bubbling

- HTML events are "things" that happen to HTML elements.
- When JavaScript is used in HTML pages, JavaScript can "react" on these events.

“things” can be:
1. onchange: An HTML element has been changed
2. onclick: The user clicks an HTML element
3. onmouseover: The user moves the mouse over an HTML element
4. onmouseout: The user moves the mouse away from an HTML element
5. onkeydown: The user pushes a keyboard key
6. onload: The browser has finished loading the page

- Event bubbling is a term you might have come across on your JavaScript travels. It relates to the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).



Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on diﬀerent platforms.
- JSON is Cross-Platform. Since browser support is so widespread, JSON is also a cross-platform way representing data. This is the real power of JSON. It can be used natively within Javascript without any parsing, interpretation or 3rd party libraries.
- When the Extensible Markup Language (XML) first came out, a number of companies started using it as a cross-platform remote procedure call (RPC) mechanism. XMLhad the benefit of wide industry acceptance, meaning that most platforms and languages have access to an XML parser.
JSON vs xml:
- JSON is data-oriented whereas XML is document oriented. JSON does not provide display properties whereas XML does (as it's a Markup Language). JSON supports array whereas XML does not. JSON is less secured than XML.

Explain the topic AJAX and how it has changed the way modern web-applications are created
- short for asynchronous JavaScript and XML
- AJAX is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a serverasynchronously (in the background) without interfering with the display and behavior of the existing page. 
- Ajax is not a single technology, but rather a group of technologies. HTML and CSS can be used in combination to mark up and style information. The webpage can then be modified by JavaScript to dynamically display—and allow the user to interact with—the new information. The built-in XMLHttpRequest object, or since 2017 the new "fetch()" function within JavaScript is commonly used to execute Ajax on webpages allowing websites to load content onto the screen without refreshing the page.

Explain the Same Origin Policy (for AJAX), and different ways to work around it
### Why can't we use Ajax outside our domain?
-   If you try use ajax outside your domain, you will probably get this error message:
XMLHttpRequest cannot load http://www.domain.com/path/filename. Origin null is not allowed by Access-Control-Allow-Origin.

- The reason you get this error message is because of the Same-origin policy. The policy permits scripts running on pages originating from the same site to access each other's data with no specific restrictions, but prevents scripts access to data that is stored on a different domain.
- This could be a problem if you are trying to access publicly hosted data, but there are ways round it.

Here is the list of methods:
- Implement CORS (Cross-Origin Resource Sharing)
- Use JSONP (JSON Padding)
- Use postMessage method
- Setting up a local proxy

