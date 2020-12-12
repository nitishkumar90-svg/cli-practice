let getConversionRate = function(inputRateList, fromCurrency, toCurrency) {
    return inputRateList[fromCurrency][toCurrency];
}

module.exports = { getConversionRate };