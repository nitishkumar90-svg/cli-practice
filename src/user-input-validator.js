let validateUserInputValues = function(inputAmount, fromCurrency, toCurrency) {
    if (inputAmount === undefined || fromCurrency === undefined || toCurrency === undefined) {
       console.log('');
       console.log('---------------ERROR---------------');
       console.error('Fields are missing! Please provide all 3 required fields i.e. (Amount, ConvertFrom, ConvertTo)');
       console.log('----------EXITING PROGRAM----------');
       console.log('');
       console.log('')
       process.exit();
    }
}

module.exports = { validateUserInputValues };