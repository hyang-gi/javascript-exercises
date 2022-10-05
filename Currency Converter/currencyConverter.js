const exchange_rate = {
    "EUR": 1,
    "INR": 79.89,
    "USD": 0.98,
    "YEN": 143.30,
    "GBP": 0.87,
}

function getValueByKey(object, row) {
    console.log("Exchange Rate", object[row]);
    document.getElementById("displayExchangeRate").innerHTML = "Exchange Rate " + object[row];
    return object[row];
}

function currencyConverter(toCurrency, amount) {
    let exchangeRate = getValueByKey(exchange_rate, toCurrency);
    var convertedAmount = amount * exchangeRate;
    document.getElementById("displayConvertedAmount").innerHTML = "Converted Currency " + convertedAmount;
    return convertedAmount + ` ${toCurrency}`;
}