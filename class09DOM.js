// let divsec2 = document.getElementById("Section2")
// let ul = divsec2.getElementsByTagName("ul")
// let classGroup9 = ul.getElementsByClassName("group9")


const listg9 = document.querySelector('#Section2 .group9');
listg9.textContent = 'Hello world';
let attr = document.createAttribute("style");
attr.value = "color:skyblue";
listg9.setAttributeNode(attr);

// const gName = document.querySelector('#Section2 .group9');
// gName.innerHTML = '<font color = red >Hello</font>';
