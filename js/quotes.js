const quotes = [
    {
        quote: "It's not until you lose everything that you can truly appreciate everything.",
        movie: "Beauty and the Beast",
    },
    {
        quote: "To love someone, you have to love yourself first.",
        movie: "Beauty and the Beast",
    },
    {
        quote: "Get out of the place you're used to. The reward for this will definitely be worth it.",
        movie: "Tangled",
    },
    {
        quote: "Remember you're the one who can fill the world with sunshine.",
        movie: "Snow White",
    },
    {
        quote: "There is no one who can't fall. However, only those who get up again will learn how to move forward.",
        movie: "Bambi",
    },
    {
        quote: "You still have enough time to make your dreams come true!",
        movie: "Peter Pan",
    },
    {
        quote: "You can do it if you sincerely want.",
        movie: "The Little Mermaid",
    },
    {
        quote: "The special moments of today are memories of tomorrow.",
        movie: "Aladdin",
    },
    {
        quote: "Only I can determine my own mood. And today, perhaps, I will choose happiness.",
        movie: "Alice in Wonderland",
    },
    {
        quote: "If you do only what you can, you'll never be better than now.",
        movie: "Kung Fu Panda",
    }
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = ` - ${todaysQuote.movie}`;