const c = require('crypto');
module.exports = {
  getRandomValues: c.getRandomValues || (() => {
    console.log("getRandomValues is not supported")
  })
};