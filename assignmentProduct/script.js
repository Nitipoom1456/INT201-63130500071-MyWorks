
import {products} from "./prod2.js";

let outerDiv;
let num = 0;

products.forEach(product => {
    if (num == 0) {
        outerDiv = document.createElement("div");
        outerDiv.setAttribute("class", "row row-cols-2 row-cols-lg-4 g-2 g-lg-3");
        num = num + 1;
    }
    let img = document.createElement("img");
    img.src = `${product.img}`;
    img.height = "250";
    img.style = "text-align:center;";
    img.className = "img-fluid";

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "col bg-body card rounded p-2 bd-highlight mh-100 px-md-5 py-md-5 mx-md-5 my-md-5");
    innerDiv.appendChild(img);

    const content = document.createElement("div");

    content.appendChild(document.createElement("br"));
    let pName = document.createElement("h5");
    pName.textContent = product.name;
    content.appendChild(pName);
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`ID: ${product.id}`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`${product.desc}`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`Price: ${product.price} BATH`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`Stock: ${product.stock}`));
    content.appendChild(document.createElement("br"));

    let add2cartbtn = document.createElement("a");
    if (product.stock === 0){
        add2cartbtn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
        add2cartbtn.setAttribute("style", "cursor: not-allowed");
        add2cartbtn.appendChild(document.createTextNode("Out of stock"))
    } else{
        add2cartbtn.setAttribute("class", "btn btn-primary mw-100");
        add2cartbtn.setAttribute("href", "https://www.google.com");
        add2cartbtn.setAttribute("target", "_blank");
        add2cartbtn.appendChild(document.createTextNode("Add to cart"));
    }
    content.appendChild(add2cartbtn);
    innerDiv.appendChild(content);
    outerDiv.appendChild(innerDiv);
});

document.querySelector("#products").appendChild(outerDiv);

