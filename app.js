const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', routes)

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})