if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}  

module.exports = {
    PORT: process.env.PORT || 3000,
    OPENPAY_PRIVATE_KEY: process.env.OPENPAY_PRIVATE_KEY,
    OPENPAY_MERCHANT_ID: process.env.OPENPAY_MERCHANT_ID
}