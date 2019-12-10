const listitem = document.getElementsByTagName("li");
console.log(listitem.length);
console.log(listitem[0]);
Array.from(listitem).forEach(listitem => {
    listitem.style.color = "red";
});

const btn = document.getElementsByClassName("btn");
console.log(btn);
btn[0].style.backgroundColor = "yellow";

const title = document.getElementById("title");
console.log(title);
title.textContent = "ALLO WOWLD";
title.style.color = "aqua";

const list1 = document.querySelector("#list");
console.log(list1);

const link = document.querySelector("li.item a");
console.log(link);
link.style.textDecoration = "none";
link.style.color = "pink";