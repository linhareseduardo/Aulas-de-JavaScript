let a = document.querySelector('.link');

//console.log(a.innerText);

//console.log(a.parentNode);

console.log(a.parentNode);//body
console.log(a.parentNode.parentNode);//html
console.log(a.parentNode.parentNode.parentNode);//Document
console.log(a.parentNode.parentNode.parentNode.parentNode);//null
console.log(a.parentNode.parentNode.childNodes);
console.log(a.parentNode.parentNode.firstChild);
console.log(a.parentNode.parentNode.lastChild);
console.log(a.parentNode.parentNode.firstChild.nextSibling);//#text "\n    "
console.log(a.parentNode.parentNode.firstChild.nextSibling.nextSibling);//<body class="corpo">
console.log(a.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild);
