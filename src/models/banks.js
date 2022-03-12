var fs = require('fs')

function banks() {}
banks.prototype.getBanks = function (callback) {
  fs.readFile('./data/bancos.json', 'utf8', function (err, result) {
    var data = []
    if (!err) {
      var obj = JSON.parse(result)
      var i = 0
      obj.bancos.forEach(function (banco) {
        if (i < obj.bancos.length) {
          data[i] = banco
          i++
        }
      })
    }
    callback(err, data)
  })
}

module.exports = function () {
  return banks
}
