let items = [];
let total = 0;

const itemList = document.getElementById("item-list");
const emptyMessage = document.getElementById("empty-message");
const totalAmount = document.getElementById("total-amount");
const bookButton = document.getElementById("book-btn");
const bookingMessage = document.getElementById("booking-message");
const successMessage = document.getElementById("success-message");
const addButtons = document.querySelectorAll(".add-btn");
const skipButtons = document.querySelectorAll(".skip-btn");

function updateItems() {
    itemList.innerHTML = "";

    items.forEach(function(item, index) {
        const div = document.createElement("div");

        div.className = "item";

        div.innerHTML =
            "<span>" + (index + 1) + "</span>" +
            "<span>" + item.name + "</span>" +
            "<span>₹" + item.price.toFixed(2) + "</span>";

        itemList.appendChild(div);
    });

    total = 0;

    items.forEach(function(item) {
        total += item.price;
    });

    totalAmount.textContent = "₹" + total.toFixed(2);

    if (items.length === 0) {
        emptyMessage.style.display = "block";
        bookButton.disabled = true;
    } else {
        emptyMessage.style.display = "none";
        bookButton.disabled = false;
        bookingMessage.textContent = "✓ You can book your items now";
    }
}

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const name = button.getAttribute("data-name");
        const price = Number(button.getAttribute("data-price"));

        items.push({
            name: name,
            price: price
        });

        updateItems();
    });
});

skipButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.textContent = "Skipped";
    });
});

bookButton.addEventListener("click", function() {

    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (items.length === 0) {
        bookingMessage.textContent = "Please add an item first.";
        return;
    }

    if (name === "" || email === "" || phone === "") {
        bookingMessage.textContent = "Please fill all the details.";
        return;
    }

    successMessage.textContent = "Order Successful!";
});

document.getElementById("logout").addEventListener("click", function() {
    alert("Logged out successfully.");
});

updateItems();