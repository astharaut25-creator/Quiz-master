// Array of quotes
    const quotes = [
      "The best way to get started is to quit talking and begin doing. - Walt Disney",
      "Don't let yesterday take up too much of today. - Will Rogers",
      "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
      "Do one thing every day that scares you. - Eleanor Roosevelt"
    ];

    // Function to generate and display a random quote
    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quoteText = quotes[randomIndex];
      document.getElementById("quote").textContent = quoteText;
    }