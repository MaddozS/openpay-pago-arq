const OpenPay = require('openpay');
const { OPENPAY_PRIVATE_KEY, OPENPAY_MERCHANT_ID } = require('../config')
//instantiation

const OPENPAY = new OpenPay();


OPENPAY.setTimeout(20000); // in ms (default is 90000ms)
OPENPAY.setMerchantId(OPENPAY_MERCHANT_ID);
OPENPAY.setPrivateKey(OPENPAY_PRIVATE_KEY);
OPENPAY.setProductionReady(false);
//OPENPAY.setSandboxMode(true);

//use the api

module.exports = { OPENPAY }