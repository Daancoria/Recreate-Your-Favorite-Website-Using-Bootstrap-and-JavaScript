// JavaScript functions for Pokémon Center Website

// Function to validate the sign-up form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;

    if (name === "" || email === "" || birthday === "") {
        alert("Please fill out all fields before submitting.");
        return false;
    }
    alert("Sign-up successful! Welcome to Pokémon Center.");
    return true;
}

document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to dynamically update stock availability
function updateStockStatus() {
    let stockItems = document.querySelectorAll("tbody tr");
    stockItems.forEach(row => {
        let statusCell = row.cells[3]; // Corrected to target the Availability column
        if (statusCell.innerText.toLowerCase() === "limited stock") {
            statusCell.classList.add("text-danger", "fw-bold");
        } else if (statusCell.innerText.toLowerCase() === "out of stock") {
            statusCell.classList.add("text-muted", "fw-bold");
        } else if (statusCell.innerText.toLowerCase() === "in stock") {
            statusCell.classList.add("text-success", "fw-bold");
        }
    });
}

document.addEventListener("DOMContentLoaded", updateStockStatus);

// Function to show a welcome alert when the page loads
function welcomeMessage() {
    alert("Welcome to the Pokémon Center! Enjoy shopping for your favorite Pokémon merchandise.");
}

document.addEventListener("DOMContentLoaded", welcomeMessage);

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.createElement("button");
    darkModeButton.innerText = "🌙 Toggle Dark Mode";
    darkModeButton.classList.add("btn", "btn-secondary", "m-3");
    darkModeButton.onclick = toggleDarkMode;
    document.body.prepend(darkModeButton);
    
    // Restore dark mode state from previous session
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// Function to display today's date at the bottom right of the page
function displayCurrentDate() {
    let dateElement = document.createElement("p");
    dateElement.id = "current-date";
    dateElement.style.position = "fixed";
    dateElement.style.bottom = "10px";
    dateElement.style.right = "10px";
    dateElement.style.background = "rgba(0, 0, 0, 0.7)";
    dateElement.style.color = "white";
    dateElement.style.padding = "5px 10px";
    dateElement.style.borderRadius = "5px";
    dateElement.innerText = "Today's Date: " + new Date().toDateString();
    document.body.appendChild(dateElement);
}

document.addEventListener("DOMContentLoaded", displayCurrentDate);

// JavaScript function to filter products based on search input
function filterProducts() {
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    let products = document.querySelectorAll(".card");
    
    products.forEach(product => {
        let title = product.querySelector(".card-title").innerText.toLowerCase();
        let description = product.querySelector(".card-text").innerText.toLowerCase();
        
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

document.getElementById("search-bar").addEventListener("input", filterProducts);

// Function to show a random Pokémon trivia fact
function showRandomTrivia() {
    let triviaFacts = [
        "Pikachu was not originally the mascot of Pokémon! Clefairy was supposed to be.",
        "Arcanine was initially planned to be a legendary Pokémon.",
        "Ditto and Mew share identical base stats and similar abilities.",
        "The Pokémon franchise is the highest-grossing media franchise in history!"
    ];
    let randomFact = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];
    alert("Pokémon Trivia: " + randomFact);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showRandomTrivia, 5000); // Show trivia after 5 seconds
});
