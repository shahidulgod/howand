
function itemNameShow(target){
  const selectedItemContainer= document.getElementById("selectItem");
  const  itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
}








