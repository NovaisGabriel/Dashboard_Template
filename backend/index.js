const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

const port = 3050
app.listen(port, () => {
    const devMsg = 'Backend => ON ; PORT =>'
    console.log('\x1b[44m%s\x1b[37m', devMsg, port,'\x1b[0m')
})