module.exports = {
    port: 8088,
    dbUrl: 'mongodb+srv://tjxia-access:UPFAyzdK7aFL0Xax@cluster0.rl6y7.mongodb.net/dividends?retryWrites=true&w=majority',
    routes: {
        create: '/create',
        createPortfoliosPerStock: '/createPortfoliosPerStock',
        getAnnualDividend: '/getAnnualDividend',
        getMonthlyDividend: '/getMonthlyDividend',
        getMonthlyPayee: '/getMonthlyPayee'
    },
    apiEndpointPremium: 'https://sandbox.iexapis.com/stable/time-series/advanced_dividends/',
    apiEndpointBasic: 'https://sandbox.iexapis.com/stable/stock/'
}
