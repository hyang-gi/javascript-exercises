const currency = {
    "EUR": 1,
    "INR": 79.89,
    "USD": 0.98,
    "YEN": 143.30,
    "GBP": 0.87,
}

function currencyConverter(fromCurrency, toCurrency, amount) {
    let exchangeRate = currency[toCurrency] / currency[fromCurrency];
    var convertedAmount = amount * exchangeRate;
    document.getElementById("displayConvertedAmount").innerHTML = "Converted Currency " + convertedAmount;
    return convertedAmount + ` ${toCurrency}`;
}