
const greeting = document.getElementById("greeting");
const username = document.getElementById("username");
const greetButton = document.getElementById("greet-btn");
const colorBoxes = document.querySelectorAll(".color-box");

greetButton.addEventListener("click", function () {
    const name = username.value.trim();

    if (name !== "") {
        greeting.textContent = `Hello, ${name}`;
    } else {
        greeting.textContent = "Hello";
        alert("Please enter your name!");
    }
});

username.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        greetButton.click();
    }
});

colorBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
        const selectedColor = box.dataset.color;

        box.style.backgroundColor = selectedColor;
        box.style.color = selectedColor === "yellow" ? "#222" : "white";
        box.style.borderColor = selectedColor;
    });
});
