const fs = require("fs");
const http = require("http");
const moment = require("moment");
const imageHash = require("image-hash");

const imghash = require("imghash");
imghash.hash("./36.png").then(hash => {
  console.log(hash); // 'f884c4d8d1193c07'
});
