let items = []

const itemsdiv = document.querySelector(".items")
let addButton = document.querySelector(".additem button");
let StorageKey = "item"

addButton.onclick = () => {
    addItems()
}

function renderItems() {
    itemsdiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {


        const text = document.createElement("p")
        text.textContent = item

        const button = document.createElement("button")
        button.innerText = "Delete"
        button.style.marginLeft = "10px"
        button.onclick = () => removeItems(idx)


        itemsdiv.appendChild(text)
        text.appendChild(button)

    }
}
renderItems()
function loadItems() {
    const oldItems = localStorage.getItem(StorageKey)
    if(oldItems){
        items = JSON.parse(oldItems)
    }
    renderItems();
}
function saveItems() { 
    const stringItems = JSON.stringify(items)
    localStorage.setItem(StorageKey, stringItems)
    renderItems()
}
function addItems() {

    let input = document.getElementById("item_add");
    if (input.value === "") {
        alert("Enter the task in the input box")
    }
    else {
        items.push(input.value);
        renderItems();
    }
    input.value =  ""
    saveItems();

}
function removeItems(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems())

