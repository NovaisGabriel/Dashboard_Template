const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/subjects_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERROR: MongoDB connection failed!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

