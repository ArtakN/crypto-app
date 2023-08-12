// =============================================================================
/*
DOM - Document Object Model   (Объектная копия документа)

      Document -  HTML Document, it is what we are interacting with
      Object   -  the Document is a data type object (document = {})
      Model    -  it is representation
                  element <h2 id="count-el">0</h2> in HTML file is a real,
                  but   let countEl = document.getElementById("count-el") returns a model of the real element in HTML file.

      (see: DOM.png)

It is just how we use JavaScript to modify a website.
// =============================================================================

// =============================================================================
An HTML document is a text file that contains markup language to describe the structure and content of a web page.

<!DOCTYPE html>
<html>
  <head>
    <title class="title">My Web Page</title>
  </head>
  <body>
    <!-- This is a comment -->
    <h1>Welcome to my web page!</h1>
    <p>This is some text.</p>
  </body>
</html>

When an HTML document is loaded into a web browser, it is parsed and converted into a tree-like structure called the Document Object Model (DOM). In the DOM tree, each element, attribute, and text content in the document is represented as a Node (object). These Node objects are organized in a tree-like structure, with the Document object at the root representing the entire document.

Document
└── html
    ├── head
    │   └── title
    │       └── "My Web Page"
    └── body
        ├── Comment: "This is a comment"
        ├── h1 (class="title")
        │   └── "Welcome to my web page!"
        ├── p
        │   └── "This is some text."
        └── img (src="logo.png", alt="logo image")

The DOM contains several types of objects that represent different parts of an HTML or XML document. Some of the most common objects in the DOM include:

Document:   This object represents the root of the document tree and provides a
            way for programs and scripts to dynamically access and update the content and structure of a document (document.getElementByID).

Element:    This object represents an element in the document, such as a <div>,
            <p>, or <img> element. It provides methods (setAttribute) and properties (innerHTMl) for accessing and manipulating the element’s attributes, content, and child nodes (element.innerHTML).

Text:       This object represents a text node in the document, which contains
            text content. It provides methods and properties for getting and setting the text content of the node.

Comment:    This object represents a comment node in the document, which
            contains a comment. It provides methods and properties for getting and setting the comment text.

These are just a few examples of the many types of objects that can be found in the DOM. Each object has its own set of methods and properties that allow us to access and manipulate its content and attributes.  */
// =============================================================================