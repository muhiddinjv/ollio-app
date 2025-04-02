/*
Sherzod Makhmudov, [4/2/25 10:44 AM]
{
 "timeCardEvent": [],
 "receipts": [{
  "amountTips": 0,
  "earnBonus": 0,
  "lang": "rus",
  "amountBonus": 0,
  "amountCash": 287925000,
  "receiptItems": [{
   "quantity": 21000,
   "primeCost": 0,
   "syncId": 1743572135553468,
   "options": [],
   "wareId": 149850735,
   "freePrice": false,
   "discounts": [],
   "order": 300000,
   "salePrice": 12500000,
   "taxes": [],
   "groupAmountBonus": 0
  }, {
   "quantity": 10000,
   "primeCost": 0,
   "syncId": 1743572192064074,
   "options": [],
   "wareId": 197630594,
   "freePrice": false,
   "discounts": [],
   "order": 300001,
   "salePrice": 1480000,
   "taxes": [],
   "groupAmountBonus": 0
  }, {
   "quantity": 25000,
   "primeCost": 0,
   "syncId": 1743572201364386,
   "options": [],
   "wareId": 140179719,
   "freePrice": false,
   "discounts": [],
   "order": 300002,
   "salePrice": 425000,
   "taxes": [],
   "groupAmountBonus": 0
  }],
  "outletId": 720441,
  "amountCard": 0,
  "debugInfo": {
   "paymentsCount": 1,
   "itemsCount": 3,
   "printedNo": 1017
  },
  "type": "SALE",
  "predefinedTicketId": 0,
  "isFiscal": false,
  "loyaltyType": "BONUS",
  "bonusBalance": 0,
  "TSCreatedOffset": 18000000,
  "diningOption": {
   "id": 163622,
   "order": 0,
   "name": "Саманос",
   "type": "TAKEOUT"
  },
  "printedNo": 1017,
  "TSCreated": "1743572382267",
  "printNotes": true,
  "amountChange": 0,
  "merchId": "1183226",
  "payments": [{
   "created": "1743572382000",
   "paymentAmount": 287925000,
   "paymentTypeMethod": "CASH",
   "amountSurcharge": 0,
   "paymentType": "CASH",
   "amountChange": 0,
   "paymentAmountTips": 0,
   "paymentTypeName": "Наличные",
   "paymentTotal": 287925000,
   "roundingAmount": 0,
   "paymentTypeId": 1456315
  }],
  "syncId": 1743572057669731,
  "printCustomerInfo": true,
  "clientId": "52667030",
  "cashRegisterId": "4684032",
  "amountTotal": 287925000,
  "di": "18"
 }],
 "installId": "5ED1D959-B42C-4CDF-BF7D-24C83DF22E6B",
 "timestamp": 1743572411660,
 "merchantId": 1183226,
 "cashRegisterId": 4684032,
 "lastWaresSync": "1743572054220",
 "ownerId": 678312,
 "cookieHash": "020746dadc7b7ec26e5c90417ef10164",
 "lastOwnerProfileSync": "1743572053548",
 "shiftNumberNeeded": false,
 "shiftEvent": [],
 "outletId": 720441,
 "cmd": "sendReceipts",
 "ver": 293,
 "brandName": "Loyverse",
 "devInfo": "iPhone 13 Pro 64-bit;iOS 18.3.2;app 2.93;prevApp 2.93",
 "devId": "5ED1D959-B42C-4CDF-BF7D-24C83DF22E6B"
}

Sherzod Makhmudov, [4/2/25 10:44 AM]
URL https://dat.loyverse.com:443/receipts
Status Complete
Response Code 200
Protocol HTTP/2.0
TLS TLSv1.2 (TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256)
Protocol TLSv1.2
Session Resumed No (Client session resumed, server session restarted)
Cipher Suite TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
ALPN h2
Client Certificates -
Server Certificates 4
Extensions 
Method POST

Sherzod Makhmudov, [4/2/25 10:47 AM]
Add customer:

{
 "ownerId": 678312,
 "mergedReceiptsIds": [],
 "pagination": {
  "cursor": "eyJpZCI6OTM0NTA4NTIxLCJsYXN0VGltZXN0YW1wIjoxNzQzNTY2NzI4MDAwfQ=="
 },
 "debugInfo": {
  "installId": "5ED1D959-B42C-4CDF-BF7D-24C83DF22E6B",
  "fullReSync": false
 },
 "deletedReceiptsIds": [],
 "cmd": "sendOpenReceipts",
 "devInfo": "iPhone 13 Pro 64-bit;iOS 18.3.2;app 2.93;prevApp 2.93",
 "openReceipts": [],
 "outletId": 720441,
 "protocolVer": "3.0",
 "devId": "5ED1D959-B42C-4CDF-BF7D-24C83DF22E6B",
 "cookieHash": "c06ed63421c39fd5e541841da3daf286",
 "cashRegisterId": 4684032,
 "requestId": 1743572734045,
 "merchantId": 1183226,
 "timestamp": 1743572734042,
 "ver": 293,
 "deletedReceipts": []
}

response:

{
 "result": "ok",
 "cmd": "sendOpenReceipts",
 "timestamp": 1743572734042,
 "openReceipts": [],
 "deletedReceiptsIds": [],
 "lastSyncTs": 1743572734232,
 "requestId": 1743572734228,
 "devId": "5ED1D959-B42C-4CDF-BF7D-24C83DF22E6B",
 "receiptsCount": 1,
 "performFullResync": false,
 "pagination": {
  "nextCursor": null,
  "nextSync": "eyJpZCI6OTM0NTA4NTIxLCJsYXN0VGltZXN0YW1wIjoxNzQzNTY2NzI4MDAwfQ=="
 }
}

*/