function myFunction() {

    // Create a p element:
    const btn = document.createElement("button");
    
    // Create a text node:
    const node = document.createTextNode("button");
    
    // Append text node to the p element:
    btn.appendChild(node);
    
    // Append the p element to the body:
    document.getElementById("my").appendChild(btn);
    }