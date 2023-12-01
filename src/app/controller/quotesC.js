const quotesArray = require("./quotesArray");

const quotesC = (day) => {
    const quotes = quotesArray.filter(quotes => quotes.Day.toLowerCase() === day.toLowerCase());
    const busyMinutes = quotes.reduce((total, quotes) => total + parseInt(quotes.Duration), 0);
    const availableMinutes = (17 - 9) * 60 - busyMinutes;
    const spacesAvailable = Math.floor(availableMinutes / 30);
    return spacesAvailable;
}

module.exports = quotesC;