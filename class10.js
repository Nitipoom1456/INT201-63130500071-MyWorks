// const divProductsEle = document.querySelector('#products');
// // console.log(divProductsEle);

// let product = {
//     productId: 'P001',
//     productName: 'iphone',
//     price: 29990
// };

// const divProductEle = document.createElement('div');


// divProductEle.setAttribute('id', product.productId);

// const pProductIdEle = document.createElement('p');
// pProductIdEle.textContent = product.productId;

// divProductEle.appendChild(pProductIdEle);

// const pProductNameEle = document.createElement('p');
// pProductNameEle.textContent = product.productName;
// divProductEle.appendChild(pProductNameEle);

// const pProductPriceEle = document.createElement('p');
// pProductPriceEle.textContent = product.price + ` Bath`;
// divProductEle.appendChild(pProductPriceEle);



// divProductsEle.appendChild(divProductEle);

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
    content.appendChild(document.createTextNode(`Stock: ${product.stock}`))
    content.appendChild(document.createElement("br"));

    let btn = document.createElement("a");
    if (product.stock === 0){
        btn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
        btn.setAttribute("style", "cursor: not-allowed");
        btn.appendChild(document.createTextNode("Out of stock"))
    } else{
        btn.setAttribute("class", "btn btn-primary mw-100");
        btn.setAttribute("href", "https://www.google.com");
        btn.setAttribute("target", "_blank");
        btn.appendChild(document.createTextNode("Add to cart"))
    }
    content.appendChild(btn);
    innerDiv.appendChild(content);
    outerDiv.appendChild(innerDiv);
});

document.querySelector("#products").appendChild(outerDiv);

