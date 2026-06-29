const bodyparser = require("body-parser")
const encoder = new bodyparser.urlencoded()

module.exports = {
    encoder:encoder,
}