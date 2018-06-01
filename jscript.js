var count = 0;

var shoppingList = [];

function ShoppingItem(id, name, quantity) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
}

shoppingList.push(new ShoppingItem(count++, "apple", 100));
shoppingList.push(new ShoppingItem(count++, "cucumber", 23));
shoppingList.push(new ShoppingItem(count++, "pears", 15));

const ulfl = document.querySelector("#final-list ul");
ulfl.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    ulfl.removeChild(li);
    var index = e.target.parentElement.querySelector("input[type=hidden]")
      .value;
    for (i = 0; i < shoppingList.length; i++) {
      console.log("shoppingList[i].id  " + i + "  " + shoppingList[i].id);
      if (shoppingList[i].id == index) {
        console.log("same");
        shoppingList.slice(i);
      }
    }
  } else if (e.target.className == "movedownorup") {
    const li = e.target.parentElement;
    console.log(li);
    ul.appendChild(li);
  }
});

const ul = document.querySelector("#shopping-list ul");
ul.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    ul.removeChild(li);
    var index = e.target.parentElement.querySelector("input[type=hidden]").value;
      for (i = 0; i < shoppingList.length; i++) {
        console.log("shoppingList[i].id  " + i + "  " + shoppingList[i].id);
        if (shoppingList[i].id == index) {
          console.log("same");
          shoppingList.slice(i);
        }
      }
  } else if (e.target.className == "movedownorup") {
    const li = e.target.parentElement;
    console.log(li);
    ulfl.appendChild(li);
  }
});


function remove(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}
createProductRowHtmlFromArray();

function createProductRowHtmlFromArray() {
  for (i = 0; i < shoppingList.length; i++) {
    createItems(
      shoppingList[i].id,
      shoppingList[i].name,
      shoppingList[i].quantity
    );
  }
}

const addItemForm = document.forms["add-item-form"];
addItemForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const quantity = addItemForm.querySelector("#quantityId").value;
  const itemName = addItemForm.querySelector("#itemId").value;
  var c = count++;
  createItems(c, itemName, quantity);
  shoppingList.push(new ShoppingItem(c, itemName, quantity));
});

function createItems(countt, itemName, quantity) {
  const li = document.createElement("li");
  const span1 = document.createElement("SPAN");
  const span2 = document.createElement("SPAN");
  const span3 = document.createElement("SPAN");
  const span4 = document.createElement("SPAN");
  var hid = document.createElement("input");
  hid.setAttribute("type", "hidden");
  hid.setAttribute("value", countt);

  span1.textContent = itemName;
  span2.textContent = quantity;
  span3.textContent = "movedown";
  span4.textContent = "delete";

  span1.classList.add("name");
  span2.classList.add("quantity");
  span3.classList.add("movedownorup");
  span4.classList.add("delete");

  span1.setAttribute("contentEditable", true);
  span2.setAttribute("contentEditable", true);

  span1.addEventListener("focusout", inlineEditOnfocusout);
  span2.addEventListener("focusout", inlineEditOnfocusout);

  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(span3);
  li.appendChild(span4);
  li.appendChild(hid);
  ul.appendChild(li);
}

function inlineEditOnfocusout(e) {
  console.log("i am in  inlineEditOnfocusout  " + e.target.innerHTML);
  var index = e.target.parentElement.querySelector("input[type=hidden]").value;
  for (i = 0; i < shoppingList.length; i++) {
    console.log("shoppingList[i].id  " + i + "  " + shoppingList[i].id);
    if (shoppingList[i].id == index) {
      console.log("same");
      shoppingList[i].name = e.target.innerHTML.trim();
      shoppingList[i].quantity = e.target.innerHTML.trim();
    }
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
