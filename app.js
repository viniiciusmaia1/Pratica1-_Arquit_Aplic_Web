const express = require('express')
const app = express()
const consign = require('consign')

app.set('view engine', 'ejs')
app.set('views', './src/views')

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app)

app.listen(8000, function () {
  console.log('Servidor está ativo!')
})
