const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// Function to fetch random quote
function getQuote() {

    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    fetch("https://dummyjson.com/quotes/random")

        // Convert response into JSON
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            return response.json();
        })

        // Use the received quote
        .then(function(data) {

            quoteText.textContent = `"${data.quote}"`;
            authorText.textContent = `— ${data.author}`;

        })

        // Handle errors
        .catch(function(error) {

            quoteText.textContent =
                "Something went wrong. Please try again.";

            authorText.textContent = "— Error";

            console.error(error);
        });
}

// Button click
newQuoteBtn.addEventListener("click", getQuote);

// Get quote when page loads
getQuote();