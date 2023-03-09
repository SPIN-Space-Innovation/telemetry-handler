const fs = require('fs');

const date = new Date();
const fileName = `logs/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.log`

module.exports = async (messageStr) => {
  fs.appendFileSync(fileName, `${Date.now()},${messageStr}`);
}